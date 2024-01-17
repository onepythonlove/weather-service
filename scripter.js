//날씨정보api 불러오기
function success({ coords }) {
    const a = coords.latitude;   // 위도
    const b = coords.longitude; // 경도
   
   


    
  


function getUserLocation() {
navigator.geolocation.watchPosition(success);
}
getUserLocation();
let url = "https://air-quality-api.open-meteo.com/v1/air-quality?latitude="+a+"&longitude="+b+"&current=pm10,pm2_5,carbon_monoxide,ozone,dust&hourly=pm10,pm2_5,carbon_monoxide,ozone,dust&domains=cams_global"
//api url 
fetch(url)
.then ((response) => response.json ())
.then ((data) => { document.getElementById("d").innerHTML=
data['current'].dust +	"μg/m³"
});

fetch(url)
.then ((response) => response.json ())
.then ((data) => { document.getElementById("o").innerHTML=
data['current'].ozone +	"μg/m³"
});
fetch(url)
.then ((response) => response.json ())
.then ((data) => { document.getElementById("cm").innerHTML=
data['current'].carbon_monoxide +	"μg/m³"
});
fetch(url)
.then ((response) => response.json ())
.then ((data) => { document.getElementById("pm10").innerHTML=
data['current'].pm10 + "μg/m³"
});
fetch(url)
.then ((response) => response.json ())
.then ((data) => { document.getElementById("pm2_5").innerHTML=
data['current'].pm2_5 + "μg/m³"
});
}
function getUserLocation() {
    navigator.geolocation.watchPosition(success);
    }
    getUserLocation();