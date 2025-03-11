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
    await MongoDB.connect_to_mongo()

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

