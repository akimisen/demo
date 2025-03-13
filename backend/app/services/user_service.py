from motor.motor_asyncio import AsyncIOMotorDatabase
from typing import Optional
from bson import ObjectId

class UserService:
    def __init__(self, db: AsyncIOMotorDatabase):
        self.db = db
        self.users = self.db.users

    async def get_user_by_id(self, user_id: str) -> Optional[dict]:
        """根据ID获取用户信息"""
        try:
            user = await self.users.find_one({"_id": ObjectId(user_id)})
            return user
        except:
            return None

    async def get_username_by_id(self, user_id: str) -> Optional[str]:
        """根据用户ID获取用户名"""
        user = await self.get_user_by_id(user_id)
        return user.get("username") if user else None 