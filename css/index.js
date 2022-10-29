function updateTime() {
  let sanDiegoElement = document.querySelector("#san-diego");
  let sanDiegoDatesElement = sanDiegoElement.querySelector(".date");
  let sanDiegoTimeElement = sanDiegoElement.querySelector(".time");
  let sanDiegoTime = moment().tz("America/Los_Angeles");
  sanDiegoDatesElement.innerHTML = sanDiegoTime.format("MMMM Do YYYY");
  sanDiegoTimeElement.innerHTML = sanDiegoTime.format("h:mm:ss A");

  let shanghaiElement = document.querySelector("#shanghai");
  let shanghaiDatesElement = shanghaiElement.querySelector(".date");
  let shanghaiTimeElement = shanghaiElement.querySelector(".time");
  let shanghaiTime = moment().tz("Asia/shanghai");
  shanghaiDatesElement.innerHTML = shanghaiTime.format("MMMM Do YYYY");
  shanghaiTimeElement.innerHTML = shanghaiTime.format("h:mm:ss A");

  let dublinElement = document.querySelector("#dublin");
  let dublinDatesElement = dublinElement.querySelector(".date");
  let dublinTimeElement = dublinElement.querySelector(".time");
  let dublinTime = moment().tz("Europe/dublin");
  dublinDatesElement.innerHTML = dublinTime.format("MMMM Do YYYY");
  dublinTimeElement.innerHTML = dublinTime.format("h:mm:ss A");
}

updateTime();
setInterval(updateTime, 1000);
