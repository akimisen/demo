from fastapi import APIRouter, Depends, HTTPException, status
from typing import List
from src.outlines.schemas import OutlineCreate, OutlineUpdate, OutlineResponse, RowCreate, RowUpdate
from src.outlines.service import OutlineService
from src.auth.dependencies import get_current_user

router = APIRouter()
outline_service = OutlineService()

@router.post("/{novel_id}/outlines", response_model=OutlineResponse)
async def create_outline(
    novel_id: str,
    outline: OutlineCreate,
    current_user = Depends(get_current_user)
):
    """创建新的小说大纲"""
    return await outline_service.create_outline(novel_id, outline, current_user["id"])

@router.get("/{novel_id}/outlines", response_model=List[OutlineResponse])
async def get_novel_outlines(
    novel_id: str,
    current_user = Depends(get_current_user)
):
    """获取小说的所有大纲"""
    return await outline_service.get_novel_outlines(novel_id, current_user["id"])

@router.get("/outlines/{outline_id}", response_model=OutlineResponse)
async def get_outline(
    outline_id: str,
    current_user = Depends(get_current_user)
):
    """获取特定大纲详情"""
    return await outline_service.get_outline(outline_id, current_user["id"])

@router.put("/outlines/{outline_id}/rows/{row_id}", response_model=OutlineResponse)
async def update_row(
    outline_id: str,
    row_id: str,
    row: RowUpdate,
    current_user = Depends(get_current_user)
):
    """更新大纲行数据"""
    return await outline_service.update_row(outline_id, row_id, row, current_user["id"])

@router.post("/outlines/{outline_id}/columns", response_model=OutlineResponse)
async def add_column(
    outline_id: str,
    column_data: dict,
    current_user = Depends(get_current_user)
):
    """添加新列"""
    return await outline_service.add_column(outline_id, column_data, current_user["id"])