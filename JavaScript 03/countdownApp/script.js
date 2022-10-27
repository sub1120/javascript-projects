let currentCount = 9;

const updateTimmer = () => {
    document.querySelector('.timmer').innerText = currentCount.toString();
}

const setTimmer = (event) => {
    currentCount = Number.parseInt(event.target.value);
    updateTimmer();
}

const startTimmer = (event) => {
    document.querySelector('#start').disabled = true;
    document.querySelector('#count').disabled = true;
    
    let initCount = currentCount;
    let intervalId = setInterval(() => {
        if (currentCount > 0){
            currentCount -= 1;
            updateTimmer();
        }else{
            clearInterval(intervalId)
            intervalId = null;
            document.querySelector('#start').disabled = false;
            document.querySelector('#count').disabled = false;
            document.querySelector('#count').value = '0';
            currentCount = 0;
            updateTimmer()
        }
    }, 1000)
}

document.querySelector('#count').addEventListener('change', setTimmer);
document.querySelector('#start').addEventListener('click', startTimmer);