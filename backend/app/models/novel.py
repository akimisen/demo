from typing import Optional, List
from datetime import datetime
from app.models.base import MongoBaseModel

class Novel(MongoBaseModel):
    """
    小说数据模型
    
    代表MongoDB中的一个小说文档，存储小说的基本信息和引用关系
    """
    title: str
    user_id: str  # 创建者ID
    abstract: Optional[str] = None  # 小说摘要
    genre: Optional[str] = None  # 小说类型/流派
    status: str = "drafting"  # 状态：drafting, completed, published
    word_count: int = 0  # 总字数
    
    # 引用关系 - 存储ID引用
    characters: List[str] = []  # 角色ID列表
    locations: List[str] = []   # 地点ID列表
    plotlines: List[str] = []   # 情节线ID列表
    
    # 元数据
    references: Optional[str] = None  # 参考资料
    tags: List[str] = []  # 标签
    cover_image: Optional[str] = None  # 封面图片URL
    
    # 统计数据
    chapter_count: int = 0  # 章节数量
    last_edited_at: Optional[datetime] = None  # 最后编辑时间
    
    class Config:
        collection = "novels"  # MongoDB集合名称