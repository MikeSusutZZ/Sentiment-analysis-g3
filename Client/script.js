document.addEventListener('DOMContentLoaded', function() {
    const analyzeButton = document.getElementById('analyzeButton');
    const userInput = document.getElementById('userInput');
    const resultSection = document.getElementById('resultSection');

    analyzeButton.addEventListener('click', function() {
        const text = userInput.value;

        if (text.trim().length === 0) {
            alert('Please enter a sentence.');
            return;
        }

        // REPLACE THE CONTENT BELOW WITH YOUR ACTUAL API CALL
        // Simulating an API response for demonstration
        const apiResponse = [
            [
                { "label": "negative", "score": 0.9987391829490662 },
                { "label": "neutral", "score": 0.0007296210387721658 },
                { "label": "positive", "score": 0.0005312702851369977 }
            ]
        ];

        // Process the API response to find the highest sentiment and its confidence
        processApiResponse(apiResponse);
    });

    function processApiResponse(response) {
        // Assuming the response structure is as provided and consistent
        const sentiments = response[0];
        const highestSentiment = sentiments.reduce((prev, current) => (prev.score > current.score) ? prev : current);

        displayResult(highestSentiment.label, highestSentiment.score);
    }

    function displayResult(sentiment, confidence) {
        // Format confidence as a percentage
        const confidencePercentage = (confidence * 100).toFixed(2);

        // Update this to display your sentiment result as needed
        resultSection.innerHTML = `<p>Sentiment: <strong>${sentiment}</strong><br>Confidence: <strong>${confidencePercentage}%</strong></p>`;
    }
});
