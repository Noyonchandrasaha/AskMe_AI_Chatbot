from fastapi import APIRouter, Request, HTTPException
from server.services.groq_client import get_groq_response

router = APIRouter()

@router.post("/")
async def chat_endpoint(request: Request):
    body = await request.json()
    user_message = body.get("message")
    if not user_message:
        raise HTTPException(status_code=400, detail="Message is required")
    reply = await get_groq_response(user_message)
    return {"reply": reply}