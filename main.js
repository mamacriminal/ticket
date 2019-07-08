"use strict";
setTime();

const refs = {
  currentTime: document.getElementById("currentTime"),
  currentDateShort: document.getElementById("currentDateShort"),
  termDateFirst: document.getElementById("termDateFirst"),
  termDateSecond: document.getElementById("termDateSecond"),
  serialNumber: document.getElementById("serialNumber")
};

refs.currentDateShort.textContent = moment().format("DD.MM");
refs.termDateFirst.textContent = moment().format("DD.MM.YYYY");
refs.termDateSecond.textContent = moment()
  .add(1, "day")
  .format("DD.MM.YYYY");
refs.serialNumber.textContent = randomIntegerFromInterval(312312312, 987654321);

function setTime() {
  setInterval(() => {
    refs.currentTime.textContent = moment().format("HH:mm:ss");
  }, 1000);
}
function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
