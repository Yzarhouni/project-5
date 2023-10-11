const spelerScores = document.querySelector(".player-credits");

const pcScore = document.querySelector(".computer-credits");

const goKnop = document.querySelector(".go-button");

const lagerKnop = document.querySelector(".lower-button");

const hogerKnop = document.querySelector(".higher-button");

const gooiKnop = document.querySelector(".dice-button");

const instructie = document.querySelector(".instructie");

const computerDobbelsteen1 = document.querySelector(".computer-dice-one");

const computerDobbelsteen2 = document.querySelector(".computer-dice-two");

const spelerDobbelsteen1 = document.querySelector(".player-dice-one");

const spelerDobbelsteen2 = document.querySelector(".player-dice-two");



let computersTurn = true;

let higher;



resetGame();



let firstDice = getRandomInt(6);

let secondDice = getRandomInt(6);

let pcDice1 = getRandomInt(6);

let pcDice2 = getRandomInt(6);





spelerScores.textContent = getRandomInt(0);

pcScore.textContent = getRandomInt(0);











function getRandomInt(max) {

    return Math.ceil(Math.random() * max + 1);

}











goKnop.addEventListener('click', goKnopClicked);



function goKnopClicked() {

    gooiKnop.disabled = false

    goKnop.disabled = true

    instructie.textContent = "pcs turn."

}











lagerKnop.addEventListener('click', lagerKnopClicked);



function lagerKnopClicked() {

    higher = false;

    hogerKnop.disabled = true;

    lagerKnop.disabled = true;

    gooiKnop.disabled = false;

}







hogerKnop.addEventListener('click', hogerKnopClicked);



function hogerKnopClicked() {

    higher = true;

    hogerKnop.disabled = true;

    lagerKnop.disabled = true;

    gooiKnop.disabled = false;

}













gooiKnop.addEventListener('click', gooiKnopClicked);



function gooiKnopClicked() {

    if (computersTurn === true) {





        pcDice1 = getRandomInt(6);

        pcDice2 = getRandomInt(6);

        if (pcDice1 === 1) {

            computerDobbelsteen1.innerHTML = "&#9856;"

        } else if (pcDice1 === 2) {

            computerDobbelsteen1.innerHTML = "&#9857;"

        } else if (pcDice1 === 3) {

            computerDobbelsteen1.innerHTML = "&#9858;"

        } else if (pcDice1 === 4) {

            computerDobbelsteen1.innerHTML = "&#9859;"

        } else if (pcDice1 === 5) {

            computerDobbelsteen1.innerHTML = "&#9860;"

        } else if (pcDice1 === 6) {

            computerDobbelsteen1.innerHTML = "&#9861;"

        }



        if (pcDice2 === 1) {

            computerDobbelsteen2.innerHTML = "&#9856;"

        } else if (pcDice2 === 2) {

            computerDobbelsteen2.innerHTML = "&#9857;"

        } else if (pcDice2 === 3) {

            computerDobbelsteen2.innerHTML = "&#9858;"

        } else if (pcDice2 === 4) {

            computerDobbelsteen2.innerHTML = "&#9859;"

        } else if (pcDice2 === 5) {

            computerDobbelsteen2.innerHTML = "&#9860;"

        } else if (pcDice2 === 6) {

            computerDobbelsteen2.innerHTML = "&#9861;"

        }



        gooiKnop.disabled = true;

        hogerKnop.disabled = false;

        lagerKnop.disabled = false;



        computersTurn = false

        instructie.textContent = "higher or lower?"



    } else {



        firstDice = getRandomInt(6);

        secondDice = getRandomInt(6);

        if (firstDice === 1) {

            spelerDobbelsteen1.innerHTML = "&#9856;"

        } else if (firstDice === 2) {

            spelerDobbelsteen1.innerHTML = "&#9857;"

        } else if (firstDice === 3) {

            spelerDobbelsteen1.innerHTML = "&#9858;"

        } else if (firstDice === 4) {

            spelerDobbelsteen1.innerHTML = "&#9859;"

        } else if (firstDice === 5) {

            spelerDobbelsteen1.innerHTML = "&#9860;"

        } else if (firstDice === 6) {

            spelerDobbelsteen1.innerHTML = "&#9861;"

        }



        if (secondDice === 1) {

            spelerDobbelsteen2.innerHTML = "&#9856;"

        } else if (secondDice === 2) {

            spelerDobbelsteen2.innerHTML = "&#9857;"

        } else if (secondDice === 3) {

            spelerDobbelsteen2.innerHTML = "&#9858;"

        } else if (secondDice === 4) {

            spelerDobbelsteen2.innerHTML = "&#9859;"

        } else if (secondDice === 5) {

            spelerDobbelsteen2.innerHTML = "&#9860;"

        } else if (secondDice === 6) {

            spelerDobbelsteen2.innerHTML = "&#9861;"

        }



        hogerKnop.disabled = true;

        lagerKnop.disabled = true;

        gooiKnop.disabled = true;





        const totalPlayerDice = firstDice + secondDice;

        const totalPcDice = pcDice1 + pcDice2;



        if (higher === true && totalPlayerDice > totalPcDice) {

            instructie.textContent = "guessed higher: you win :) "

        } else if (higher === true && totalPlayerDice < totalPcDice) {

            instructie.textContent = "guessed higher: you lost :( "

        } else if (higher === false && totalPlayerDice < totalPcDice) {

            instructie.textContent = " guessed lower: you win :) "

        } else if (higher === false && totalPlayerDice > totalPcDice) {

            instructie.textContent = "guessed lower: you lost :("

        } else {

            instructie.textContent = "draw try again :/"

        }



        resetGame();



    }







}



function resetGame(){


goKnop.disabled = false;

gooiKnop.disabled = true;

lagerKnop.disabled = true;

hogerKnop.disabled = true;

computersTurn = true
}