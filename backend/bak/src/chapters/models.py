from typing import Optional, List
from src.models import MongoBaseModel

class Chapter(MongoBaseModel):
    novel_id: str
    title: str
    summary: Optional[str] = None
    content: Optional[str] = None
    order: int
    characters: Optional[List[str]] = []  # 存储角色ID的引用
    locations: Optional[List[str]] = []   # 存储地点ID的引用
    plotline: Optional[str] = None        # 存储情节线ID的引用
    hook: Optional[str] = None
    value: Optional[int] = None
    labels: Optional[List[str]] = []
    notes: Optional[str] = None