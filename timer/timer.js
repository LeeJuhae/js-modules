import { Utils } from './App.js';

const Timer = function (goalTime) {
  this.goalTime = new Date(goalTime);
  this.countdown = () => {
    const now = new Date(Date.now());
    const ms = this.goalTime - now;
    if (ms >= 0) {
      const hours = parseInt(ms / 1000 / 60 / 60, 10);
      const minutes = parseInt((ms / 1000 / 60) % 60, 10);
      const seconds = parseInt((ms / 1000) % 60, 10);

      let hour = document.getElementById('hour');
      let minute = document.getElementById('minute');
      let second = document.getElementById('second');

      hour.textContent = Utils.setFormat(hours);
      minute.textContent = Utils.setFormat(minutes);
      second.textContent = Utils.setFormat(seconds);
    }
  };
};

export default Timer;
