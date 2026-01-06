from fastapi import APIRouter
from app.database import reviews_collection
from app.models import Review

router = APIRouter()

@router.post("/add")
def add_review(review: Review):
    reviews_collection.insert_one(review.dict())
    return {"message": "Review added"}
