const blacklist = ["racism", "hate", "violence", "bigotry"];

function scanPage() {
// get all text on page
const pageText = document.body.innerText;

// loop through blacklist
for (let term of blacklist) {
    // check if term is on page
    if (pageText.includes(term)) {
        // if term is found, generate new random article
        window.location.href = "https://en.wikipedia.org/wiki/Special:Random";
        return;
        }
        }
        }

// listen for page load
document.addEventListener("DOMContentLoaded", scanPage);