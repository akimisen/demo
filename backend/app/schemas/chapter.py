from typing import Optional, List
from datetime import datetime
from pydantic import BaseModel

class ChapterBase(BaseModel):
    title: str
    order: int
    content: Optional[str] = None
    summary: Optional[str] = None
    word_count: int = 0
    status: str = "draft"  # draft, completed, reviewing

class ChapterCreate(ChapterBase):
    pass

class ChapterUpdate(ChapterBase):
    pass

class ChapterResponse(ChapterBase):
    id: str
    novel_id: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True