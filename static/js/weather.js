const cityName = document.getElementById('cityName');
const submitBTN = document.getElementById('submitBTN');
const city = document.getElementById('city');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const datahide = document.querySelector('.middle_layer');
const day = document.querySelector('#day');

const giveAlert = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ''){
        city.innerText = 'Please enter a valid city name!';
        datahide.classList.add('data-hide');
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b2af6f8c81854835194443da922ba9d6`
            const response = await fetch(url);
            const data = await response.json();
            const dataArr = [data];
            city.innerText = `${dataArr[0].name} , ${dataArr[0].sys.country}`;
            temp.innerText = `${dataArr[0].main.temp}°C`;
            tempMood = dataArr[0].weather[0].main;

            if(tempMood == 'Clear'){
                temp_status.innerHTML =  `<i class="fas fa-sun" style="color: #eccc68;"></i>`
            }else if(tempMood == 'Rain'){
                temp_status.innerHTML =  `<i class="fas fa-cloud-rain" style="color: #a4b0be;"></i>`
            }else if(tempMood == 'Clouds'){
                temp_status.innerHTML =  `<i class="fas fa-cloud" style="color: #f1f2f6;"></i>`
            }else{
                temp_status.innerHTML =  `<i class="fas fa-sun" style="color: #eccc68;"></i>`
            }
            datahide.classList.remove('data-hide');
        }catch{
            city.innerText = 'Please enter correct name of the city!';
            datahide.classList.add('data-hide');
        }
    }

}
    
submitBTN.addEventListener('click', giveAlert);

const getCurrentDate = ()=>{
    const date = new Date();
    let n = date.toDateString();
    day.innerText = n ;

}
getCurrentDate();