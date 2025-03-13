from typing import List, Dict, Any
from fastapi import APIRouter, Depends, HTTPException, status
from app.auth.dependencies import get_current_user
from app.services.novel_service import NovelService
from app.schemas.novel import NovelCreate, NovelResponse, NovelUpdate, PaginatedNovelResponse
from app.schemas.chapter import ChapterResponse
from app.db.mongodb import get_db
from motor.motor_asyncio import AsyncIOMotorDatabase

router = APIRouter()

@router.post("/", response_model=NovelResponse, status_code=status.HTTP_201_CREATED)
async def create_novel(
    novel: NovelCreate,
    current_user = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_db)
):
    """创建新小说"""
    novel_service = NovelService(db)
    novel_data = novel.dict()
    return await novel_service.create_novel(novel_data, current_user["id"])

@router.get("/all", response_model=PaginatedNovelResponse)
async def get_novels(
    current_user = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_db)
):
    """获取当前用户的所有小说"""
    novel_service = NovelService(db)
    return await novel_service.get_user_novels(current_user["id"])

@router.get("/{novel_id}", response_model=NovelResponse)
async def get_novel(
    novel_id: str, 
    current_user = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_db)
):
    """获取特定小说详情"""
    novel_service = NovelService(db)
    novel = await novel_service.get_novel(novel_id)
    if not novel:
        raise HTTPException(status_code=404, detail="Novel not found")
    elif not novel["user_id"] == current_user["id"]:
        raise HTTPException(status_code=404, detail="You are not the owner of this novel")
    return novel

@router.post("/{novel_id}/chapters", status_code=status.HTTP_201_CREATED)
async def add_chapter(
    novel_id: str,
    chapter_data: dict,
    current_user = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_db)
):
    """添加章节到小说"""
    novel_service = NovelService(db)
    # 检查小说是否存在且属于当前用户
    novel = await novel_service.get_novel(novel_id)
    if not novel or novel["user_id"] != current_user["id"]:
        raise HTTPException(status_code=404, detail="Novel not found")
    
    return await novel_service.add_chapter(novel_id, chapter_data)

@router.get("/{novel_id}/chapters", response_model=List[ChapterResponse])
async def get_novel_chapters(
    novel_id: str,
    page: int = 1,
    page_size: int = 20,
    current_user = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_db)
):
    """获取小说章节列表"""
    novel_service = NovelService(db)
    # 检查小说是否存在且属于当前用户
    novel = await novel_service.get_novel(novel_id)
    if not novel:
        raise HTTPException(status_code=404, detail="Novel not found")
    elif not novel["user_id"] == current_user["id"]:
        raise HTTPException(status_code=404, detail="You are not the owner of this novel")

    return await novel_service.get_novel_chapters(novel_id, page, page_size)

@router.get("/{novel_id}/chapters/{chapter_id}", response_model=ChapterResponse)
async def get_novel_chapter(    
    novel_id: str,
    chapter_id: str,
    current_user = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_db)
):
    novel_service = NovelService(db)
    # 检查小说是否存在且属于当前用户
    novel = await novel_service.get_novel(novel_id)
    if not novel or novel["user_id"] != current_user["id"]:
        raise HTTPException(status_code=404, detail="Novel not found")

    return await novel_service.get_novel_chapter(novel_id,chapter_id)

@router.get("/{novel_id}/with-chapters")
async def get_novel_with_chapters(
    novel_id: str,
    page: int = 1,
    page_size: int = 20,
    current_user = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_db)
):
    """获取小说及其章节列表（合并接口）"""
    novel_service = NovelService(db)
    # 检查小说是否存在且属于当前用户
    novel = await novel_service.get_novel(novel_id)
    if not novel or novel["user_id"] != current_user["id"]:
        raise HTTPException(status_code=404, detail="Novel not found")
    
    # 获取章节列表
    chapters = await novel_service.get_novel_chapters(novel_id, page, page_size)
    
    # 返回合并的结果
    return {
        "novel": novel,
        "chapters": chapters
    }