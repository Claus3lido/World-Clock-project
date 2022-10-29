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
  let shanghaiTime = moment().tz("Asia/Shanghai");
  shanghaiDatesElement.innerHTML = shanghaiTime.format("MMMM Do YYYY");
  shanghaiTimeElement.innerHTML = shanghaiTime.format("h:mm:ss A");

  let dublinElement = document.querySelector("#dublin");
  let dublinDatesElement = dublinElement.querySelector(".date");
  let dublinTimeElement = dublinElement.querySelector(".time");
  let dublinTime = moment().tz("Europe/Dublin");
  dublinDatesElement.innerHTML = dublinTime.format("MMMM Do YYYY");
  dublinTimeElement.innerHTML = dublinTime.format("h:mm:ss A");
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let timezoneElement = document.querySelector(".timezone");
  timezoneElement.innerHTML = `<div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss A")}</div>
    </div>
     `;
}
updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
