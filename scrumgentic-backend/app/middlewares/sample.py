# from fastapi import Request, HTTPException
# from fastapi.security import HTTPBearer

# class AuthMiddleware(HTTPBearer):
#     def __init__(self):
#         super().__init__()

#     async def __call__(self, request: Request):
#         # Basic token authentication logic
#         token = await super().__call__(request)
#         if token.credentials != "your-secure-token":
#             raise HTTPException(status_code=403, detail="Invalid token")
