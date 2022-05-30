
let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let blackJack = false
let alive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
  sumEl.textContent = "Sum:" + sum
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  }
  else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    blackJack = true
  }
  else if (sum > 21) {
    message = "You're out of the game sucker!"
    alive = false
  }
  messageEl.textContent = message
}

function newCard() {
  let card = 6
  sum += card
  renderGame()
}
