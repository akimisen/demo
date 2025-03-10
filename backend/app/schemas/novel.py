from typing import Optional, List
from datetime import datetime
from pydantic import BaseModel

# 基础Schema
class NovelBase(BaseModel):
    title: str
    abstract: Optional[str] = None
    genre: Optional[str] = None
    status: Optional[str] = "drafting"

# 创建请求Schema
class NovelCreate(NovelBase):
    pass

# 更新请求Schema
class NovelUpdate(BaseModel):
    title: Optional[str] = None
    abstract: Optional[str] = None
    genre: Optional[str] = None
    status: Optional[str] = None

# 响应Schema
class NovelResponse(NovelBase):
    id: str
    user_id: str
    created_at: datetime
    updated_at: Optional[datetime] = None
    chapter_count: int = 0
    
    class Config:
        from_attributes = True

# 详细响应Schema
class NovelDetailResponse(NovelResponse):
    characters: List[dict] = []  # 包含角色详情
    locations: List[dict] = []   # 包含地点详情
    plotlines: List[dict] = []   # 包含情节线详情
