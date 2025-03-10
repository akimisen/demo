from typing import Optional, List
from src.models import MongoBaseModel

class Character(MongoBaseModel):
    name: str
    novel_id: str
    description: Optional[str] = None
    role: Optional[str] = None
    tags: Optional[List[str]] = []
    avatar: Optional[str] = None