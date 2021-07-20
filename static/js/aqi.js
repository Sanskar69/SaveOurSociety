const cityName = document.getElementById('cityName');
const submitBTN = document.getElementById('submitBTN');
const city = document.getElementById('city');
const aqi_status = document.getElementById('aqi_status');
const aqi = document.getElementById('aqi');
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
            let url = `https://api.waqi.info/feed/${cityVal}/?token=62c73d84a2ed70babaf9cecd9ddeb7072900faf0`
            const response = await fetch(url);
            const data = await response.json();
            const dataArr = [data];
            city.innerText = `${dataArr[0].data.city.name}`;
            aqi.innerText = `${dataArr[0].data.aqi}`;
            aqiVal = dataArr[0].data.aqi;

            if(aqiVal < 51){
                aqi_status.innerHTML =  `<i class="fas fa-circle" style="color: #8aff82;"></i>`
            }else if(aqiVal>50 && aqiVal<101){
                aqi_status.innerHTML =  `<i class="fas fa-circle" style="color: #209618;"></i>`
            }else if(aqiVal>100 && aqiVal<201){
                aqi_status.innerHTML =  `<i class="fas fa-circle" style="color: #e0d463;"></i>`
            }else if(aqiVal>200 && aqiVal<301){
                aqi_status.innerHTML =  `<i class="fas fa-circle" style="color: #ff9029;"></i>`
            }else if(aqiVal>300 && aqiVal<401){
                aqi_status.innerHTML =  `<i class="fas fa-circle" style="color: #ff674f;"></i>`
            }else if(aqiVal>400 && aqiVal<501){
                aqi_status.innerHTML =  `<i class="fas fa-circle" style="color: #ff2200;"></i>`
            }else{
                aqi_status.innerHTML =  `<i class="fas fa-circle" style="color: #000000;"></i>`
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