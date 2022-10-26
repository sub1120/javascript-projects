let userScore = 0;
let compScore = 0;

const updateScore = (winner) => {
    if(winner === "user"){
        userScore = userScore + 1;
        document.querySelector("#userScoreVal").innerText = userScore;
        document.querySelector("#result-final-stat").innerText = "You Win";
    }else if ( winner === "comp"){
        compScore = compScore + 1;
        document.querySelector("#compScoreVal").innerText = compScore;
        document.querySelector("#result-final-stat").innerText = "Comp Win";
    }else{
        document.querySelector("#result-final-stat").innerText = "Tie!";
    }
}

const clearWindow = () => {
    document.querySelector("#result-user-stat").innerText = "User:"
    document.querySelector("#result-comp-stat").innerText = "Computer:";
    document.querySelector("#result-final-stat").innerText = "Winner:";
    document.querySelector(".choices").style.display = 'block';
}

const choose = (event) => {
    const choices = ['r', 'p', 's'];
    const userChoice = event.target.parentNode.id;
    const compChoice = choices[Math.floor(Math.random()*2)];
    
    const userButton = event.target.parentNode.cloneNode(true);
    const compButton = document.querySelector(`#${compChoice}`).cloneNode(true);
    document.querySelector("#result-user-stat").appendChild(userButton);
    document.querySelector("#result-comp-stat").appendChild(compButton);

    if (userChoice == compChoice){
        updateScore("Tie");
    }else if(userChoice === 'r'){
        if(compChoice === 'p'){
            updateScore("comp");
        }else{
            updateScore("user");
        }
    }else if(userChoice === 'p'){
        if(compChoice === 's'){
            updateScore("comp");
        }else{
            updateScore("user");
        }
    }else if(userChoice === 's'){
        if(compChoice === 'r'){
            updateScore("comp");
        }else{
            updateScore("user");
        }
    }
    document.querySelector(".choices").style.display = 'none';
    setTimeout(clearWindow, 500)
}

document.querySelectorAll('.choice img').forEach(ele => ele.addEventListener('click', choose))