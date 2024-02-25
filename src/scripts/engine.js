
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
        setTimeout(checkMatch, 500);
    }    
}

function checkMatch() {
    const [card1, card2] = openCards;
    if (card1.innerHTML === card2.innerHTML) {
        card1.classList.add("boxMatch");
        card2.classList.add("boxMatch");
    } else {
        card1.classList.remove("boxOpen");
        card2.classList.remove("boxOpen");
    }
    openCards = [];
}