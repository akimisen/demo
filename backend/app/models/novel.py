from typing import Optional, List, Dict, Any
from datetime import datetime
from app.models.base import MongoBaseModel

class Novel(MongoBaseModel):
    """
    小说数据模型
    
    代表MongoDB中的一个小说文档，存储小说的基本信息和引用关系
    """
    title: str
    author: str
    user_id: str
    abstract: Optional[str] = None
    genre: Optional[str] = None
    status: str = "drafting"  # drafting, ongoing, completed
    word_count: int = 0
    progress: int = 0  # 完成进度
    
    # 角色设定
    protagonist: Optional[str] = None
    characters: List[str] = []
    
    # 世界设定
    setting: Optional[str] = None
    locations: List[str] = []
    
    # 情节设定
    plotlines: List[str] = []
    
    # 目标读者
    target_audience: Optional[str] = None
    
    # 元数据
    references: Optional[str] = None
    tags: List[str] = []
    cover_image: Optional[str] = None
    custom_fields: Dict[str, Any] = {}
    
    # 统计
    chapter_count: int = 0