# 创建主目录结构
mkdir -p backend
cd backend

# 创建app目录及其子目录
mkdir -p app/{auth,db,api,models,schemas,services,utils}

# 创建静态文件和模板目录
mkdir -p static templates

# 创建测试目录
mkdir -p tests

# 创建app目录下的文件
touch app/__init__.py
touch app/main.py
touch app/config.py

# 创建auth模块文件
touch app/auth/__init__.py
touch app/auth/models.py
touch app/auth/router.py
touch app/auth/dependencies.py
touch app/auth/utils.py

# 创建db模块文件
touch app/db/__init__.py
touch app/db/mongodb.py
touch app/db/init_db.py

# 创建api模块文件
touch app/api/__init__.py
touch app/api/deps.py
touch app/api/novels.py
touch app/api/chapters.py
touch app/api/characters.py
touch app/api/outlines.py
touch app/api/ai.py

# 创建models模块文件
touch app/models/__init__.py
touch app/models/base.py
touch app/models/novel.py
touch app/models/chapter.py
touch app/models/character.py
touch app/models/outline.py

# 创建schemas模块文件
touch app/schemas/__init__.py
touch app/schemas/novel.py
touch app/schemas/chapter.py
touch app/schemas/character.py
touch app/schemas/outline.py

# 创建services模块文件
touch app/services/__init__.py
touch app/services/novel_service.py
touch app/services/chapter_service.py
touch app/services/character_service.py
touch app/services/outline_service.py
touch app/services/ai_service.py

# 创建utils模块文件
touch app/utils/__init__.py
touch app/utils/object_id.py
touch app/utils/validators.py

# 创建测试文件
touch tests/__init__.py
touch tests/conftest.py
touch tests/test_novels.py
touch tests/test_chapters.py
touch tests/test_characters.py
touch tests/test_outlines.py

# 创建根目录文件
touch .env
touch .gitignore
touch requirements.txt
touch README.md
touch run.py

echo "项目结构初始化完成！"