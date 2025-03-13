from typing import Optional, List, Dict, Any
from datetime import datetime
from pydantic import Field
from app.models.base import MongoBaseModel

# 基础Schema
class NovelBase(MongoBaseModel):
    title: str
    author: str
    abstract: Optional[str] = None
    genre: Optional[str] = None
    status: str = "drafting"

# 创建请求Schema
class NovelCreate(MongoBaseModel):
    pass  # 移除user_id，这将从token中获取

# 更新请求Schema
class NovelUpdate(MongoBaseModel):
    pass

# 响应Schema - 重命名为NovelResponse以匹配API引用
class NovelResponse(MongoBaseModel):
    id: str = Field(alias="_id")  # 将 ObjectId 映射为字符串
    title: str
    author: str
    user_id: str
    created_at: datetime
    updated_at: datetime
    chapter_count: int
    word_count: int
    progress: int = 0
    protagonist: Optional[str] = None
    setting: Optional[str] = None
    target_audience: Optional[str] = None
    tags: List[str] = []
    cover_image: Optional[str] = None
    custom_fields: Dict[str, Any] = {}
    
    class Config(MongoBaseModel.Config):
        from_attributes = True

# 详细响应Schema
class NovelDetailResponse(NovelResponse):
    characters: List[dict] = []  # 包含角色详情
    locations: List[dict] = []   # 包含地点详情
    plotlines: List[dict] = []   # 包含情节线详情

class PaginatedNovelResponse(MongoBaseModel):
    list: List[NovelResponse]
    user_id: str
    total: int
    page: int
    page_size: int

    class Config:
        from_attributes = True
