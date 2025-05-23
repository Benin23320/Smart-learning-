from flask import Flask, jsonify
from flask_cors import CORS
from routes.auth import auth_bp
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
CORS(app, origins=["http://localhost:5173"])
app.register_blueprint(auth_bp, url_prefix='/auth')

@app.route('/')
def home():
    return jsonify({"message": "Hello from Flask!"})

if __name__ == '__main__':
    app.run(debug=True)