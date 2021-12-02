const temp = document.getElementById('temp');
const temp_status = document.querySelector(".temp_status");
const output = document.getElementById("output");
const sbtbtn = document.getElementById("sbtbtn");
const cityName = document.getElementById("cityName");
const tempClass = document.querySelector(".temp");
const Hideoutput = document.querySelector(".Hideoutput");
const showday = document.getElementById("day");

//For day
const d = new Date();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let day = weekday[d.getDay()];
showday.innerText = day;

//For date
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month = months[d.getMonth()];

document.getElementById("date").innerHTML = `${d.getDate()} ${month}`;

const outputRun = async(event) => {
    event.preventDefault();
    let cityValue = cityName.value;
    if(cityValue === ""){
        output.innerText = `Pls, Enter City Name`;
    }else{
        try {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=da996f9e4a5994753048c0ef8ab3309a`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            Hideoutput.classList.add("spanHide");
            output.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            tempClass.classList.add("visibleTemp");
            temp.innerText = `${arrData[0].main.temp}`;

            if(arrData[0].weather[0].main == "Clouds"){
                temp_status.classList.add("fa-cloud");
            }else if(arrData[0].weather[0].main == 'Clear'){
                console.log("sdsd");
                temp_status.classList.add("fa-sun");
            }
        } catch (error) {
            output.innerText = `Pls, Enter Correct City Name`;
        }
    }
}
document.getElementById("sbtbtn").addEventListener("click", outputRun);