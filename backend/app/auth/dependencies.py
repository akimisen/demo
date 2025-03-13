from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from datetime import datetime, timedelta
from app.config import settings

# 简化的OAuth2认证
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/auth/token")

# 测试用户（实际应用中应从数据库获取）
TEST_USER = {
    "id": "testuser_id",
    "username": "testuser",
    "email": "test@example.com",
    "is_active": True
}

def create_access_token(data: dict):
    """创建访问令牌"""
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm="HS256")
    return encoded_jwt

async def get_current_user(token: str = Depends(oauth2_scheme)):
    """获取当前用户（简化版，仅用于测试）"""
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
        user_id: str = payload.get("sub")
        print(f"user_id: {user_id}")
        if user_id is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    
    # 在实际应用中，应该从数据库获取用户
    # 这里简化为返回测试用户
    return TEST_USER
