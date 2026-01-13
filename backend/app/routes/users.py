from fastapi import APIRouter
from app.database import users_collection
from app.models import User

router = APIRouter()

@router.post("/register")
def register_user(user: User):
    users_collection.insert_one(user.dict())
    return {"message": "User registered successfully"}
