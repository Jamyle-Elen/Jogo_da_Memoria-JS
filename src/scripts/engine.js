
const icons = [
    "🌑",
    "🌑",
    "🌒",
    "🌒",
    "🌓",
    "🌓",
    "🌔",
    "🌔",
    "🌕",
    "🌕",
    "🌖",
    "🌖",
    "🌗",
    "🌗",
    "🌘",
    "🌘",
];

let openCards = [];
let attempts = 0;

let shuffleIcons = icons.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < icons.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleIcons[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (!this.classList.contains("boxOpen") && openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if (openCards.length === 2) {
        attempts++;
        document.getElementById('attempts').innerText = `Tentativas: ${attempts}`
        setTimeout(checkMatch, 500);
    }    
}

function checkMatch() {
    const [card1, card2] = openCards;
    if (card1 && card2 && card1.innerHTML === card2.innerHTML) {
        card1.classList.add('boxMatch');
        card2.classList.add('boxMatch');
        openCards = [];
        if (document.querySelectorAll('.boxMatch').length === icons.length) {
            openModal();
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('boxOpen');
            card2.classList.remove('boxOpen');
            openCards = [];
        }, 500);
    }
}

function openModal() {
    document.getElementById('victoryModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('victoryModal').style.display = 'none';
}