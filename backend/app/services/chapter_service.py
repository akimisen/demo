from motor.motor_asyncio import AsyncIOMotorDatabase
from app.models.chapter import Chapter
from typing import List, Dict, Any

class ChapterService:
    def __init__(self, db: AsyncIOMotorDatabase):
        self.db = db
        
    async def update_novel_stats(self, novel_id: str) -> None:
        """更新小说的统计信息（章节数和总字数）"""
        stats = await self.db.chapters.aggregate([
            {"$match": {"novel_id": novel_id}},
            {"$group": {
                "_id": "$novel_id",
                "chapter_count": {"$sum": 1},
                "word_count": {"$sum": "$word_count"}
            }}
        ]).to_list(1)
        
        if stats:
            await self.db.novels.update_one(
                {"_id": novel_id},
                {"$set": {
                    "chapter_count": stats[0]["chapter_count"],
                    "word_count": stats[0]["word_count"]
                }}
            )
    
    async def create_chapter(self, chapter_data: Dict[str, Any]) -> Dict[str, Any]:
        """创建新章节并更新小说统计信息"""
        result = await self.db.chapters.insert_one(chapter_data)
        chapter_data["_id"] = result.inserted_id
        
        # 更新小说统计信息
        await self.update_novel_stats(chapter_data["novel_id"])
        
        return chapter_data
        
    async def update_chapter(self, chapter_id: str, chapter_data: Dict[str, Any]) -> Dict[str, Any]:
        """更新章节并更新小说统计信息"""
        await self.db.chapters.update_one(
            {"_id": chapter_id},
            {"$set": chapter_data}
        )
        
        # 获取章节所属的小说ID
        chapter = await self.db.chapters.find_one({"_id": chapter_id})
        if chapter:
            # 更新小说统计信息
            await self.update_novel_stats(chapter["novel_id"])
            
        return await self.db.chapters.find_one({"_id": chapter_id})
