// Your web app's Firebase configuration
// https://www.survivingwithandroid.com/esp8266-firebase-realtime-database-iot-controlled-rgb-leds/

const firebaseConfig = {
    apiKey: "AIzaSyDY7wGtFEKln8NJ3LFDqO26V5dzsEu_Dhs",
    authDomain: "i-det-hetaste-laget-bg4.firebaseapp.com",
    databaseURL: "https://i-det-hetaste-laget-bg4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "i-det-hetaste-laget-bg4",
    storageBucket: "i-det-hetaste-laget-bg4.appspot.com",
    messagingSenderId: "364821865365",
    appId: "1:364821865365:web:29a23ec2b7b918d8be8c9c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let TheValue = 0;

const d = new Date();
//let hourT = d.getHours();
//let hourH = d.getHours();
let hourLive = d.getHours();
hourLive = hourLive+1;
let Minute = d.getMinutes();

let hourT = 0
let hourH = 0

let dagLive = 0
let dagT = 2
let dagH = 2

let p = 0
let dat
let tim

let TempList = [];
let HumList = [];

let HumLiveValue;
let TempLiveValue;


const db = firebase.database();

function otherDayCheck(tim){
    if (tim == -1) {
        let tim = 23;
        return tim;
    }
    else {
        return tim;
    }
}
function otherDayChange(tim,dat) {
    if (tim == -1) {
        return dat - 1;
    }
    else {
        return dat;
    }
}


for(let i=0; i<24;i++){
    var TemperatureRef1 = db.ref("SimonsPlats/Dagar-" + dagT + "/Hour-" + hourT + "/Minute-0/Temperature");
    TemperatureRef1.on("value", (temp) => {
        let TheValue = temp.val();
        TempList.push(TheValue)
        console.log(TempList)
    });

    hourT = hourT-1;
    dagT = otherDayChange(hourT,dagT);
    hourT = otherDayCheck(hourT);

}

for(let i=0; i<24;i++){
    var HumidityRef1 = db.ref("SimonsPlats/Dagar-" + dagH + "/Hour-" + hourH + "/Minute-0/Humidity");
    HumidityRef1.on("value", (hum) => {
        let TheValue = hum.val();
        HumList.push(TheValue)
        console.log(HumList)
    });

    hourH = hourH-1;
    dagH = otherDayChange(hourH,dagH);
    hourH = otherDayCheck(hourH);
}



    
 //   else {
 //       setTimeout(() => {
  //          console.log("test");
 //       }, 1000);
console.log(dagLive)
console.log(hourLive)
console.log(Minute)


for(i=0;i<24;i++){
//    if (Second == 0 || Second == 10 || Second == 20 || Second == 30 || Second == 40 || Second == 50) {
    var HumidityLive1 = db.ref("SimonsPlats/Dagar-" + dagLive + "/Hour-" + hourLive + "/Minute-" + Minute + "/Humidity");
    HumidityLive1.on("value", (huma) => {
        let HumLiveValue = huma.val();
        console.log(HumLiveValue);
    });
    var TemperatureLive1 = db.ref("SimonsPlats/Dagar-" + dagLive + "/Hour-" + hourLive + "/Minute-" + Minute + "/Temperature");
    TemperatureLive1.on("value", (tempa) => {
        let TempLiveValue = tempa.val();
        console.log(TempLiveValue);
    });

 //   }
}

//  Firebase -> Lokal Array(Graf1 Js):
var Datalistacopy = new Array

var humvalue
var tempvalue

for(let i=49;i>=0;i--){
    for(let x=7; x>=0;x--){
    var TemperatureRef = db.ref("SimonsPlats/Dagar-" + i + "/Hour-" + x * 3 + "/Minute-5/Temperature");
    TemperatureRef.on("value", (tempa) => {
            tempvalue = Math.round(tempa.val())
            console.log(tempvalue);
            console.log("t:")
        })
    var HumidityRef = db.ref("SimonsPlats/Dagar-" + i + "/Hour-" + x * 3 + "/Minute-5/Humidity");
    HumidityRef.on("value", (huma) => {
            humvalue = Math.round(huma.val())
            console.log(humvalue);
            console.log("h:")
if (tempvalue != 0 && humvalue != 0){
    Datalistacopy.push(10000000 + 100000 * i + 10000 * x + 100 * tempvalue + humvalue)
    console.log(10000000 + 100000 * i + 10000 * x + 100 * tempvalue + humvalue)
    }})}
}

