# 🤖 AskMe - AI Chatbot Powered by LLaMA 3 & Groq

Welcome to **AskMe**, an intelligent AI chatbot designed to answer your questions naturally and accurately!  
Built with cutting-edge AI models and a sleek React interface, AskMe makes chatting with AI seamless and enjoyable.

---

## 🚀 Project Overview

AskMe is a conversational AI chatbot leveraging the **LLaMA 3 70B 8192** language model accelerated by **Groq** hardware.  
It consists of:

- A **React** frontend using **Ant Design** for a modern, responsive chat UI.  
- A **FastAPI** backend serving as the bridge between frontend requests and AI model inference.  

AskMe listens to your queries and responds with insightful answers, rendered with clean markdown formatting.

---

## 🌟 Features

- 💬 **Natural Conversation:** Chat with an advanced LLaMA 3 model (70B parameters)  
- ⚡ **Fast Backend:** Lightweight FastAPI server for quick response handling  
- 🎨 **Beautiful UI:** React + Ant Design for polished user experience  
- 🌀 **Loading Spinner:** Shows a spinner while AI is thinking  
- 👤 **User & Bot Avatars:** Distinct icons for user and AI messages  
- 🕒 **Dynamic Greeting:** Greets you based on time of day  
- 📜 **Markdown Support:** Responses rendered with markdown for better readability  

---

## 🏗️ Architecture

```plaintext
User Browser (React UI)
         ↓ (HTTP POST)
FastAPI Backend Server
         ↓ (Groq Accelerator)
LLaMA 3 70B 8192 AI Model

---
##🛠️ Installation & Setup
**Backend Setup**
1. Clone the repo and navigate to backend:
git clone https://github.com/Noyonchandrasaha/AskMe_AI_Chatbot
cd askme/backend
2. Create and activate a virtual environment:
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
3.Install dependencies:
pip install -r requirements.txt
4. Start FastAPI server:
uvicorn main:app --reload
5. Make sure your Groq accelerator and LLaMA model environment are ready and connected.
**Frontend Setup**
1. Navigate to frontend directory:
cd ../frontend
2. Install npm dependencies:
npm install
3. Run the React development server:
npm start
4.Open your browser at:
http://localhost:3000
---
##💡 Usage
- Type your questions in the input field.
- Hit Enter **or** click the **Send** icon.
- Watch the bot reply with you question answers
- Enjoy a smooth, responsive chat experience!
---
##📚 Technologies Used
| Frontend                 | Backend | AI Model         | Accelerator   |
| ------------------------ | ------- | ---------------- | ------------- |
| React.js                 | FastAPI | LLaMA 3 70B 8192 | Groq hardware |
| Ant Design (antd)        | Uvicorn |                  |               |
| React Markdown Rendering | Python  |                  |               |
---
##🙋 Author
Noyon Chandra Saha
© {new Date().getFullYear()} All rights reserved.
Thank you for checking out AskMe! 💬✨
Happy chatting! 🎉

