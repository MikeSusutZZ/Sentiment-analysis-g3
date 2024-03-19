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

query({"inputs": "I like you. I love you"}).then((response) => {
	console.log(JSON.stringify(response));
});