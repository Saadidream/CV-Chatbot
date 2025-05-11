import google.generativeai as genai
from django.conf import settings

# Configure Gemini API
genai.configure(api_key=settings.GEMINI_API_KEY)

def get_ai_response(cv_content, question):
    """
    Get AI response based on CV content and user question.
    """
    prompt = f"""
    You are an AI assistant that answers questions about the CV/resume provided.
    Please provide accurate, helpful, and concise responses.
    
    CV CONTENT:
    {cv_content}
    
    USER QUESTION:
    {question}
    
    Please answer the question based only on the information provided in the CV.
    If the information isn't in the CV, kindly state that it's not mentioned.
    """
    
    try:
        model = genai.GenerativeModel('gemini-2.0-flash')
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        print(f"Error generating AI response: {e}")
        return "I'm sorry, I couldn't process your request. Please try again later."