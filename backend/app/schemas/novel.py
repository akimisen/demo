from typing import Optional, List, Dict, Any
from datetime import datetime
from pydantic import BaseModel

# 基础Schema
class NovelBase(BaseModel):
    title: str
    author: str
    abstract: Optional[str] = None
    genre: Optional[str] = None
    status: str = "drafting"

# 创建请求Schema
class NovelCreate(NovelBase):
    pass  # 移除user_id，这将从token中获取

# 更新请求Schema
class NovelUpdate(NovelBase):
    pass

# 响应Schema - 重命名为NovelResponse以匹配API引用
class NovelResponse(NovelBase):
    id: str
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
    
    class Config:
        from_attributes = True

# 详细响应Schema
class NovelDetailResponse(NovelResponse):
    characters: List[dict] = []  # 包含角色详情
    locations: List[dict] = []   # 包含地点详情
    plotlines: List[dict] = []   # 包含情节线详情
