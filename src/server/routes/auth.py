from flask import Blueprint, request, jsonify
from models.user import create_user, find_user_by_email
import bcrypt
import jwt
from config import Config
from datetime import datetime, timedelta

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")
    role = data.get("role", "user")

    if not username or not email or not password:
        return jsonify({"error": "Username, email, and password are required"}), 400

    _, error = create_user(username, email, password, role)
    if error:
        return jsonify({"error": error}), 400
    return jsonify({"message": f"{role.capitalize()} registered successfully"}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    user = find_user_by_email(email)
    if user and bcrypt.checkpw(password.encode('utf-8'), user['password'].encode('utf-8')):
        token = jwt.encode({
            "email": user['email'],
            "role": user['role'],
            "exp": datetime.utcnow() + timedelta(hours=1)
        }, Config.SECRET_KEY, algorithm="HS256")

        return jsonify({
            "token": token,
            "user": {
                "username": user.get("username"),
                "email": user['email'],
                "role": user['role']
            }
        })

    return jsonify({"error": "Invalid credentials"}), 401