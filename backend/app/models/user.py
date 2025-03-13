from typing import Optional, List, Dict, Any
from datetime import datetime
from app.models.base import MongoBaseModel
from pydantic import EmailStr, Field

class User(MongoBaseModel):
    """
    用户数据模型
    
    代表MongoDB中的一个用户文档，存储用户基本信息和相关配置
    """
    # 基本信息
    username: str = Field(..., min_length=3, max_length=50)
    email: EmailStr
    hashed_password: str
    full_name: Optional[str] = None
    avatar: Optional[str] = None
    
    # 账户状态
    is_active: bool = True
    is_verified: bool = False
    last_login: Optional[datetime] = None
    
    # 用户角色和权限
    roles: List[str] = ["user"]  # 默认角色
    permissions: List[str] = []
    
    # 用户偏好设置
    preferences: Dict[str, Any] = {
        "theme": "light",
        "language": "zh-CN",
        "notifications": True,
        "email_notifications": True
    }
    
    # 创作统计
    novel_count: int = 0
    total_word_count: int = 0
    last_writing_time: Optional[datetime] = None
    
    # 社交关联
    following: List[str] = []  # 关注的作者ID列表
    followers: List[str] = []  # 粉丝ID列表
    
    # 订阅信息
    subscription_plan: Optional[str] = None  # 订阅计划：free, premium, pro
    subscription_expires: Optional[datetime] = None
    
    # API访问
    api_key: Optional[str] = None
    api_key_expires: Optional[datetime] = None
    
    # 元数据
    bio: Optional[str] = None  # 个人简介
    website: Optional[str] = None
    social_links: Dict[str, str] = {}  # 社交媒体链接
    tags: List[str] = []  # 用户标签/兴趣
    
    class Config:
        collection = "users"  # MongoDB集合名称
        indexes = [
            "email",  # 邮箱索引
            "username",  # 用户名索引
            [("email", 1), ("username", 1)],  # 复合唯一索引
            "api_key"  # API密钥索引
        ]
        
    def is_admin(self) -> bool:
        """检查用户是否为管理员"""
        return "admin" in self.roles
    
    def can(self, permission: str) -> bool:
        """检查用户是否有特定权限"""
        return permission in self.permissions or self.is_admin()
    
    def update_last_login(self):
        """更新最后登录时间"""
        self.last_login = datetime.now()
    
    def update_writing_stats(self, word_count: int):
        """更新写作统计"""
        self.total_word_count += word_count
        self.last_writing_time = datetime.now() 