const cartas = document.querySelectorAll(".card")
let fliped = false
let cartaFrente , cartaVerso;
let block = false

document.addEventListener("DOMContentLoaded", ()=>{

    shufller ()

})


function flipEvent(){ 

    if (block) return;
    if(this === cartaFrente) return;

    this.classList.add('flip')
    if(!fliped){
        fliped = true
        cartaFrente = this
        return;
    }

    cartaVerso = this
    fliped = false
    check();
};


function check (){

    if(cartaFrente.dataset.card === cartaVerso.dataset.card){
        disableCard();
        return;
    }
    unflipCard();
};


function disableCard(){

    cartaFrente.removeEventListener("click", flipEvent)
    cartaVerso.removeEventListener("click", flipEvent)

    reset()
}



function unflipCard(){

    block = true

    setTimeout(() => {
        cartaFrente.classList.remove("flip")
        cartaVerso.classList.remove("flip")

        reset()
    }, 1000);
}

function reset(){

    [flipEvent,block] = [false , false]
    [cartaFrente , cartaVerso]=[null,null]

}


function shufller (){

    for(card of cartas){
        let radomPosition = Math.floor(Math.random()*12)
        card.style.order = radomPosition;
    }
}


for (cards of cartas){
    cards.addEventListener('click', flipEvent )
};





