"""Initial database schema

Revision ID: 001
"""
from motor.motor_asyncio import AsyncIOMotorClient
from app.config import settings

async def upgrade():
    """Create initial collections and indexes"""
    client = AsyncIOMotorClient(settings.MONGODB_URL)
    db = client[settings.MONGODB_DB_NAME]
    
    # 创建集合
    await db.create_collection("novels")
    await db.create_collection("chapters")
    
    # 创建索引
    await db.novels.create_index("user_id")
    await db.novels.create_index("title")
    await db.chapters.create_index([("novel_id", 1), ("order", 1)])
    await db.chapters.create_index([("novel_id", 1), ("status", 1)])

async def downgrade():
    """Drop collections"""
    client = AsyncIOMotorClient(settings.MONGODB_URL)
    db = client[settings.MONGODB_DB_NAME]
    
    await db.novels.drop()
    await db.chapters.drop()
