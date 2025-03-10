from datetime import datetime
from bson import ObjectId
from app.db.mongodb import db
from app.models.novel import Novel
from app.models.chapter import Chapter

class NovelService:
    """小说相关服务类，处理小说和章节的业务逻辑"""
    
    async def create_novel(self, novel_data: dict, user_id: str):
        """
        创建新小说
        
        Args:
            novel_data: 小说数据字典
            user_id: 创建者用户ID
            
        Returns:
            创建的小说文档
        """
        novel = Novel(
            title=novel_data["title"],
            user_id=user_id,
            abstract=novel_data.get("abstract"),
            genre=novel_data.get("genre")
        )
        
        # 添加时间戳
        now = datetime.utcnow()
        novel.created_at = now
        novel.updated_at = now
        
        # 插入到MongoDB
        result = await db.novels.insert_one(novel.model_dump(by_alias=True))
        
        # 返回插入的文档
        return await db.novels.find_one({"_id": result.inserted_id})
    
    async def get_user_novels(self, user_id: str):
        """获取用户的所有小说"""
        cursor = db.novels.find({"user_id": user_id})
        novels = await cursor.to_list(length=100)  # 限制最多返回100个
        return novels
    
    async def get_novel(self, novel_id: str):
        """获取特定小说详情"""
        try:
            return await db.novels.find_one({"_id": ObjectId(novel_id)})
        except:
            return None
    
    async def add_chapter(self, novel_id: str, chapter_data: dict):
        """
        添加章节到小说
        
        Args:
            novel_id: 小说ID
            chapter_data: 章节数据字典
            
        Returns:
            创建的章节文档
        """
        # 获取当前章节数量作为顺序
        chapter_count = await db.chapters.count_documents({"novel_id": novel_id})
        
        chapter = Chapter(
            novel_id=novel_id,
            title=chapter_data["title"],
            order=chapter_count + 1,
            content=chapter_data.get("content"),
            summary=chapter_data.get("summary")
        )
        
        # 添加时间戳
        now = datetime.utcnow()
        chapter.created_at = now
        chapter.updated_at = now
        
        # 插入到MongoDB
        result = await db.chapters.insert_one(chapter.model_dump(by_alias=True))
        
        # 更新小说的章节计数
        await db.novels.update_one(
            {"_id": ObjectId(novel_id)},
            {"$inc": {"chapter_count": 1}, "$set": {"last_edited_at": now}}
        )
        
        # 返回插入的文档
        return await db.chapters.find_one({"_id": result.inserted_id})
