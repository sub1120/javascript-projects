let globalTimmer = 9;

const updateTimmer = (event) => {
    globalTimmer = Number.parseInt(event.target.value);
    document.querySelector('.timmer').innerText = globalTimmer.toString();
}

const startTimmer = (event) => {
    document.querySelector('.start').disabled = true;

    let localTimmer = globalTimmer;
    let intervalId = setInterval(() => {
        if (localTimmer > 0){
            document.querySelector('.timmer').innerText = --localTimmer;
        }
    }, 1000)

    setTimeout(() => {
        clearInterval(intervalId)
        intervalId = null;
        document.querySelector('.start').disabled = false;
    },  globalTimmer*1000 + 2000)
}
document.querySelector('.time').addEventListener('change', updateTimmer);
document.querySelector('.start').addEventListener('click', startTimmer);