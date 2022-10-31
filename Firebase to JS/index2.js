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

const d = new Date();
let hour = d.getHours();

console.log(hour)

const db = firebase.database();

var TemperatureRef = db.ref("SimonsPlats/Dagar-0/Hour-" + hour + "/Minute-41/Temperature");


TemperatureRef.on("value", (temp) => {
    const data = temp.val();
    console.log(data);
    let FirstValue = temp.val();
});
 console.log(FirstValue)