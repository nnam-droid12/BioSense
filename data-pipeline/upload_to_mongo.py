# upload_to_mongo.py
from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

def upload_to_mongo(data: list[dict], collection_name: str):
    client = MongoClient(os.getenv("MONGO_URI"))
    db = client[os.getenv("MONGO_DB_NAME")]
    collection = db[collection_name]

    if data:
        collection.insert_many(data)
        print(f"Inserted {len(data)} documents into {collection_name}")
