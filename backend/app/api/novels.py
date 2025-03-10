from fastapi import APIRouter, Depends, HTTPException, status
from typing import List
from app.auth.dependencies import get_current_user
from app.services.novel_service import NovelService
from app.schemas.novel import NovelCreate, NovelResponse, NovelUpdate

router = APIRouter()
novel_service = NovelService()

@router.post("/novels", response_model=NovelResponse, status_code=status.HTTP_201_CREATED)
async def create_novel(
    novel: NovelCreate,
    current_user = Depends(get_current_user)
):
    """创建新小说"""
    return await novel_service.create_novel(novel.dict(), current_user["id"])

@router.get("/novels", response_model=List[NovelResponse])
async def get_novels(current_user = Depends(get_current_user)):
    """获取当前用户的所有小说"""
    return await novel_service.get_user_novels(current_user["id"])

@router.get("/novels/{novel_id}", response_model=NovelResponse)
async def get_novel(novel_id: str, current_user = Depends(get_current_user)):
    """获取特定小说详情"""
    novel = await novel_service.get_novel(novel_id)
    if not novel or novel["user_id"] != current_user["id"]:
        raise HTTPException(status_code=404, detail="Novel not found")
    return novel

@router.post("/novels/{novel_id}/chapters", status_code=status.HTTP_201_CREATED)
async def add_chapter(
    novel_id: str,
    chapter_data: dict,
    current_user = Depends(get_current_user)
):
    """添加章节到小说"""
    # 检查小说是否存在且属于当前用户
    novel = await novel_service.get_novel(novel_id)
    if not novel or novel["user_id"] != current_user["id"]:
        raise HTTPException(status_code=404, detail="Novel not found")
    
    return await novel_service.add_chapter(novel_id, chapter_data)
