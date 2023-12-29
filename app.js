const cardArray = [
  {
    name: "fries",
    img: "images/fries.png ",
  },
  {
    name: "fries",
    img: "images/fries.png ",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png ",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png ",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png ",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png ",
  },
  {
    name: "pizza",
    img: "images/pizza.png ",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png ",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png ",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png ",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png ",
  },
  {
    name: "pizza",
    img: "images/pizza.png ",
  },
];

cardArray.sort(() => 0.5 - Math.random());
const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result")
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

if(cardsWon.length == cardArray.length/2){
    resultDisplay.innerHTML = "Congratulations :)"
}

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();
function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  console.log("kontrol et");
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("Thats right")
  }
  if (cardsChosen[0] == cardsChosen[1]) {
    alert("Aferin");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("Tekrar Dene");
  }
  resultDisplay.innerHTML = cardsWon.length
  cardsChosen = [];
  cardsChosenIds = [];
  if(cardsWon.length == cardArray.length/2){

  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log(cardId);
  console.log(cardsChosen);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
