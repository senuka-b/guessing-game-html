let randomNumber = generateRandomNumber();
let chances = 3;
let won = false;

function generateRandomNumber() {
    return Math.floor((Math.random()*10)+1);
}

function restart() {
    alert("Starting a new game!");

    randomNumber = generateRandomNumber();
    chances = 3;
    won = false;
    
    document.getElementById("txtNumber").value = "";
    document.getElementById("lblChancesLeft").innerHTML = `Chances left : ${chances}`;
    document.getElementById("lblResult").innerHTML = "Waiting for you to guess... ❓ [New Game] ";
    document.getElementById("lblResult").className = "d-flex align-items-center justify-content-center pt-3 pb-4 text-bg-secondary";
    document.getElementById("body").className = "waiting-body";
}

function guess() {

    console.log("Random number: " + randomNumber);

    let guessNumber = Number.parseInt(document.getElementById("txtNumber").value);
    let chancesLeftElement = document.getElementById("lblChancesLeft");
    let resultElement = document.getElementById("lblResult");

    let bodyElement = document.getElementById("body");

    chances--;
    chancesLeftElement.innerHTML = `Chances left: ${chances}`;

    if (chances < 0) return restart(); 

    if (chances > 0 || guessNumber == randomNumber) {

        if (won) return restart();

        if (guessNumber == randomNumber) {
            resultElement.innerHTML = `You won! The number was ${randomNumber} ✅🎉`;
            resultElement.className = "d-flex align-items-center justify-content-center pt-3 text-success pb-4 ";

            bodyElement.className = "success-body";

            won = true;
            
        } else if (guessNumber > randomNumber) {
            resultElement.innerHTML = `Nope. Try again with a lower number! ❌⬇️`;
            resultElement.className = "d-flex align-items-center justify-content-center pt-3 text-danger pb-4"

            bodyElement.className = "fail-body";

        } else {
            resultElement.innerHTML = `Nope. Try again with a higher number! ❌⬆️`
            resultElement.className = "d-flex align-items-center justify-content-center pt-3 text-danger pb-4"

            bodyElement.className = "fail-body";

        }

        
    
    } else {
        resultElement.innerHTML = `Game Over! The number was ${randomNumber} & you ran out of chances! 😭`
        resultElement.className = "d-flex align-items-center justify-content-center pt-3 text-danger pb-4"

        bodyElement.className = "fail-body";

    }

   

}