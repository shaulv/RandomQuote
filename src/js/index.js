import axios from 'axios';

async function fetchQuoteData() {
    try {
        const data = await axios("https://favqs.com/api/qotd");
        await insertDOM(data.data.quote.body, data.data.quote.author);
    } catch (e) {
        fetchQuoteData();
    }
}

function insertDOM(body, author) {
    document.getElementById("quote").innerHTML = body;
    document.getElementById("author").innerHTML = author;
}

window.addEventListener("load", () => {
    refreshQ();
});

const refresh = document.getElementById("refresh");
refresh.addEventListener("click", () => {
    refreshQ();
});

function refreshQ() {
    refresh.classList.add("active");
    fetchQuoteData();
    setTimeout(() => {
        refresh.classList.remove("active");
    }, 700);
}

