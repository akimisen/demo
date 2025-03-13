import asyncio
import click
from motor.motor_asyncio import AsyncIOMotorClient
from app.config import settings

'''
# 初始化数据库结构
python -m migrations.cli init

# 插入测试数据
python -m migrations.cli seed
'''


@click.group()
def cli():
    """Database migration commands"""
    pass

@cli.command()
def init():
    """Initialize database"""
    asyncio.run(init_db())

@cli.command()
def seed():
    """Seed database with test data"""
    asyncio.run(seed_db())

async def init_db():
    """Run all migrations"""
    # 导入并执行所有迁移脚本
    from migrations.versions import all_migrations
    for migration in all_migrations:
        await migration.upgrade()

async def seed_db():
    """Insert test data"""
    client = AsyncIOMotorClient(settings.MONGODB_URL)
    db = client[settings.MONGODB_DB_NAME]
    # 执行测试数据插入...

if __name__ == "__main__":
    cli()
