import motor.motor_asyncio
from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime
from src.config import settings

# 异步MongoDB客户端
client = motor.motor_asyncio.AsyncIOMotorClient(settings.MONGODB_URL)
db = client[settings.MONGODB_DB_NAME]

# 为各个集合创建引用
novels_collection = db.novels
chapters_collection = db.chapters
characters_collection = db.characters
locations_collection = db.locations
plotlines_collection = db.plotlines
outlines_collection = db.outlines

# 添加创建和更新时间
async def add_timestamps(document, is_new=True):
    now = datetime.now()
    if is_new:
        document["created_at"] = now
    document["updated_at"] = now
    return document

# 转换ID和处理时间戳
def fix_id(obj):
    if obj.get("_id"):
        obj["id"] = str(obj["_id"])
        del obj["_id"]
    return obj