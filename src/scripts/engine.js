
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
    box.innerHTML = shuffleIcons[i];
    document.querySelector(".game").appendChild(box);
    
}