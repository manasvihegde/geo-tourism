from app.database import places_collection, reviews_collection

def recommend_places(user_id: str):
    reviewed_places = reviews_collection.find({"user_id": user_id})
    categories = []

    for r in reviewed_places:
        place = places_collection.find_one({"_id": r["place_id"]})
        if place:
            categories.append(place["category"])

    recommendations = places_collection.find({
        "category": {"$in": categories}
    }).limit(5)

    return list(recommendations)
