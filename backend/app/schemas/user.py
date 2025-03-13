from typing import Optional, List, Dict, Any
from datetime import datetime
from pydantic import BaseModel, EmailStr, Field

class UserBase(BaseModel):
    """用户基础Schema"""
    username: str = Field(..., min_length=3, max_length=50)
    email: EmailStr
    full_name: Optional[str] = None
    bio: Optional[str] = None
    avatar: Optional[str] = None

class UserCreate(UserBase):
    """创建用户请求Schema"""
    password: str = Field(..., min_length=6)
    
class UserUpdate(BaseModel):
    """更新用户请求Schema"""
    full_name: Optional[str] = None
    bio: Optional[str] = None
    avatar: Optional[str] = None
    preferences: Optional[Dict[str, Any]] = None
    website: Optional[str] = None
    social_links: Optional[Dict[str, str]] = None

class UserResponse(UserBase):
    """用户响应Schema"""
    id: str
    roles: List[str]
    novel_count: int
    total_word_count: int
    last_writing_time: Optional[datetime]
    created_at: datetime
    updated_at: Optional[datetime]
    
    class Config:
        from_attributes = True

class UserProfile(UserResponse):
    """用户详细信息Schema"""
    following_count: int
    followers_count: int
    subscription_plan: Optional[str]
    website: Optional[str]
    social_links: Dict[str, str]
    tags: List[str] 