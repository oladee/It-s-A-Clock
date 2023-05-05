// declaring function to run
const timer = () => {
  let ourTime = new Date();
  let hours = ourTime.getHours();
  let minutes = ourTime.getMinutes();
  let seconds = ourTime.getSeconds();
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("second").innerText = seconds;
  document.getElementById("day");
  // fetching dom ids
  hours > 12 && hours < 24 ? document.getElementById("hours").innerText = hours - 12 : document.getElementById("hours").innerText = hours
  hours > 12 && hours < 24 ? (day.innerText = "PM") : (day.innerText = "AM");
};

setInterval(timer, 1000);
