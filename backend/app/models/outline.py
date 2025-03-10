from typing import Optional, List, Dict, Any
from enum import Enum
from app.models.base import MongoBaseModel

class ColumnType(str, Enum):
    """列类型枚举"""
    TEXT = "text"
    TAGS = "tags"
    CHARACTER = "character"
    LOCATION = "location"
    PLOTLINE = "plotline"
    NUMBER = "number"
    DATE = "date"
    CHECKBOX = "checkbox"
    SELECT = "select"

class Column(MongoBaseModel):
    """
    大纲列定义模型
    
    定义大纲表格中的一列
    """
    id: str  # 自定义列ID
    name: str  # 列名称
    type: ColumnType  # 列类型
    order: int  # 列顺序
    width: Optional[int] = None  # 列宽度
    required: bool = False  # 是否必填
    default_value: Optional[Any] = None  # 默认值
    options: Optional[List[str]] = None  # 选项（用于select类型）
    
    class Config:
        collection = None  # 不单独存储为集合

class Row(MongoBaseModel):
    """
    大纲行模型
    
    定义大纲表格中的一行
    """
    id: str  # 自定义行ID
    chapter_id: Optional[str] = None  # 关联章节ID（可选）
    order: int  # 行顺序
    cells: Dict[str, Any] = {}  # 单元格数据，键是列ID，值是单元格内容
    
    class Config:
        collection = None  # 不单独存储为集合

class Outline(MongoBaseModel):
    """
    大纲数据模型
    
    代表MongoDB中的一个大纲文档，存储大纲表格的结构和数据
    """
    novel_id: str  # 所属小说ID
    title: str  # 大纲标题
    description: Optional[str] = None  # 大纲描述
    
    # 表格结构
    columns: List[Column] = []  # 列定义
    rows: List[Row] = []  # 行数据
    
    # 视图设置
    default_view: str = "table"  # 默认视图：table, timeline, storyboard
    view_settings: Dict[str, Any] = {}  # 视图特定设置
    
    # 共享和权限
    is_shared: bool = False  # 是否共享
    shared_with: List[str] = []  # 共享用户ID列表
    
    # 版本控制
    version: int = 1  # 版本号
    
    class Config:
        collection = "outlines"  # MongoDB集合名称