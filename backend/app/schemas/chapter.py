from typing import Optional, List
from datetime import datetime
from pydantic import BaseModel, Field
from app.models.base import MongoBaseModel

# 基础章节模型 - 包含共享的基本字段
class ChapterBase(BaseModel):
    title: str
    order: int
    content: Optional[str] = None
    summary: Optional[str] = None
    word_count: int = 0
    status: str = "draft"  # draft, completed, reviewing
    characters: List[str] = []
    locations: List[str] = []
    plotlines: List[str] = []
    hook: Optional[str] = None
    value: Optional[int] = None
    tags: List[str] = []
    notes: Optional[str] = None
    is_published: bool = False

# 创建请求Schema
class ChapterCreate(ChapterBase):
    novel_id: str  # 创建时需要提供novel_id

# 更新请求Schema
class ChapterUpdate(ChapterBase):
    pass

# 响应Schema - 继承MongoBaseModel获取id等字段
class ChapterResponse(MongoBaseModel, ChapterBase):
    novel_id: str  # 关联的小说ID
    version: int = 1
    
    class Config(MongoBaseModel.Config):
        from_attributes = True

# 分页响应Schema
class PaginatedChapterResponse(BaseModel):
    list: List[ChapterResponse]
    total: int
    page: int
    page_size: int

    class Config:
        from_attributes = True
