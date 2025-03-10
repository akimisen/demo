from typing import Optional, List, Dict
from app.models.base import MongoBaseModel

class Character(MongoBaseModel):
    """
    角色数据模型
    
    代表MongoDB中的一个角色文档，存储角色信息
    """
    novel_id: str  # 所属小说ID
    name: str  # 角色名称
    role: Optional[str] = None  # 角色定位：protagonist, antagonist, supporting
    
    # 角色详情
    age: Optional[int] = None  # 年龄
    gender: Optional[str] = None  # 性别
    occupation: Optional[str] = None  # 职业
    description: Optional[str] = None  # 外貌描述
    background: Optional[str] = None  # 背景故事
    personality: Optional[str] = None  # 性格特点
    
    # 角色关系
    relationships: List[Dict[str, str]] = []  # 与其他角色的关系
    
    # 角色发展
    arc: Optional[str] = None  # 角色成长弧
    goals: List[str] = []  # 目标
    conflicts: List[str] = []  # 冲突
    
    # 元数据
    tags: List[str] = []  # 标签
    notes: Optional[str] = None  # 备注
    avatar: Optional[str] = None  # 头像/图片URL
    
    # 统计数据
    appearance_count: int = 0  # 出场次数
    
    class Config:
        collection = "characters"  # MongoDB集合名称