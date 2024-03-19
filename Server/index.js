const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/mrm8488/distilroberta-finetuned-financial-news-sentiment-analysis",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
    
	return result;
}

app.post('/getSentiment', (req, res) => {
    const sentence = req.body.sentence;
    console.log(sentence);
    const result = query({"inputs": sentence}).then((response) => {
        res.send(JSON.stringify(response));
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
