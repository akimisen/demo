from typing import Optional, List, Dict, Any
from app.models.base import MongoBaseModel

class Chapter(MongoBaseModel):
    """
    小说章节数据模型
    
    代表MongoDB中的一个章节文档，存储章节内容和元数据
    """
    novel_id: str
    title: str
    order: int
    content: Optional[str] = None
    summary: Optional[str] = None
    word_count: int = 0
    
    # 关联数据
    characters: List[str] = []
    locations: List[str] = []
    plotlines: List[str] = []  # 改为数组
    
    # 写作辅助
    hook: Optional[str] = None
    value: Optional[int] = None
    tags: List[str] = []  # 改为tags以匹配前端
    notes: Optional[str] = None
    
    status: str = "draft"
    is_published: bool = False
    version: int = 1
    revision_history: List[Dict[str, Any]] = []

    class Config:
        indexes = [
            [("novel_id", 1), ("order", 1)],  # 复合索引优化章节列表查询
            [("novel_id", 1), ("status", 1)]  # 复合索引优化状态过滤
        ]