const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startButton: document.querySelector('[data-action="start"]'),
  stopButton: document.querySelector('[data-action="stop"]')
}

const timerBackgroundColor = {
  intervalId: null,
  isActive: false,
  colors,
  start() {
    if (this.isActive) {
      return
    }
    this.isActive = true
    
    this.intervalId = setInterval((array) => {
      refs.body.style.backgroundColor = array[this.randomIntegerFromInterval(0, array.length - 1)]
    }, 1000, this.colors)
  },
  randomIntegerFromInterval(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
  },
  stop() {
    clearInterval(this.intervalId)
    this.isActive = false
  }
}


refs.startButton.addEventListener('click', timerBackgroundColor.start.bind(timerBackgroundColor))
refs.stopButton.addEventListener('click', timerBackgroundColor.stop.bind(timerBackgroundColor));

