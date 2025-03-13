from datetime import datetime
from typing import Optional, Any
from pydantic import BaseModel, Field, field_validator
from bson import ObjectId

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v, handler):
        if v is None:
            raise ValueError("ObjectId cannot be None")
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid ObjectId")
        return ObjectId(v)

    @classmethod
    def __get_pydantic_json_schema__(cls, core_schema, handler):
        return {
            "type": "string",
            "description": "ObjectId string representation",
            "examples": ["507f1f77bcf86cd799439011"]
        }
    
    def __json__(self):
        return str(self)

class MongoBaseModel(BaseModel):
    id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: Optional[datetime] = None

    @field_validator("id", mode="before")
    def prevent_none_id(cls, v):
        if v is None:
            return PyObjectId()  # 自动生成新的ObjectId
        return v

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True
        json_encoders = {
            ObjectId: str,
            datetime: lambda v: v.isoformat()
        }