from fastapi_users import models
from pydantic import EmailStr

class User(models.BaseUser):
    username: str
    full_name: str = None
    bio: str = None
    
class UserCreate(models.BaseUserCreate):
    username: str
    full_name: str = None
    bio: str = None
    
class UserUpdate(User, models.BaseUserUpdate):
    pass

class UserDB(User, models.BaseUserDB):
    pass