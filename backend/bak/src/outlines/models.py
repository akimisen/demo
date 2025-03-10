from typing import Optional, List, Dict, Any
from src.models import MongoBaseModel
from enum import Enum

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