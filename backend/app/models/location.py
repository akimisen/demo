from typing import Optional, List
from app.models.base import MongoBaseModel

class Location(MongoBaseModel):
    """
    位置/场景数据模型
    
    代表MongoDB中的一个位置文档，存储场景和地点信息
    """
    novel_id: str  # 所属小说ID
    name: str  # 地点名称
    type: Optional[str] = None  # 类型：city, building, room, natural, etc.
    
    # 地点详情
    description: Optional[str] = None  # 描述
    significance: Optional[str] = None  # 在故事中的重要性
    atmosphere: Optional[str] = None  # 氛围/环境
    
    # 地理信息
    parent_location: Optional[str] = None  # 父级地点ID
    sub_locations: List[str] = []  # 子地点ID列表
    
    # 元数据
    tags: List[str] = []  # 标签
    notes: Optional[str] = None  # 备注
    image: Optional[str] = None  # 图片URL
    
    # 统计数据
    appearance_count: int = 0  # 出场次数
    
    class Config:
        collection = "locations"  # MongoDB集合名称
