// Show/hide messages or elements
function revealElement(elementId) {
  const element = document.getElementById(elementId);
  element.style.display = 'block';
}

function showFullMessage() {
  const message = document.querySelector('#message p');
  message.innerHTML += "<br><br>Thank you for being you, beautiful, kind, and loving.";
}
