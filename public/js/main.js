const cityInput = document.querySelector('#cityInput');
const addCity = document.querySelector('#addCity');
const api = 'c02ffede8ef92de2bd36785536dd1961';
const showData = async (event) => {
     event.preventDefault()
    const cityName = cityInput.value;
    const tempText = document.querySelector('#tempText')
    const iconSpace = document.querySelector('#icons')
    const dataLayer = document.querySelector('.data_hide')
    const error = document.querySelector('#error');
    const citySpace = document.querySelector('#citySpace');
    if (cityName == " ") {
        error.innerText = "Please Enter City Name";
        error.style.color = "red";
        dataLayer.classList.add('data_hide');
     }

    try {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${api} `
        const data = await fetch(url);
        const result = await data.json();
        const arrdata = [result];
        console.log(arrdata);
      
        tempText.innerText = arrdata[0].main.temp;
        tempText.style.cssText="color:white;font-size:2rem"
        citySpace.innerText = arrdata[0].name;

        const tempMood = arrdata[0].weather[0].main;
        dataLayer.classList.remove('data_hide');
        const todaySpace = document.querySelector('#todaySpace');
        const todayDate=document.querySelector('#todayDate')
        


         //dat logic
        const date = new Date();
        const today = date.getDay();
        const MyDate = date.toLocaleString();
        const dayArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thurdsay', 'friday', 'saturday'];
        todaySpace.innerText = dayArray[today];
        todayDate.innerText = MyDate;
        console.log(tempMood);
        
        //icons settings
        
        if (tempMood == "Haze") {
            iconSpace.innerHTML = `<i class="fas fa-cloud-sun"></i>`;
            iconSpace.style.cssText="color:#00d2ff;font-size:3rem; "
        }
        else if (tempMood == "Clouds") {
            iconSpace.innerHTML = `<i class="fas fa-cloud-meatball"></i>`;
            iconSpace.style.cssText="color:#00d2ff;font-size:3rem;"
        }
        else if (tempMood == "Rain") {
            iconSpace.innerHTML = `<i class="fas fa-cloud-rain"></i>`;
            iconSpace.style.cssText="color:#00d2ff;font-size:3rem;"
        }
        else {
            iconSpace.innerHTML = `<i class="fas fa-sun"></i>`;
            iconSpace.style.cssText="color:yellow;font-size:3rem;"
            
        }
        
        
       dataLayer.classList.remove('data_hide');

        error.style.display = "none"
        
}
   
catch (err) {
        console.log(err)  
    }
  
    
}
setTimeout(() => {
    window.location.reload();
},10000)
addCity.addEventListener('click', showData);
