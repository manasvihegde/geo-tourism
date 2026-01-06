from fastapi import APIRouter
from app.database import itineraries_collection
from app.models import Itinerary

router = APIRouter()

@router.post("/create")
def create_itinerary(itinerary: Itinerary):
    itineraries_collection.insert_one(itinerary.dict())
    return {"message": "Itinerary created"}
