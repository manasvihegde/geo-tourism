from fastapi import APIRouter
from app.database import places_collection
from app.models import Place

router = APIRouter()

@router.post("/add")
def add_place(place: Place):
    places_collection.insert_one(place.dict())
    return {"message": "Place added"}

@router.get("/nearby")
def nearby_places(lat: float, lng: float, distance: int = 5000):
    places = places_collection.find({
        "location": {
            "$near": {
                "$geometry": {
                    "type": "Point",
                    "coordinates": [lng, lat]
                },
                "$maxDistance": distance
            }
        }
    })
    return list(places)
