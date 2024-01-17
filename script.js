//날씨정보api 불러오기
function success({ coords }) {
    const a = coords.latitude;   // 위도
    const b = coords.longitude; // 경도
    let url = "https://api.open-meteo.com/v1/forecast?latitude="+a+"&longitude="+b+"&current=temperature_2m,is_day,rain,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,rain"
    let urls ="https://air-quality-api.open-meteo.com/v1/air-quality?latitude="+a+"&longitude="+b+"&current=pm10,pm2_5&hourly=pm10,pm2_5&forecast_days=1"
    fetch(urls)
    .then ((response) => response.json ())
    .then ((data) => { if( data['current'].pm10 >0){
      document.getElementById("t").style.display = "none"
    }
   
    });
    fetch(url)
    .then ((response) => response.json ())
    .then ((data) => { document.getElementById("c-t").innerHTML=
    data['current'].temperature_2m
    });
    fetch(url)
    .then ((response) => response.json ())
    .then ((data) => { document.getElementById("c-ws").innerHTML=
    data['current'].wind_speed_10m
    });
    fetch(url)
    .then ((response) => response.json ())
    .then ((data) => { document.getElementById("c-wd").innerHTML=
    data['current'].wind_direction_10m
    })
    fetch(url)
    .then ((response) => response.json ())
    .then ((data) => { document.getElementById("c-r").innerHTML=
    data['current'].rain
    })
    
    fetch(urls)
    .then ((response) => response.json ())
    .then ((data) => { document.getElementById("c-aq").innerHTML=
    data['current'].pm2_5
    })
    fetch(urls)
    .then ((response) => response.json ())
    .then ((data) => { document.getElementById("c-aqx").innerHTML=
    data['current'].pm10
    })

    //미세먼지 기준
    fetch(urls)
    .then((response) => response.json())
    .then((data) => {if ( data['current'].pm10 < 16) {
        document.getElementById("c-aqx").style.color = "blue";
      } 
    });
    fetch(urls)
    .then((response) => response.json())
    .then((data) => {if ( data['current'].pm10 >16) {
        document.getElementById("c-aqx").style.color = "green";
      } 
    });
    fetch(urls)
    .then((response) => response.json())
    .then((data) => {if ( data['current'].pm10 >100) {
        document.getElementById("c-aqx").style.color = "orange";
      } 
    });


    fetch(url)
    .then ((response) => response.json ())
    .then ((data) => { document.getElementById("onehour-t").innerHTML=
    data.hourly.temperature_2m[1]
    });
    fetch(url)
    .then ((response) => response.json ())
    .then ((data) => { document.getElementById("onehour-r").innerHTML=
    data.hourly.rain[1]
    });
    fetch(url)
    .then ((response) => response.json ())
    .then ((data) => { document.getElementById("fivehours-t").innerHTML=
    data.hourly.temperature_2m[5]
    });
    fetch(url)
    .then ((response) => response.json ())
    .then ((data) => { document.getElementById("fivehours-r").innerHTML=
    data.hourly.rain[5]
    });
    fetch(url)
    .then ((response) => response.json ())
    .then ((data) => { document.getElementById("twhours-r").innerHTML=
    data.hourly.rain[24]
    });
    fetch(url)
    .then ((response) => response.json ())
    .then ((data) => { document.getElementById("twhours-t").innerHTML=
    data.hourly.temperature_2m[24]
    });

    
  }


function getUserLocation() {
navigator.geolocation.watchPosition(success);
}
getUserLocation();
