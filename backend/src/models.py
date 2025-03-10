from typing import Optional, List, Dict, Any
from datetime import datetime
from pydantic import BaseModel, Field
from bson import ObjectId
from typing import Optional, List, Dict, Any
from src.models import MongoBaseModel
from enum import Enum

# 自定义PyObjectId类型，用于处理MongoDB的ObjectId
class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid ObjectId")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

# 基础模型，包含共同字段
class MongoBaseModel(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True
        json_encoders = {
            ObjectId: str,
            datetime: lambda v: v.isoformat()
        }


class Character(MongoBaseModel):
    name: str
    novel_id: str
    description: Optional[str] = None
    role: Optional[str] = None
    tags: Optional[List[str]] = []
    avatar: Optional[str] = None

class ColumnType(str, Enum):
    TEXT = "text"
    TAGS = "tags"
    CHARACTER = "character"
    LOCATION = "location"
    PLOTLINE = "plotline"
    NUMBER = "number"
    DATE = "date"

class Column(MongoBaseModel):
    id: str  # 自定义ID，不使用MongoDB的_id
    name: str
    type: ColumnType
    order: int
    required: Optional[bool] = False
    default_value: Optional[Any] = None

class Row(MongoBaseModel):
    id: str  # 自定义ID
    chapter_id: Optional[str] = None
    order: int
    cells: Dict[str, Any]  # 键是列ID，值是单元格数据

class Outline(MongoBaseModel):
    novel_id: str
    title: str
    columns: List[Column]
    rows: List[Row]

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