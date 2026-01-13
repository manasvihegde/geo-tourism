from fastapi import APIRouter
from app.database import places_collection

router = APIRouter()


@router.get("/")
def get_places(search: str | None = None):
    query = {}

    if search:
        query = {
            "$or": [
                {"city": {"$regex": search, "$options": "i"}},
                {"name": {"$regex": search, "$options": "i"}},
                {"state": {"$regex": search, "$options": "i"}}
            ]
        }

    places = list(places_collection.find(query, {"_id": 0}))
    return places


@router.post("/")
def add_place(place: dict):
    places_collection.insert_one(place)
    return {"message": "Place added successfully"}

@router.get("/state/{state_name}")
def get_places_by_state(state_name: str):
    places = list(
        places_collection.find(
            {"state": {"$regex": state_name, "$options": "i"}},
            {"_id": 0}
        )
    )
    return places
