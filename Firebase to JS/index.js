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

const d = new Date();
let hour = d.getHours();

var TemperatureRef

var HumidityRef

var Datalistatest = new Array

console.log(hour)

const db = firebase.database();



var TemperatureRef2 = db.ref("SimonsPlats/Dagar-0/Hour-0/Minute-0/Temperature");

var TemperatureRef3 = db.ref("SimonsPlats/Dagar-0/Hour-" + (hour - 3) + "/Minute-0/Temperature");





var avg

var Nonamearray1 = new Array
var TotalvaluetempM = 0
var TotalvaluehumM = 0
var ValueM = 0
var TotaladdedvaluestempM = 0

var TotalvaluetempH = 0
var TotalvaluehumH = 0
var Tretimme = 0
var Entimme = 0

var Value

var Tretimmetempoutput = 0
var Tretimmehumoutput = 0

let Minut = 0
let Timme = 0
let Dag = 0

// imported and used array: "Datalista"
var Datalistacopy = new Array











TemperatureRef = db.ref("SimonsPlats/Dagar-" + Dag + "/Hour-" + 0 + "/Minute-5/Temperature");

TemperatureRef.on("value", (temp) => {
    Value = temp.val();
    if(Value != null){
    console.log(Value);

}})

































// for(let i = 10; i < Nonamearray1; i--){


// for(let x = 10; x <){



// }}



// Dag = 0
// // Dag
// for(let k = 2; k >= 0; k--){

// Dag = k



// Tretimme = -1
// // Tretimme
// for(let p = 7; p >= 0; p--){

// Tretimme++

// // Temp
// Entimme = 0
// // Entimme
// for(let o = 2; o >= 0; o--){
// Entimme++
// Timme = Tretimme * 3 + Entimme
// // Min
// for(let i = 5; i >= -1; i--){



// Minut = i
//     TemperatureRef = db.ref("SimonsPlats/Dagar-" + Dag + "/Hour-" + Timme + "/Minute-" + Minut + "/Temperature");

// TemperatureRef.on("value", (temp) => {
//     Value = temp.val();
//     if(Value != null){
//     console.log(Value);
    
//     TotalvaluetempM = TotalvaluetempM + Value
//     console.log(TotalvaluetempM)
// TotaladdedvaluestempM++
//     }
// });


// }
// // ---
// TotalvaluetempH = TotalvaluetempH + TotalvaluetempM / TotaladdedvaluestempM
// console.log(TotalvaluetempM + "hi")

// TotalvaluetempM = 0
// TotaladdedvaluestempM = 0
// }               
// // ---
// Tretimmetempoutput = TotalvaluetempH / 3


// // // Hum
// // Entimme = 0
// // for(let o = 3; o > 0; o--){
// // Entimme++
// // let Timme = Tretimme * 3 + Entimme

// // for(let i = 60; i > 0; i--){

// //     HumidityRef = db.ref("SimonsPlats/Dagar-" + Dag + "/Hour-" + Timme + "/Minute-" + i + "/Humidity");

// //     HumidityRef.on("value", (hum) => {
// //         ValueM = hum.val();
// //         TotalvaluehumM = TotalvaluehumM + ValueM
// //     });
// // }
// // TotalvaluehumH = TotalvaluehumH + TotalvaluehumM / 60

// // }
// // Tretimmehumoutput = TotalvaluehumH / 3


// // Push datarad till Datalista
// Datalistacopy.push(  ((Math.pow(10, 8)) * 1)  + (Math.pow(10, 6) * Dag)  +  (Math.pow(10, 4) * Tretimme)  +  ((Math.pow(10, 2)) * Math.round(Tretimmetempoutput * 2))  +  Math.round((Tretimmehumoutput * 2))  )
// console.log("hi")




// }



// }
// Datalistacopy.push(12323124)
// Datalistacopy.forEach(logNames)


// function logNames(name){

//     console.log(name);
//   }
  






// TemperatureRef = db.ref("SimonsPlats/Dagar-" + Dag + "/Hour-" + Timme + "/Minute-" + Minut + "/Temperature");


// TemperatureRef.on("value", (temp) => {
//     let Value = temp.val();
//     console.log(Value);
//     Datalistatest.push(Value)
// });















// TemperatureRef2.on("value", (temp) => {
//     let Value = temp.val();
//     console.log(Value);
//     Datalistatest.push(Value)
// });

// TemperatureRef3.on("value", (temp) => {
//     let Value = temp.val();
//     console.log(Value);
//     Datalistatest.push(Value)
//     alert(Datalistatest[0])
// });
