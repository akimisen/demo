from typing import Optional
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from app.config import settings
from tenacity import retry, stop_after_attempt, wait_fixed
class MongoDB:
    client: Optional[AsyncIOMotorClient] = None
    db: Optional[AsyncIOMotorDatabase] = None
    _connected = False

    @classmethod
    @retry(stop=stop_after_attempt(3), wait=wait_fixed(2))
    async def connect_to_mongo(cls):
        """连接到MongoDB数据库"""
        if cls.client is None:
            cls.client = AsyncIOMotorClient(
                settings.MONGODB_URL, 
                uuidRepresentation="standard"
            )
            cls.db = cls.client[settings.MONGODB_DB_NAME]
            cls._connected = True
            print(f"Connected to MongoDB: {settings.MONGODB_URL}")

    @classmethod
    async def health_check(cls):
        try:
            await cls.client.admin.command('ping')
            return True
        except:
            return False

    @classmethod
    async def close_mongo_connection(cls):
        """关闭MongoDB连接"""
        if cls.client is not None:
            cls.client.close()
            cls.client = None
            cls.db = None
            print("Closed MongoDB connection")

    @classmethod
    async def create_indexes(cls):
        """创建数据库索引"""
        if cls.db is not None:
            # 小说索引
            await cls.db.novels.create_index("user_id")
            await cls.db.novels.create_index("title")
            
            # 章节索引
            await cls.db.chapters.create_index([("novel_id", 1), ("order", 1)])
            await cls.db.chapters.create_index([("novel_id", 1), ("status", 1)])

    @classmethod
    def get_db(cls) -> AsyncIOMotorDatabase:
        """获取数据库实例"""
        if cls.db is None:
            raise RuntimeError("Database not initialized")
        return cls.db

# 导出便捷访问方法
async def get_db() -> AsyncIOMotorDatabase:
    if not MongoDB._connected or MongoDB.db is None:
        raise RuntimeError("Database not initialized or connection lost")
    return MongoDB.get_db()

# 获取集合引用
novels = lambda: get_db().novels
chapters = lambda: get_db().chapters
characters = lambda: get_db().characters
outlines = lambda: get_db().outlines
locations = lambda: get_db().locations
plotlines = lambda: get_db().plotlines