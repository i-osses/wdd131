document.getElementById('startButton').addEventListener('click', function() {
    const minutesInput = document.getElementById('minutesInput').value;
    const countdownDisplay = document.getElementById('countdownDisplay');
    let timeInSeconds = parseInt(minutesInput) * 60;
    let interval;

    function updateDisplay() {
        const minutes = Math.floor(Math.abs(timeInSeconds) / 60);
        const seconds = Math.abs(timeInSeconds) % 60;
        countdownDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        const greenLight = document.getElementById('greenLight');
        const yellowLight = document.getElementById('yellowLight');
        const redLight = document.getElementById('redLight');

        if (timeInSeconds > 180) {
            greenLight.classList.add('active');
            yellowLight.classList.remove('active');
            redLight.classList.remove('active');
        } else if (timeInSeconds > 0) {
            greenLight.classList.remove('active');
            yellowLight.classList.add('active');
            redLight.classList.remove('active');
        } else {
            greenLight.classList.remove('active');
            yellowLight.classList.remove('active');
            redLight.classList.add('active');
        }
    }

    function countdown() {
        updateDisplay();
        timeInSeconds--;
    }

    clearInterval(interval);
    interval = setInterval(countdown, 1000);
});
