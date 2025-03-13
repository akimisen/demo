from typing import Optional
from pydantic import BaseModel, EmailStr
from datetime import datetime

class UserResponse(BaseModel):
    """用户响应模型"""
    id: str
    username: str
    email: EmailStr
    full_name: Optional[str] = None
    bio: Optional[str] = None
    is_active: bool = True
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True 