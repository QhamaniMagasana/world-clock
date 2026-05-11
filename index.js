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
changeTime();
setInterval(changeTime, 1000);