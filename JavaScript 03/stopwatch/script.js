let currentTime = {
  hour: 0,
  min: 0,
  sec: 0,
  msec: 0,
};

let intervalRef = null;

const updateTimmer = () => {
  const timmer = document.querySelector(".time");
  timmer.innerText = `${currentTime.hour}:${currentTime.min}:${currentTime.sec}:${currentTime.msec}`;
}

const start = (event) => {
  
  if(!intervalRef){
    intervalRef = setInterval(() => {
        currentTime.msec += 4;
        if (currentTime.msec === 1000) {
          currentTime.msec = 0;
          currentTime.sec += 1;
        }
    
        if (currentTime.sec === 60) {
          currentTime.sec = 0;
          currentTime.min += 1;
        }
    
        if (currentTime.min === 60) {
          currentTime.min = 0;
          currentTime.hour += 1;
        }

        updateTimmer()
      }, 4);
  }
};

const stop = (event) => {
    clearInterval(intervalRef);
    intervalRef = null;
}

const reset = (event) => {
    clearInterval(intervalRef);
    intervalRef = null;
    for (key in currentTime){
        currentTime[`${key}`] = 0;
    }
    updateTimmer()
}

document.querySelector("#start").addEventListener("click", start);
document.querySelector("#stop").addEventListener("click", stop);
document.querySelector("#reset").addEventListener("click", reset);