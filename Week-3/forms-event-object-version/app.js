const form = document.getElementById("form");

function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(form);

  const finalValues = Object.fromEntries(data);

  console.log(finalValues);
}

form.addEventListener("submit", handleSubmit);
