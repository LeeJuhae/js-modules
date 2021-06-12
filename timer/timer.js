import { Utils } from './App.js';

const Timer = function (goalTime) {
  this.goalTime = new Date(goalTime);
  this.countdown = () => {
    const timer = document.getElementById('timer');
    if (timer) {
      const now = new Date(Date.now());
      const ms = this.goalTime - now;
      if (ms >= 0) {
        const hours = parseInt(ms / 1000 / 60 / 60, 10);
        const minutes = parseInt((ms / 1000 / 60) % 60, 10);
        const seconds = parseInt((ms / 1000) % 60, 10);

        const leftTime =
          Utils.setFormat(hours) + ':' + Utils.setFormat(minutes) + ':' + Utils.setFormat(seconds);
        timer.textContent = leftTime;
        timer.setAttribute('datetime', leftTime);
      }
    }
  };
};

export default Timer;
