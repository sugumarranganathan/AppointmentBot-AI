🤖 AppointmentBot AI

https://sugumarranganathan-appointmentbot-ai.hf.space


Smart Appointment Booking Message Classifier using Natural Language Processing (NLP) and Machine Learning.

📌 Project Overview

AppointmentBot AI is an intelligent chatbot that classifies whether a user message is related to an appointment booking or not.

The application uses a trained Machine Learning model to analyze incoming text, preprocess it using NLP techniques, and instantly predict the message category through an interactive web interface.


🛠️ Technologies Used
Frontend
HTML5
CSS3
JavaScript
Backend
Flask
Machine Learning
Scikit-learn
CountVectorizer
Linear SVM
NLP
NLTK
Porter Stemmer
Stopword Removal
Text Cleaning


📂 Project Structure
AppointmentBot-AI/
│
├── app.py
├── appointment_bot_model.pkl
├── count_vectorizer.pkl
├── requirements.txt
│
├── templates/
│   └── index.html
│
├── static/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   ├── images/
│   │   ├── bot.png
│   │   └── user.png
│   │
│   └── audio/
│       └── notification.mp3
│
└── README.md



🧠 Machine Learning Workflow
Load dataset
Text preprocessing
Remove stopwords
Apply stemming
Convert text using CountVectorizer
Train Linear SVM classifier
Save model using Joblib
Deploy using Flask
📊 Input Examples
Booking Messages
Book an appointment tomorrow
Reserve a slot for Monday
I want to meet the doctor
Can I schedule an appointment?
Non-Booking Messages
Thank you
Good Morning
How are you?
Nice to meet you
📈 Model Information
Algorithm: Linear SVM
Vectorizer: CountVectorizer
NLP Library: NLTK
Model Serialization: Joblib
🎯 Future Improvements
Multi-class appointment categories
Voice input
Voice response
Calendar integration
Email notifications
WhatsApp integration
Database storage
User authentication
Dark mode
Multi-language support
👨‍💻 Developer

Sugumar R

MBA | AI & Data Analytics Enthusiast

GitHub:

https://github.com/sugumarranganathan

LinkedIn:

https://www.linkedin.com/in/sugumar-ranganathan

📜 License

This project is released under the MIT License.

⭐ If you found this project useful, please consider giving it a Star on GitHub.
