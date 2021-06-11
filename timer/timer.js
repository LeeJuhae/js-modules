const utils = {
  setFormat(time) {
    return time < 10 ? '0' + time : time;
  }
};

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

      hour.innerHTML = utils.setFormat(hours);
      minute.innerHTML = utils.setFormat(minutes);
      second.innerHTML = utils.setFormat(seconds);
    }
  };
};

const App = () => {
  const goalTime = '2021, 06, 12, 00:00';
  const timer = new Timer(goalTime);
  timer.countdown(); // 화면 로딩되자마자 시간 나오게 하기 위해 timer.countdown() 호출함.
  setInterval(timer.countdown, 1000);
};

App();
