from src.models import MongoBaseModel
from typing import Optional, List

class Novel(MongoBaseModel):
    title: str
    user_id: str
    abstract: Optional[str] = None
    genre: Optional[str] = None
    status: Optional[str] = "drafting"
    references: Optional[str] = None
    characters: Optional[List[str]] = []  # 存储角色ID的引用
    locations: Optional[List[str]] = []   # 存储地点ID的引用
    plotlines: Optional[List[str]] = []   # 存储情节线ID的引用
