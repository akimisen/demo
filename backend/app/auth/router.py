from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from app.auth.dependencies import create_access_token, TEST_USER

router = APIRouter()

@router.post("/token")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    """
    获取访问令牌（简化版，仅用于测试）
    
    实际应用中应验证用户凭据并从数据库获取用户
    """
    # 简化的认证逻辑，仅用于测试
    if form_data.username == "testuser" and form_data.password == "testpassword":
        access_token = create_access_token(data={"sub": TEST_USER["id"]})
        return {"access_token": access_token, "token_type": "bearer"}
    else:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
