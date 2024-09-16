const chuckNorrisSays = document.getElementById("button");

async function getQuote() {
  const res = await fetch(`https://api.chucknorris.io/jokes/random`);

  const chuckQuote = await res.json();
  console.log(chuckQuote);
  generateHtml(chuckQuote);
}

function generateHtml(quote) {
  const jokes = document.createElement(`p`);
  jokes.innerText = quote.value;
  document.body.appendChild(jokes);
}

chuckNorrisSays.addEventListener("click", getQuote);
