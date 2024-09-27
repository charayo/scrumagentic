# from sqlalchemy.orm import Session
# from app.models.user import User  # Assuming you have a User model defined

# class UserRepository:
#     def __init__(self, db: Session):
#         """Initializes the repository with a database session"""
#         self.db = db

#     def get_by_id(self, user_id: int) -> User:
#         """Fetch a user by their ID"""
#         return self.db.query(User).filter(User.id == user_id).first()

#     def get_all(self) -> list[User]:
#         """Fetch all users"""
#         return self.db.query(User).all()

#     def create(self, user_data: dict) -> User:
#         """Create a new user"""
#         user = User(**user_data)
#         self.db.add(user)
#         self.db.commit()
#         self.db.refresh(user)
#         return user

#     def update(self, user: User, updates: dict) -> User:
#         """Update an existing user"""
#         for key, value in updates.items():
#             setattr(user, key, value)
#         self.db.commit()
#         self.db.refresh(user)
#         return user

#     def delete(self, user: User) -> None:
#         """Delete a user"""
#         self.db.delete(user)
#         self.db.commit()
