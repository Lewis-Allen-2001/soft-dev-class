const acceptButton = document.getElementById("accept");
const declineButton = document.getElementById("decline");
const cookieNotice = document.getElementById("cookie-notice");

if (document.cookie.includes("cookiesAccepted")) {
  cookieNotice.style.display = "none";
}

acceptButton.addEventListener("click", function () {
  document.cookie = "cookieAccepted = true";
  console.log("acceptButton working!");

  cookieNotice.style.display = "none";
});

declineButton.addEventListener("click", function () {
  document.cookie = "cookieAccepted = false";
  console.log("declineButton working!");

  cookieNotice.style.display = "none";
});

const yayOrNay = "Yay Nay";

yayOrNay.includes("Yay");
