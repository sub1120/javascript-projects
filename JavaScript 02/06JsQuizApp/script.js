const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const submitBtn = document.querySelector("#submit");

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    document.querySelector("#question").innerText = quizData[currentQuiz].question;
    document.querySelector("#a_text").innerText = quizData[currentQuiz].a;
    document.querySelector("#b_text").innerText = quizData[currentQuiz].b;
    document.querySelector("#c_text").innerText = quizData[currentQuiz].c;
    document.querySelector("#d_text").innerText = quizData[currentQuiz].d;
}

function deselectAnswers() {
}

function getSelected() {
    const optionList = document.querySelectorAll(".answer");
    let answer = undefined;
    optionList.forEach((ele) => {
        if (ele.checked == true){
            answer = ele.id;
        }
    })

    return answer;
}

submitBtn.addEventListener('click', () => {
    if(currentQuiz < quizData.length){
        const answer = getSelected()
        const correctAnswer = quizData[currentQuiz].correct;
        if(answer === correctAnswer){
            score += 1
        }
        currentQuiz += 1;
    }

    if(currentQuiz < quizData.length){
        loadQuiz();
    }

    if(currentQuiz === quizData.length){
        const body = document.querySelector("body")
        const question = document.querySelector(".quiz-container")
        body.removeChild(question)

        const scoreboard = document.createElement('div');
        scoreboard.setAttribute('class', 'quiz-container')
        body.appendChild(scoreboard)
        
        const scoreCount = document.createElement('h3');
        scoreCount.innerText = `Your Score is: ${score}`;
        scoreCount.style.textAlign = 'center';
        scoreboard.appendChild(scoreCount);
    }
})