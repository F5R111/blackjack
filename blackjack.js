let cards=[]
let sum=0
let isAlive=false
let hasblackjack=false
let massage=""

/************************** *****/
let massageEl=document.getElementById("massage-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
/****************************** */
let player={
    name:"per",
    chipes:145
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+ ": $"+player.chipes



// 1. Create a function, getRandomCard(), that always returns the number 5

function getRandomCard(){
    let randomcard=Math.floor(Math.random()*13)+1
    if(randomcard==1){
        return 11
    }
    else if(randomcard>10){
        return 10
    }
    else{return randomcard}
}
/*evry time you start the game you  take tow card again */
function startgame(){
    isAlive=true
    let firstcard=getRandomCard()
    let secondcard=getRandomCard()
    cards=[firstcard,secondcard]
     sum=firstcard+secondcard

    rendergame()
}

function rendergame(){
    if(sum<21){
        massage="Do you want to draw a new card? "
    }
    else if(sum==21){
        massage="Wohoo! You've got Blackjack! "
        hasblackjack=true
    }
    else{
        massage="You're out of the game! "
        isAlive=false
    }
    console.log(massage)
    massageEl.textContent=massage
    sumEl.innerHTML= "sum:"+sum
    cardEl.innerText="cards:"
    for(let i=0; i<cards.length; i++){
        cardEl.textContent+=cards[i]+"-"
    }
}

function newcard (){
  if(isAlive===true&&hasblackjack===false){
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    console.log(cards)
    rendergame()
  }
}




