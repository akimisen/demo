import os
from pydantic import BaseSettings
from dotenv import load_dotenv

load_dotenv()

class Settings(BaseSettings):
    APP_NAME: str = "Novel Writing Assistant"
    API_V1_STR: str = "/api/v1"
    SECRET_KEY: str = os.environ.get("SECRET_KEY", "your-secret-key")
    
    # MongoDB设置
    MONGODB_URL: str = os.environ.get("MONGODB_URL", "mongodb://localhost:27017")
    MONGODB_DB_NAME: str = os.environ.get("MONGODB_DB_NAME", "novel_assistant")
    
    # JWT设置
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7天
    
    # CORS设置
    BACKEND_CORS_ORIGINS: list = ["http://localhost:3000"]  # 前端地址

    class Config:
        env_file = ".env"

settings = Settings()