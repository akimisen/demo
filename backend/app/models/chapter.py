from typing import Optional, List, Dict, Any
from app.models.base import MongoBaseModel

class Chapter(MongoBaseModel):
    """
    小说章节数据模型
    
    代表MongoDB中的一个章节文档，存储章节内容和元数据
    """
    novel_id: str  # 所属小说ID
    title: str  # 章节标题
    order: int  # 章节顺序
    content: Optional[str] = None  # 章节内容
    summary: Optional[str] = None  # 章节摘要
    word_count: int = 0  # 章节字数
    
    # 关联数据 - 存储ID引用
    characters: List[str] = []  # 出场角色ID列表
    locations: List[str] = []   # 场景地点ID列表
    plotline: Optional[str] = None  # 主要情节线ID
    
    # 写作辅助数据
    hook: Optional[str] = None  # 章节钩子/看点
    value: Optional[int] = None  # 情感价值变化 (-10到10)
    labels: List[str] = []  # 标签/标记
    notes: Optional[str] = None  # 作者笔记
    
    # 状态
    status: str = "draft"  # draft, revised, completed
    is_published: bool = False  # 是否已发布
    
    # 版本控制
    version: int = 1  # 版本号
    revision_history: List[Dict[str, Any]] = []  # 修订历史
    
    class Config:
        collection = "chapters"  # MongoDB集合名称