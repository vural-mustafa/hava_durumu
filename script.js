const conatiner =document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails=document.querySelector('.weather-details');
const hata=document.querySelector('.not-found');

search.addEventListener('click',() => {
    const ApiKey = '93bbbf1a54364548f7080778169453da';
    const sehir =document.querySelector('.search-box input').value;

    if(sehir===''){
        return;
    }
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${sehir}&lang=tr&units=metric&appid=${ApiKey}`).then(response => response.json()).then(json => {


            if(json.cod==='404'){
                conatiner.style.height='420px';
                weatherBox.style.display='none';
                weatherDetails.style.display='none';
                hata.style.display='none';
                hata.classList.add('fadeIn');
                return;
            }

            hata.style.display='none';
            hata.classList.remove=('fadeIn');

            const resim =document.querySelector('.weather-box img');
            const sicaklik=document.querySelector('.weather-box .temperature');
            const aciklama =document.querySelector('.weather-box .description');
            const nem= document.querySelector('.weather-details .humidity span');
            const ruzgar =document.querySelector('.weather-details .wind span');

            switch(json.weather[0].main){
                case 'Clear':
                    resim.src='image/the-sun-349394_1280.png';
                break;
                case 'Rain':
                    resim.src='image/rain-98538_1280.png';
                break;
                case 'Snow':
                    resim.src='image/sun-346710_1280.png';
                break;
                case 'Clouds':
                    resim.src='image/cloud-4510143_1280.png';
                break;
                case 'Haze':
                    resim.src='image/tornado-41952_1280.png';
                break;
                default:
                   resim.src='';
            }

            sicaklik.innerHTML =`${parseInt(json.main.temp)}<span>C°</span>`;
            aciklama.innerHTML = `${json.weather[0].description}`;
            nem.innerHTML =`%${json.main.humidity}`;
            ruzgar.innerHTML =`${json.wind.speed} km/s`;

            weatherBox.style.display='';
            weatherDetails.style.display='';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            conatiner.style.height='605px';

        }
        )}       
);