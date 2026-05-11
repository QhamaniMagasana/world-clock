function changeTime(){

let johannesburgElement = document.querySelector("#Johannesburg");
let johannesburgTimeElement = johannesburgElement.querySelector(".time");
let johannesburgDateElement = johannesburgElement.querySelector(".date");


let johannesburg = moment().tz("Africa/Johannesburg");


johannesburgDateElement.innerHTML =
    johannesburg.format("MMMM Do YYYY");


johannesburgTimeElement.innerHTML = 
  johannesburg.format("h:mm:ss [<small>]A[</small>]"

);



let jamaicaElement = document.querySelector("#jamaica");
let jamaicaTimeElement = jamaicaElement.querySelector(".time");
let jamaicaDateElement = jamaicaElement.querySelector(".date");


let jamaica = moment().tz("America/Jamaica");


jamaicaDateElement.innerHTML = 
  jamaica.format("MMMM Do YYYY");


jamaicaTimeElement.innerHTML = 
jamaica.format("h:mm:ss [<small>]A[</small>]"

);

}


function displayTime(event){
    
   let cityTimeZone = event.target.value;
   let cityName = cityTimeZone.replace("_", " ").split("/")[1];
   let cityTime = moment().tz(cityTimeZone);
   let citiesElement = document.querySelector("#cities");
   citiesElement.innerHTML = `  
   <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>
        </div>
    </div>`;
}


changeTime();
setInterval(changeTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", displayTime);