function updateTime() {
  let sanDiegoElement = document.querySelector(".#san-diego");
  let sanDiegoDatesElement = sanDiegoElement.querySelector(".date");
  let sanDiegoTimeElement = sanDiegoElement.querySelector(".time");
  let sanDiegoTime = moment().tz("America/Los_Angeles");
  sanDiegoDatesElement.innerHTML = sanDiegoTime.format("MMMM Do YYYY");
  sanDiegoTimeElement.innerHTML = sanDiegoTime.format("h:mm:ss A");
}

updateTime();
setInterval(updateTime, 1000);
