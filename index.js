let cards = []
let dealerCards = []
let dealerSum = 0
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let lostMoney = ""

let dealerEl = document.getElementById("dealer-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let dealerSumEl = document.getElementById("dealersum-el")

let player = {
     name: "Per",
     chips:  200
}

let playerEl = document.getElementById("player-el")



function startGame(){
isAlive = true 
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let dealerFirstCard = getRandomCard()
dealerCards = [dealerFirstCard]
dealerSum = dealerFirstCard

cards = [firstCard, secondCard]
sum = firstCard + secondCard

playerEl.textContent = player.name + ": " + player.chips
if(sum > 21){
    player.chips = player.chips - 25
}else{
    player.chips = player.chips - 25
}

if(firstCard === 11 && sum > 21){
    return firstCard = 1
}else if(secondCard === 11 && sum > 21){
    return secondCard = 1
}

dealer()
stopGame()
renderGame()


}

function stopGame(){
    
    if(player.chips <= 0){

        lostMoney = "You lost all your money"
        playerEl.textContent = lostMoney
        
    }
    
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    dealerSumEl.textContent = "Dealer sum: " + dealerSum
    cardsEl.textContent = "Cards: " 
    for(i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    
    if (sum < 21){
        message = "Do you want to draw a card?"
    }else{
        message = "You lost"
        isAlive = false
    }
    if (sum === 21){
        message = "You have blackjack!"
        hasBlackjack = true
    }else{
        hasBlackjack = false
    }
    messageEl.textContent = message
}

function newCard(){
let card = getRandomCard()
    if(isAlive === true && hasBlackjack === false && card === 11 && sum > 11){
    sum += 1
    cards.push(1)
    }else if(isAlive === true && hasBlackjack === false){
        sum += card
    cards.push(card)
    }
    renderGame()
}

const getRandomCard = () =>{
    let randomNumer = Math.floor(Math.random() * 10) + 2
    console.log(randomNumer)
    if(randomNumer > 11)
        return 10
    
    return randomNumer 
       
}

function dealer(){
    dealerEl.textContent = "Dealer cards: "
    for(i = 0; i < dealerCards.length; i++){
        dealerEl.textContent += dealerCards[i] + " "
    }
}

function stopPlayer(){
    isAlive = false
    for(i = 0; i < dealerCards.length; i++){
        let dCard = getRandomCard()
        if(dealerSum < sum && sum < 22){
            dealerCards.push(dCard)
            dealerSum += dCard  
            }
        }
    
    if(sum > dealerSum && sum < 22){
        player.chips = player.chips + 50
    }
    if(dealerSum > 21){
        player.chips = player.chips + 50
    }else(sum === dealerSum)
        player.chips = player.chips + 25
    
    if(dealerSum > sum){
        player.chips = player.chips - 25
    }
    dealer()
    renderGame()

}




