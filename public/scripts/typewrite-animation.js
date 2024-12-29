const phrases = ["Web Developer ", "Designer ", "Freelancer "];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;
const typewriterElement = document.getElementById("typewriter");

function type() {
    isEnd = false;
    typewriterElement.textContent = currentPhrase.join("");

    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop();
            j--;
        }

        if (j === phrases[i].length) {
            isEnd = true;
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) {
                i = 0;
            }
        }
    }
    const speedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (200 - 100) + 100;
    const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
    setTimeout(type, time);
}

type();
// document.addEventListener("DOMContentLoaded", () => {
// });
