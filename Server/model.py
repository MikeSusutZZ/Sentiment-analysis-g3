from flask import Flask, request, jsonify
from transformers import AutoTokenizer, AutoModelForSequenceClassification, pipeline

app = Flask(__name__)

# Load tokenizer and model
tokenizer = AutoTokenizer.from_pretrained("mrm8488/distilroberta-finetuned-financial-news-sentiment-analysis")
model = AutoModelForSequenceClassification.from_pretrained("mrm8488/distilroberta-finetuned-financial-news-sentiment-analysis")

# Create a sentiment analysis pipeline
sentiment_pipeline = pipeline("sentiment-analysis", model=model, tokenizer=tokenizer)

@app.route('/analyze', methods=['POST'])
def analyze_sentiment():
    # Get text from the request JSON body
    data = request.get_json()
    text = data.get('text', '')

    # Analyze sentiment
    results = sentiment_pipeline(text)

    # Return the results
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
