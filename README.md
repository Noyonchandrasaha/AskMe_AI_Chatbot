# 🤖 AskMe - AI Chatbot Powered by LLaMA 3 & Groq

Welcome to **AskMe**, an intelligent AI chatbot designed to answer your questions naturally and accurately!  
Built with cutting-edge AI models and a sleek React interface, AskMe makes chatting with AI seamless and enjoyable.

---

## 🚀 Project Overview

AskMe is a conversational AI chatbot leveraging the **LLaMA 3 70B 8192** language model accelerated by **Groq** hardware.  
It consists of:

- A **React** frontend using **Ant Design** for a modern, responsive chat UI  
- A **FastAPI** backend serving as the bridge between frontend requests and AI model inference  

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

🛠️ Installation & Setup
🔧 Backend Setup
Clone the repo and navigate to the backend:

bash
Copy
Edit
git clone https://github.com/Noyonchandrasaha/AskMe_AI_Chatbot.git
cd AskMe_AI_Chatbot/backend
Create and activate a virtual environment:

bash
Copy
Edit
python -m venv venv
source venv/bin/activate      # For Windows: venv\Scripts\activate
Install dependencies:

bash
Copy
Edit
pip install -r requirements.txt
Start the FastAPI server:

bash
Copy
Edit
uvicorn main:app --reload
Make sure your Groq accelerator and LLaMA model environment are ready and connected.

💻 Frontend Setup
Navigate to the frontend directory:

bash
Copy
Edit
cd ../frontend
Install npm dependencies:

bash
Copy
Edit
npm install
Run the React development server:

bash
Copy
Edit
npm start
Open your browser at:

arduino
Copy
Edit
http://localhost:3000
💡 Usage
Type your questions in the input field

Hit Enter or click the Send icon

Watch the bot reply with your answer

Enjoy a smooth, responsive chat experience!

📚 Technologies Used
Frontend	Backend	AI Model	Accelerator
React.js	FastAPI	LLaMA 3 70B 8192	Groq hardware
Ant Design (antd)	Uvicorn		
React Markdown Rendering	Python		

🙋 Author
Noyon Chandra Saha
© {new Date().getFullYear()} All rights reserved.

🙏 Thank You
Thank you for checking out AskMe! 💬✨
Happy chatting! 🎉
