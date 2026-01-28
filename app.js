 document.getElementById("weatherForm").addEventListener('submit', function (e) {
        e.preventDefault();
        let cityName = document.getElementById("cityInput").value;
        let apiurl = `http://api.weatherapi.com/v1/current.json?key=414bfed570924542aff45116262701&q=${cityName}`;

        fetch(apiurl).then(res => res.json()).then(resp => {
            document.getElementById("cityname").innerText = resp.location.name;
            document.getElementById("city-contry").innerText = resp.location.region;
            document.getElementById("time").innerText = resp.location.localtime;
            document.getElementById("img").src = "https:" + resp.current.condition.icon;
            document.getElementById("temperature").innerText = resp.current.temp_c;
            document.getElementById("feelslike").innerText = resp.current.feelslike_c;
            document.getElementById("humidity").innerText = resp.current.humidity;
            document.getElementById("wind-speed").innerText = resp.current.wind_kph;
            document.getElementById("visibility").innerText = resp.current.vis_km;





        })
    });