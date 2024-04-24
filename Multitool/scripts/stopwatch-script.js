let stopwatchMinutesValue = document.querySelector('.minutes');
let stopwatchSecondsValue = document.querySelector('.seconds');
let stopwatchMilisecondsValue = document.querySelector('.miliseconds');

let btnForStart = document.querySelector('.start-btn');
let btnForStop = document.querySelector('.stop-btn');

let counterTime;

function startStopwatch(isStart) {
 
        let number = Number.parseInt(stopwatchMilisecondsValue.textContent);
        let secondIsNumber = Number.parseInt(stopwatchSecondsValue.textContent);
        let minutesIsNumber = Number.parseInt(stopwatchMinutesValue.textContent)
        counterTime = setInterval(() => {
            number++;
            stopwatchMilisecondsValue.textContent = number;
            if (number == 100) {
                secondIsNumber++;
                stopwatchSecondsValue.textContent = secondIsNumber;
                number = 0;
            }
            if (secondIsNumber == 60) {
                minutesIsNumber++;
                stopwatchMinutesValue.textContent = minutesIsNumber;
                secondIsNumber = 0;
            }
        }, 10)

}


btnForStart.addEventListener('click', () => {
    startStopwatch();
})

btnForStop.addEventListener('click', () => {
    clearInterval(counterTime);
})

