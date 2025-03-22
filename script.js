const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const button = document.getElementById("get-quote");

async function getQuote() {
    const apiUrl = "https://api.api-ninjas.com/v1/quotes";
    const apiKey = "bS/8m4jFA/8eM5C+R9yWMA==dv0KA9nfGSbBWgaN"; // Replace with your actual API key

    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "X-Api-Key": apiKey
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();
        quoteText.innerText = `"${data[0].quote}"`;
        quoteAuthor.innerText = `- ${data[0].author}`;
    } catch (error) {
        console.error("Error fetching quote:", error);
        quoteText.innerText = "Oops! Could not fetch a quote.";
        quoteAuthor.innerText = "";
    }
}

button.addEventListener("click", getQuote);
