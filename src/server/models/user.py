from pymongo import MongoClient
from config import Config
import bcrypt

client = MongoClient(Config.MONGO_URI)
db = client.get_default_database()

def get_user_collection():
    return db['users']

def create_user(username, email, password, role='user'):
    users = get_user_collection()
    if users.find_one({"email": email}):
        return None, "Email already registered"

    hashed_pw = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
    user = {
        "username": username,
        "email": email,
        "password": hashed_pw,
        "role": role
    }
    result = users.insert_one(user)
    return str(result.inserted_id), None

def find_user_by_email(email):
    return get_user_collection().find_one({"email": email})