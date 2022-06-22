const DAYS_ELEMENT = document.querySelector('#days')
const HOURS_ELEMENT = document.querySelector('#hours')
const MINUTES_ELEMENT = document.querySelector('#minutes')
const SECONDS_ELEMENT = document.querySelector('#seconds')

const PROMOTION_DATE = new Date(new Date().getTime()+(5*24*60*60*1000));

const formatTime = (time) => time < 0 ? '0' : time;

const countdown = () => {
  const currentDate = new Date();

  const totalSeconds = (PROMOTION_DATE - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  console.log(days, hours, minutes, seconds)

  DAYS_ELEMENT.innerText = formatTime(days);
  HOURS_ELEMENT.innerText = formatTime(hours);
  MINUTES_ELEMENT.innerText = formatTime(minutes);
  SECONDS_ELEMENT.innerText = formatTime(seconds);
} 

countdown();

setInterval(countdown, 1000);