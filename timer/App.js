import Timer from './Timer.js';

export const Utils = {
  setFormat(time) {
    return time < 10 ? '0' + time : time;
  }
};

const App = () => {
  const goalTime = '2021, 06, 14, 00:00';
  const timer = new Timer(goalTime);
  timer.countdown(); // 화면 로딩되자마자 시간 나오게 하기 위해 timer.countdown() 호출함.
  setInterval(timer.countdown, 1000);
};

App();
