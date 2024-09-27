# import os
# from pydantic import BaseSettings

# class Settings(BaseSettings):
#     # Add any config values here (e.g., database URL, API keys)
#     database_url: str = os.getenv("DATABASE_URL", "sqlite:///./test.db")
#     openai_api_key: str = os.getenv("OPENAI_API_KEY", "")
    
#     class Config:
#         env_file = ".env"

# settings = Settings()
