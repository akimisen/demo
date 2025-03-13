from datetime import datetime
from bson import ObjectId
from motor.motor_asyncio import AsyncIOMotorDatabase
from typing import List, Dict, Any, Optional
from app.models.novel import Novel
from app.models.chapter import Chapter

class NovelService:
    """小说相关服务类，处理小说和章节的业务逻辑"""
    
    def __init__(self, db: AsyncIOMotorDatabase):
        """
        初始化服务
        
        Args:
            db: MongoDB数据库实例
        """
        self.db = db
        self.novels = self.db.novels
        self.chapters = self.db.chapters
        print(f"NovelService initialized with dbname: {self.db.name}") # 应该输出 'kuku'
        print(f"初始化NovelService.novel: {Novel.Config.collection}")  # 应该输出 'novels'

    async def create_novel(self, novel_data: dict, user_id: str) -> Dict[str, Any]:
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
            author=novel_data.get("author", ""),
            user_id=user_id,
            abstract=novel_data.get("abstract"),
            genre=novel_data.get("genre"),
            protagonist=novel_data.get("protagonist"),
            setting=novel_data.get("setting"),
            target_audience=novel_data.get("target_audience"),
            tags=novel_data.get("tags", []),
            cover_image=novel_data.get("cover_image"),
            custom_fields=novel_data.get("custom_fields", {})
        )
        
        # 添加时间戳
        now = datetime.now()
        novel.created_at = now
        novel.updated_at = now
        
        # 插入到MongoDB
        result = await self.novels.insert_one(novel.model_dump(by_alias=True))
        
        # 返回插入的文档
        return await self.get_novel(str(result.inserted_id))
    
    async def get_user_novels(self, user_id: str, page: int = 1, page_size: int = 20):
        """获取用户的所有小说"""
        skip = (page - 1) * page_size
        
        # 获取总数
        total = await self.db.novels.count_documents({"user_id": user_id})
        
        # 获取小说列表
        cursor = self.db.novels.find({"user_id": user_id}) \
                    .skip(skip) \
                    .limit(page_size)
        
        novels = await cursor.to_list(length=page_size)
        
        # 转换 ObjectId 为字符串
        for novel in novels:
            novel["_id"] = str(novel["_id"])
        
        return {
            "list": novels,
            "user_id": user_id,
            "total": total,
            "page": page,
            "page_size": page_size
        }
    
    async def get_novel(self, novel_id: str) -> Optional[Dict[str, Any]]:
        """
        获取特定小说详情
        
        Args:
            novel_id: 小说ID
            
        Returns:
            小说文档或None（如果不存在）
        """
        try:
            return await self.novels.find_one({"_id": ObjectId(novel_id)})
        except:
            return None
    
    async def update_novel_stats(self, novel_id: str) -> None:
        """
        更新小说的统计信息（章节数和总字数）
        
        Args:
            novel_id: 小说ID
        """
        stats = await self.chapters.aggregate([
            {"$match": {"novel_id": novel_id}},
            {"$group": {
                "_id": "$novel_id",
                "chapter_count": {"$sum": 1},
                "word_count": {"$sum": "$word_count"}
            }}
        ]).to_list(1)
        
        if stats:
            await self.novels.update_one(
                {"_id": ObjectId(novel_id)},
                {"$set": {
                    "chapter_count": stats[0]["chapter_count"],
                    "word_count": stats[0]["word_count"],
                    "updated_at": datetime.now()
                }}
            )
    
    async def get_novel_chapters(self, novel_id: str, page: int = 1, page_size: int = 20) -> Dict[str, Any]:
        """
        获取小说章节列表
        
        Args:
            novel_id: 小说ID
            page: 页码
            page_size: 每页数量
            
        Returns:
            包含章节列表和分页信息的字典
        """
        skip = (page - 1) * page_size
        
        # 获取总数
        total = await self.chapters.count_documents({"novel_id": novel_id})
        
        # 获取分页数据
        cursor = self.chapters.find(
            {"novel_id": novel_id},
            sort=[("order", 1)]  # 按章节顺序排序
        ).skip(skip).limit(page_size)
        
        chapters = await cursor.to_list(length=page_size)
        
        return {
            "list": chapters,
            "total": total,
            "page": page,
            "page_size": page_size
        }

    async def get_novel_chapter(self, novel_id: str, chapter_id: str) -> Optional[Dict[str, Any]]:
        """
        获取章节详情
        
        Args:
            novel_id: 小说ID
            chapter_id: 章节ID
            
        Returns:
            章节文档或None（如果不存在）
        """
        try:
            return await self.chapters.find_one({
                "novel_id": novel_id, 
                "_id": ObjectId(chapter_id)
            })
        except:
            return None
    
    async def add_chapter(self, novel_id: str, chapter_data: dict) -> Dict[str, Any]:
        """
        添加章节到小说
        
        Args:
            novel_id: 小说ID
            chapter_data: 章节数据字典
            
        Returns:
            创建的章节文档
        """
        # 获取当前章节数量作为顺序
        chapter_count = await self.chapters.count_documents({"novel_id": novel_id})
        
        # 计算字数
        content = chapter_data.get("content", "")
        word_count = len(content) if content else 0
        
        chapter = Chapter(
            novel_id=novel_id,
            title=chapter_data["title"],
            order=chapter_data.get("order", chapter_count + 1),
            content=content,
            summary=chapter_data.get("summary"),
            word_count=word_count,
            characters=chapter_data.get("characters", []),
            locations=chapter_data.get("locations", []),
            plotlines=chapter_data.get("plotlines", []),
            hook=chapter_data.get("hook"),
            value=chapter_data.get("value"),
            tags=chapter_data.get("tags", []),
            notes=chapter_data.get("notes"),
            status=chapter_data.get("status", "draft")
        )
        
        # 添加时间戳
        now = datetime.utcnow()
        chapter.created_at = now
        chapter.updated_at = now
        
        # 插入到MongoDB
        result = await self.chapters.insert_one(chapter.model_dump(by_alias=True))
        
        # 更新小说统计信息
        await self.update_novel_stats(novel_id)
        
        # 返回插入的文档
        return await self.get_novel_chapter(novel_id, str(result.inserted_id))
    
    async def update_chapter(self, novel_id: str, chapter_id: str, chapter_data: dict) -> Optional[Dict[str, Any]]:
        """
        更新章节
        
        Args:
            novel_id: 小说ID
            chapter_id: 章节ID
            chapter_data: 更新的章节数据
            
        Returns:
            更新后的章节文档或None（如果不存在）
        """
        # 计算字数（如果内容被更新）
        if "content" in chapter_data:
            chapter_data["word_count"] = len(chapter_data["content"])
        
        # 添加更新时间
        chapter_data["updated_at"] = datetime.utcnow()
        
        try:
            # 更新章节
            result = await self.chapters.update_one(
                {"_id": ObjectId(chapter_id), "novel_id": novel_id},
                {"$set": chapter_data}
            )
            
            if result.modified_count == 0:
                return None
                
            # 更新小说统计信息
            await self.update_novel_stats(novel_id)
            
            # 返回更新后的文档
            return await self.get_novel_chapter(novel_id, chapter_id)
        except:
            return None
    
    async def delete_chapter(self, novel_id: str, chapter_id: str) -> bool:
        """
        删除章节
        
        Args:
            novel_id: 小说ID
            chapter_id: 章节ID
            
        Returns:
            是否删除成功
        """
        try:
            result = await self.chapters.delete_one({
                "_id": ObjectId(chapter_id), 
                "novel_id": novel_id
            })
            
            if result.deleted_count > 0:
                # 更新小说统计信息
                await self.update_novel_stats(novel_id)
                return True
            return False
        except:
            return False
    
    async def get_novel_with_chapters(self, novel_id: str, page: int = 1, page_size: int = 20) -> Optional[Dict[str, Any]]:
        """
        获取小说及其章节列表
        
        Args:
            novel_id: 小说ID
            page: 页码
            page_size: 每页数量
            
        Returns:
            包含小说和章节列表的字典或None（如果小说不存在）
        """
        # 获取小说信息
        novel = await self.get_novel(novel_id)
        if not novel:
            return None
            
        # 获取章节列表
        chapters = await self.get_novel_chapters(novel_id, page, page_size)
        
        # 返回合并的结果
        return {
            "novel": novel,
            "chapters": chapters
        }
