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

let FirstValue = 0;
let SecondValue = 0;
let ThirdValue = 0;
const d = new Date();
let hour = d.getHours();
let hour2 = hour - 1
let hour3 = hour2 - 1

console.log(hour)
console.log(hour3)

const db = firebase.database();

var TemperatureRef = db.ref("SimonsPlats/Dagar-0/Hour-" + hour + "/Minute-0/Temperature");

var TemperatureRef2 = db.ref("SimonsPlats/Dagar-0/Hour-" + hour2 + "/Minute-0/Temperature");

var TemperatureRef3 = db.ref("SimonsPlats/Dagar-0/Hour-" + hour3 + "/Minute-0/Temperature");

TemperatureRef.on("value", (temp) => {
    let FirstValue = temp.val();
    console.log(FirstValue);
});

TemperatureRef2.on("value", (temp) => {
    let SecondValue = temp.val();
    console.log(SecondValue);
});

TemperatureRef3.on("value", (temp) => {
    let ThirdValue = temp.val();
    console.log(ThirdValue);
});

console.log(FirstValue);
console.log(SecondValue);
console.log(ThirdValue);