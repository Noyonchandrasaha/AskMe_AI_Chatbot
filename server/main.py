from fastapi import FastAPI
from server.middlewares.middleware import setup_cors
from server.routes import chat

def create_app():
    app = FastAPI()
    setup_cors(app)
    app.include_router(chat.router, prefix="/chat")
    return app

app = create_app()
