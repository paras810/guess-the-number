let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById('textOutput')
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio("./audio/game-audio.wav")



const init = () => {
    computerGuess = Math.ceil(Math.random() * 100)
    // console.log(computerGuess);
    let newGameButton = document.getElementById("newGameButton")
    newGameButton.style.display = 'none'
    let gameArea = document.getElementById('gameArea')
    gameArea.style.display = 'none'
}
// init()


const startGame = () => {
    let WelcomeScreen = document.getElementById("WelcomeScreen")
    WelcomeScreen.style.display = "none"
    let gameArea = document.getElementById('gameArea')
    gameArea.style.display = 'inline-block'
    audio.play();

}

const handleClickEasy = () => {
    maxGuess = 10
    startGame()
    audio.play();
}

const handleClickHard = () => {
     maxGuess = 5
    startGame()
    audio.play();

}

//main logic of game

const compareGuess = () => {
    let userNumber = document.getElementById("inputBox").value;
    userGuess = [...userGuess, userNumber]
    document.getElementById('guesses').innerHTML = userGuess
    audio.play();
    //check the value low or high
    if (userGuess.length < maxGuess) {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = 'Your Guess is High 😳😳'
            userNumberUpdate.value = ""
        }else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = "Your Guess is Low 😔😔"
            userNumberUpdate.value = ""
        }else {
            userGuessUpdate.innerHTML = "Your Guess is Correct 🥳🥳"
            userNumberUpdate.value = ""
            startNewGame()
        }
    } else {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = `You Loose!! correct number Was ${computerGuess}`
            userNumberUpdate.value = ""
            startNewGame()
        }else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = `You Loose!! Correct Number Was ${computerGuess}`
            userNumberUpdate.value = ""
            startNewGame()

        }else {
            userGuessUpdate.innerHTML = "You Guess is Correct 🥳🥳"
            userNumberUpdate.value = ""
            startNewGame()

        }
    }
    document.getElementById('attempts').innerHTML = userGuess.length
}

const startNewGame =()=>{
    let newGameButton = document.getElementById("newGameButton")
    newGameButton.style.display = 'inline'
    userNumberUpdate.setAttribute('disabled', true)
    audio.play();


}

const RestartGame =()=>{
    window.location.reload()
}


  
