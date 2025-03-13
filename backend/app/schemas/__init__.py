"""
Schemas Package

这个包包含所有的 Pydantic 模型定义，用于：
- 请求数据验证
- 响应数据序列化
- API 文档生成

主要模块：
- novel.py: 小说相关的数据模型
- chapter.py: 章节相关的数据模型
- user.py: 用户相关的数据模型
- character.py: 角色相关的数据模型
- outline.py: 大纲相关的数据模型

使用方式：
from app.schemas.novel import NovelCreate, NovelResponse
from app.schemas.chapter import ChapterCreate, ChapterResponse
"""