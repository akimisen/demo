from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.db.mongodb import MongoDB
from app.api import novels
from app.auth.router import router as auth_router

app = FastAPI(
    title=settings.APP_NAME,
    description="Novel Writing Assistant API",
    version="0.1.0",
    debug=settings.DEBUG,
    docs_url="/api-docs",  # 自定义Swagger UI的URL
    redoc_url="/redoc",    # 自定义ReDoc的URL
)

# CORS设置
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 数据库连接事件（只需要一次）
@app.on_event("startup")
async def startup_db_client():
    try:
        await MongoDB.connect_to_mongo()
        # Perform a health check to verify connection
        if not await MongoDB.health_check():
            raise RuntimeError("Database health check failed")
    except Exception as e:
        print(f"Failed to connect to MongoDB: {e}")
        # Exit the application
        import sys
        sys.exit(1)

@app.on_event("shutdown")
async def shutdown_db_client():
    await MongoDB.close_mongo_connection()

# 注册路由
app.include_router(auth_router, prefix=f"{settings.API_PREFIX}/auth", tags=["认证"])
app.include_router(novels.router, prefix=f"{settings.API_PREFIX}/novels", tags=["小说"])

@app.get("/")
async def root():
    return {"message": "欢迎使用库库API"}

# 添加一个新的路由作为主页
@app.get("/home")
async def home():
    return {"message": "home页"}

# 添加全局异常处理器
from fastapi import HTTPException
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):
    return JSONResponse(status_code=422, content={"detail": exc.errors()})

@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.detail},
    )