import motor.motor_asyncio
from fastapi import FastAPI
from app.config import settings

# MongoDB客户端
client = None
db = None

async def connect_to_mongo():
    """连接到MongoDB数据库"""
    global client, db
    client = motor.motor_asyncio.AsyncIOMotorClient(
        settings.MONGODB_URL, uuidRepresentation="standard"
    )
    db = client[settings.MONGODB_DB_NAME]
    print(f"Connected to MongoDB: {settings.MONGODB_URL}")

async def close_mongo_connection():
    """关闭MongoDB连接"""
    global client
    if client:
        client.close()
        print("Closed MongoDB connection")

# 获取集合引用
novels = lambda: db.novels
chapters = lambda: db.chapters
characters = lambda: db.characters
outlines = lambda: db.outlines
locations = lambda: db.locations
plotlines = lambda: db.plotlines