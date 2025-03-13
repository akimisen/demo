from typing import Optional, List, Dict, Any
from datetime import datetime
from pydantic import Field
from app.models.base import BaseModel,MongoBaseModel

# 基础Schema - 包含共享的基本字段
class NovelBase(BaseModel):  # 注意这里改为BaseModel
    title: str
    author: str
    abstract: Optional[str] = None
    genre: Optional[str] = None
    status: str = "drafting"
    protagonist: Optional[str] = None
    setting: Optional[str] = None
    target_audience: Optional[str] = None
    tags: List[str] = []
    cover_image: Optional[str] = None
    custom_fields: Dict[str, Any] = {}

# 创建请求Schema
class NovelCreate(BaseModel):
    title: str
    abstract: Optional[str] = None
    genre: Optional[str] = None
    status: str = "drafting"
    protagonist: Optional[str] = None
    setting: Optional[str] = None
    target_audience: Optional[str] = None
    tags: List[str] = []
    cover_image: Optional[str] = None
    custom_fields: Dict[str, Any] = {}

# 更新请求Schema
class NovelUpdate(NovelBase):
    pass

# 响应Schema
class NovelResponse(MongoBaseModel, NovelBase):  
    # 继承MongoBaseModel获取id等字段
    # 显示定义NovelBase中的字段
    title: str
    author: str
    abstract: Optional[str] = None
    genre: Optional[str] = None
    status: str = "drafting"
    protagonist: Optional[str] = None
    setting: Optional[str] = None
    target_audience: Optional[str] = None
    tags: List[str] = []
    cover_image: Optional[str] = None
    custom_fields: Dict[str, Any] = {}
    
    # 额外字段
    user_id: str
    chapter_count: int = 0
    word_count: int = 0
    progress: int = 0

    class Config(MongoBaseModel.Config):
        from_attributes = True

# 详细响应Schema
class NovelDetailResponse(NovelResponse):
    characters: List[dict] = []
    locations: List[dict] = []
    plotlines: List[dict] = []

# 分页响应Schema
class PaginatedNovelResponse(BaseModel):  # 改为BaseModel，因为不需要MongoDB字段
    list: List[NovelResponse]
    user_id: str
    total: int
    page: int
    page_size: int

    class Config:
        from_attributes = True
