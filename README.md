# 🤖 AppointmentBot AI


https://colab.research.google.com/drive/1XbCJZqd38oqFWWh9RMsVhTBm5mmVFYoD

https://sugumarranganathan-appointmentbot-ai.hf.space

**Smart Appointment Booking Message Classifier using Natural Language Processing (NLP) and Machine Learning**

---

# 📌 Problem Statement

Many businesses such as hospitals, clinics, salons, banks, educational institutions, and service centers receive hundreds of customer messages every day through websites, chatbots, emails, and messaging platforms.

These messages include appointment requests as well as general conversations like greetings, thank-you messages, and inquiries. Manually identifying booking requests is time-consuming and may lead to delays or missed appointments.

**AppointmentBot AI** solves this problem by automatically classifying whether a customer message is an **Appointment Booking** request or a **Non-Booking** message using Machine Learning and NLP techniques.

---

# 💡 Solution

AppointmentBot AI analyzes user messages, preprocesses the text using NLP techniques, converts it into numerical features using **CountVectorizer**, and predicts whether the message is related to appointment booking using a trained **Linear SVM** model.

The chatbot instantly displays the prediction through a modern web interface built with Flask.

---

# 🎯 What is the Use of this Bot?

AppointmentBot AI can be used to automatically identify appointment booking requests before forwarding them to employees or booking systems.

### Real-world Applications

* 🏥 Hospitals and Clinics
* 💇 Salons and Beauty Parlors
* 🦷 Dental Clinics
* 🏦 Banks
* 🎓 Educational Institutions
* 🏢 Government Offices
* 🚗 Vehicle Service Centers
* 🏨 Hotels and Resorts
* 🧑‍⚕️ Medical Consultation Portals
* 📅 Online Appointment Systems

# 🛠️ Technologies Used

## Frontend

* HTML5
* CSS3
* JavaScript

## Backend

* Flask

## Machine Learning

* Scikit-learn
* CountVectorizer
* Linear SVM

## NLP

* NLTK
* Porter Stemmer
* Stopword Removal
* Regular Expressions

---

# 📂 Project Structure

```text
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
│   ├── js/
│   │   └── script.js
│   ├── images/
│   │   ├── bot.png
│   │   └── user.png
│   └── audio/
│       └── notification.mp3
│
└── README.md
```

---


# 🧠 Machine Learning Workflow

1. Load dataset
2. Clean the text
3. Convert text to lowercase
4. Remove punctuation
5. Remove stopwords
6. Apply stemming
7. Transform text using CountVectorizer
8. Predict using Linear SVM
9. Display the result in the chatbot interface

---

# 💬 Example Inputs

### Booking Messages

* Book an appointment tomorrow
* Reserve a slot for Monday
* I need an appointment
* Schedule my visit
* Can I meet the doctor tomorrow?

### Non-Booking Messages

* Thank you
* Good Morning
* Hello
* Nice to meet you
* Have a great day

---

# 📈 Model Information

| Component   | Value                 |
| ----------- | --------------------- |
| Algorithm   | Linear SVM            |
| Vectorizer  | CountVectorizer       |
| NLP Library | NLTK                  |
| Language    | Python                |
| Backend     | Flask                 |
| Frontend    | HTML, CSS, JavaScript |

---

# 🌟 Benefits

* Saves staff time
* Automatically filters booking requests
* Reduces manual work
* Improves response speed
* Enhances customer experience
* Easy to integrate into appointment systems
* Lightweight and fast prediction
* Suitable for real-world businesses

---


# 👨‍💻 Prepared by

**Sugumar R, M.B.A.,**


⭐ If you like this project, please give it a **Star ⭐** on GitHub.
