CV Chatbot
A web application that allows users to upload their CVs and interact with an AI chatbot trained on their CV content. The chatbot can answer questions related to the user's professional experience, skills, and other information contained in their CV.

🌟 Features
User Authentication: Secure registration and login system
CV Management: Upload, view, update, and delete CVs
AI-Powered Chatbot: Interact with a chatbot trained on your CV content
Responsive Design: Works on desktop and mobile devices
🚀 Live Demo
Frontend: https://cv-chatbot-ai.vercel.app
Backend: https://cv-chatbot-backend.onrender.com
🔧 Technologies Used
Frontend
React.js
Redux for state management
React Router for navigation
Axios for API communication
Modern UI components
Backend
Django
Django REST Framework
JWT Authentication
Gemini AI API integration
Python libraries for CV processing
PostgreSQL database
💻 Installation and Setup
Prerequisites
Node.js (v14+)
Python (v3.8+)
PostgreSQL
Backend Setup
Clone the repository

git clone https://github.com/yourusername/cv-chatbot.git
cd cv-chatbot/backend
Create a virtual environment and activate it

python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
Install dependencies

pip install -r requirements.txt
Set up environment variables
Create a .env file in the backend directory with the following variables:

SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
GEMINI_API_KEY=your_gemini_api_key
CORS_ALLOWED_ORIGINS=http://localhost:3000,https://cv-chatbot-ai.vercel.app
Apply migrations and run the server

python manage.py migrate
python manage.py runserver
Frontend Setup
Navigate to the frontend directory

cd ../frontend
Install dependencies

npm install
Set up environment variables
Create a .env file in the frontend directory with the following variables:

REACT_APP_API_URL=http://localhost:8000/api
Start the development server

npm start
🔍 How It Works
User Registration/Login: Create an account or log in to access the application
CV Upload: Upload your CV in supported formats (PDF, DOCX)
Chat Interaction: Ask questions about your CV to the AI chatbot
CV Management: Update or delete your CV as needed
🌐 API Endpoints
Authentication
POST /api/users/register/: Register a new user
POST /api/users/login/: Log in a user
POST /api/users/logout/: Log out a user
CV Management
GET /api/cvs/: Get all CVs for the logged-in user
POST /api/cvs/: Upload a new CV
GET /api/cvs/{id}/: Get a specific CV
PUT /api/cvs/{id}/: Update a CV
DELETE /api/cvs/{id}/: Delete a CV
Chatbot
POST /api/chatbot/: Send a message to the chatbot and get a response
🔒 Environment Variables
Backend
SECRET_KEY: Django secret key
DEBUG: Debug mode (True/False)
DATABASE_URL: PostgreSQL database URL
GEMINI_API_KEY: Google Gemini AI API key
CORS_ALLOWED_ORIGINS: Allowed origins for CORS
Frontend
REACT_APP_API_URL: Backend API URL
🤝 Contributing
Fork the repository
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

👥 Author
Your Name - GitHub Profile
🙏 Acknowledgements
Google Gemini AI
Django Rest Framework
React
Redux
