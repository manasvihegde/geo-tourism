from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGODB_URI = os.getenv("mongodb+srv://manasvih75_db_user:7sUx1cf4dZPKgRB3@m0.uv8pyts.mongodb.net/?appName=M0")
DATABASE_NAME = os.getenv("tourism_db")

client = MongoClient("mongodb+srv://manasvih75_db_user:7sUx1cf4dZPKgRB3@m0.uv8pyts.mongodb.net/?appName=M0")
db = client["tourism_db"]

# Collections
users_collection = db["users"]
places_collection = db["places"]
reviews_collection = db["reviews"]
itineraries_collection = db["itineraries"]
