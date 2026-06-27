from flask import Flask, render_template, request, jsonify
import joblib
import re
import nltk

from nltk.corpus import stopwords
from nltk.stem import PorterStemmer

# Download stopwords (only first run)
nltk.download("stopwords")

# -----------------------------------------------------
# Initialize Flask App
# -----------------------------------------------------

app = Flask(__name__)

# -----------------------------------------------------
# Load Model and Vectorizer
# -----------------------------------------------------

model = joblib.load("appointment_bot_model.pkl")

vectorizer = joblib.load("count_vectorizer.pkl")

# -----------------------------------------------------
# NLP Preprocessing
# -----------------------------------------------------

stemmer = PorterStemmer()

stop_words = set(stopwords.words("english"))

def preprocess(text):

    text = text.lower()

    text = re.sub(r"[^a-zA-Z\s]", "", text)

    words = text.split()

    words = [
        stemmer.stem(word)
        for word in words
        if word not in stop_words
    ]

    return " ".join(words)

# -----------------------------------------------------
# Home Page
# -----------------------------------------------------

@app.route("/")

def home():

    return render_template("index.html")

# -----------------------------------------------------
# Prediction API
# -----------------------------------------------------

@app.route("/predict", methods=["POST"])

def predict():

    data = request.get_json()

    message = data["message"]

    clean = preprocess(message)

    vector = vectorizer.transform([clean])

    prediction = model.predict(vector)[0]

    # Confidence (LinearSVC has no predict_proba)
    response = {

        "prediction": prediction

    }

    return jsonify(response)

# -----------------------------------------------------
# Run App
# -----------------------------------------------------

if __name__ == "__main__":

    app.run(

        host="0.0.0.0",

        port=7860,

        debug=True

    )
