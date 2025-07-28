
document.addEventListener("DOMContentLoaded", function () {
    // Mock sentiment value
    const sentiments = ["Bullish 📈", "Bearish 📉", "Neutral ⚖️"];
    const sentiment = sentiments[Math.floor(Math.random() * sentiments.length)];
    document.getElementById("sentiment").innerText = "Current Sentiment: " + sentiment;
});
