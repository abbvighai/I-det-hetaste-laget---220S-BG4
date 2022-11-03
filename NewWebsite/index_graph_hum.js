const firebaseConfig = {
    apiKey: "AIzaSyDY7wGtFEKln8NJ3LFDqO26V5dzsEu_Dhs",
    authDomain: "i-det-hetaste-laget-bg4.firebaseapp.com",
    databaseURL: "https://i-det-hetaste-laget-bg4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "i-det-hetaste-laget-bg4",
    storageBucket: "i-det-hetaste-laget-bg4.appspot.com",
    messagingSenderId: "364821865365",
    appId: "1:364821865365:web:29a23ec2b7b918d8be8c9c"
};
// Initialize Firebase & variables
firebase.initializeApp(firebaseConfig);



let TheValue1;
let TheValue2;
let TheValue3;
let TheValue4;
let TheValue5;

const d = new Date();

let Minute = d.getMinutes();
let hourSimon = d.getHours();
let hourHallon = d.getHours();
let hourTerraria = d.getHours();
let hourKlassrum = d.getHours();
let hourLars = d.getHours();

let hour = d.getHours();

hourSimon = hourSimon+1
hourHallon = hourHallon+1
hourTerraria = hourTerraria+1
hourKlassrum = hourKlassrum+1
hourLars = hourLars+1


let dagSimon = 0
let dagHallon = 0
let dagTerraria = 0
let dagKlassrum = 0
let dagLars = 0

let p = 0
let dat
let tim

let HumListSimon = [];
let HumListHallon = [];
let HumListTerraria = [];
let HumListKlassrum = [];
let HumListLars = [];
let HourList = [];

const db = firebase.database();

// Checkar om det är en ny dag och om timmen ska ändras
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
    HourList.push(hour);
    hour = hour-1;
    hour = otherDayCheck(hour);
}
//Bygger en array för Hum
for(let i=0; i<24;i++){
    var HumidityRef1 = db.ref("SimonsPlats/Dagar-" + dagSimon + "/Hour-" + hourSimon + "/Minute-0/Humidity");
    HumidityRef1.on("value", (Hum) => {
        let TheValue1 = Hum.val();
        HumListSimon.push(TheValue1)
        //console.log(HumListSimon)
    });

    hourSimon = hourSimon-1;
    dagSimon = otherDayChange(hourSimon,dagSimon);
    hourSimon = otherDayCheck(hourSimon);

}
for(let i=0; i<24;i++){
    var HumidityRef2 = db.ref("Hallonrummet/Dagar-" + dagHallon + "/Hour-" + hourHallon + "/Minute-0/Humidity");
    HumidityRef2.on("value", (Hum) => {
        let TheValue2 = Hum.val();
        HumListHallon.push(TheValue2)
        //console.log(HumListHallon)
    });

    hourHallon = hourHallon-1;
    dagHallon = otherDayChange(hourHallon,dagHallon);
    hourHallon = otherDayCheck(hourHallon);

}

for(let i=0; i<24;i++){
    var HumidityRef3 = db.ref("Terrariet/Dagar-" + dagTerraria + "/Hour-" + hourTerraria + "/Minute-0/Humidity");
    HumidityRef3.on("value", (Hum) => {
        let TheValue3 = Hum.val();
        HumListTerraria.push(TheValue3)
        console.log(HumListTerraria)
    });

    hourTerraria = hourTerraria-1;
    dagTerraria = otherDayChange(hourTerraria,dagTerraria);
    hourTerraria = otherDayCheck(hourTerraria);

}

for(let i=0; i<24;i++){
    var HumidityRef4 = db.ref("Klassrum/Dagar-" + dagKlassrum + "/Hour-" + hourKlassrum + "/Minute-0/Humidity");
    HumidityRef4.on("value", (Hum) => {
        let TheValue4 = Hum.val();
        HumListKlassrum.push(TheValue4)
        console.log(HumListKlassrum)
    });

    hourKlassrum = hourKlassrum-1;
    dagKlassrum = otherDayChange(hourKlassrum,dagKlassrum);
    hourKlassrum = otherDayCheck(hourKlassrum);

}

for(let i=0; i<24;i++){
    var HumidityRef5 = db.ref("Lars/Dagar-" + dagLars + "/Hour-" + hourLars + "/Minute-0/Humidity");
    HumidityRef5.on("value", (Hum) => {
        let TheValue5 = Hum.val();
        HumListLars.push(TheValue3)
        console.log(HumListLars)
    });

    hourLars = hourLars-1;
    dagLars = otherDayChange(hourLars,dagLars);
    hourLars = otherDayCheck(hourLars);

}

//Grafen
function HumsimPlats(){
HumidityRef1.once("value").then((snapshot) => {
anychart.onDocumentReady(function () {
    let simonsPlatsHum = anychart.data.set(getHumData1());

    let thermometerData1 = simonsPlatsHum.mapAs({ x: 0, value: 1 });

    let chart = anychart.line();

    chart.title('Luftfuktighet: Simons plats');

    chart.yAxis().title('Luftfuktighet (%)');

    chart.xAxis().title('Timmar')

    chart.line(thermometerData1);

    chart.container('simPlats');
    // $('#container').replaceWith('<canvas id="container"></canvas>');
    // var ctxChart = document.getElementById("container").getContext("2d");
    // window.myChart = new Chart(ctxChart).Line(newdata, options);
    chart.draw();
    });

});
}

function HumHallon(){
    HumidityRef2.once("value").then((snapshot) => {
    anychart.onDocumentReady(function () {
        let HallonHum = anychart.data.set(getHumData2());
    
        let thermometerData2 = HallonHum.mapAs({ x: 0, value: 1 });
    
        let chart = anychart.line();
    
        chart.title('Luftfuktighet: Hallonrummet');
    
        chart.yAxis().title('Luftfuktighet (%)');
    
        chart.xAxis().title('Timmar')
    
        chart.line(thermometerData2);
    
        chart.container('hallon');
        // $('#container').replaceWith('<canvas id="container"></canvas>');
        // var ctxChart = document.getElementById("container").getContext("2d");
        // window.myChart = new Chart(ctxChart).Line(newdata, options);
        chart.draw();
        });
    
    });
    }

    function HumTerraria(){
        HumidityRef3.once("value").then((snapshot) => {
        anychart.onDocumentReady(function () {
            let TerrariaHum = anychart.data.set(getHumData3());
        
            let thermometerData3 = TerrariaHum.mapAs({ x: 0, value: 1 });
        
            let chart = anychart.line();
        
            chart.title('Luftfuktighet: Terrariet');
        
            chart.yAxis().title('Luftfuktighet (%)');
        
            chart.xAxis().title('Timmar')
        
            chart.line(thermometerData3);
        
            chart.container('terra');
            // $('#container').replaceWith('<canvas id="container"></canvas>');
            // var ctxChart = document.getElementById("container").getContext("2d");
            // window.myChart = new Chart(ctxChart).Line(newdata, options);
            chart.draw();
            });
        
        });
        }


        function HumKlassrum(){
            HumidityRef4.once("value").then((snapshot) => {
            anychart.onDocumentReady(function () {
                let KlassrumHum = anychart.data.set(getHumData4());
            
                let thermometerData4 = KlassrumHum.mapAs({ x: 0, value: 1 });
            
                let chart = anychart.line();
            
                chart.title('Luftfuktighet: Klassrummet');
            
                chart.yAxis().title('Luftfuktighet (%)');
            
                chart.xAxis().title('Timmar')
            
                chart.line(thermometerData4);
            
                chart.container('klassRum');
                // $('#container').replaceWith('<canvas id="container"></canvas>');
                // var ctxChart = document.getElementById("container").getContext("2d");
                // window.myChart = new Chart(ctxChart).Line(newdata, options);
                chart.draw();
                });
            
            });
            }

            function HumLars(){
                HumidityRef5.once("value").then((snapshot) => {
                anychart.onDocumentReady(function () {
                    let LarsHum = anychart.data.set(getHumData5());
                
                    let thermometerData5 = LarsHum.mapAs({ x: 0, value: 1 });
                
                    let chart = anychart.line();
                
                    chart.title('Luftfuktighet: Lars arbets plats');
                
                    chart.yAxis().title('Luftfuktighet (%)');
                
                    chart.xAxis().title('Timmar')
                
                    chart.line(thermometerData5);
                
                    chart.container('Lars');
                    // $('#container').replaceWith('<canvas id="container"></canvas>');
                    // var ctxChart = document.getElementById("container").getContext("2d");
                    // window.myChart = new Chart(ctxChart).Line(newdata, options);
                    chart.draw();
                    });
                
                });
                }
function getHumData1(){
    return[
    [HourList[23],HumListSimon[23]],
    [HourList[22],HumListSimon[22]],
    [HourList[21],HumListSimon[21]],
    [HourList[20],HumListSimon[20]],
    [HourList[19],HumListSimon[19]],
    [HourList[18],HumListSimon[18]], 
    [HourList[17],HumListSimon[17]],
    [HourList[16],HumListSimon[16]],
    [HourList[15],HumListSimon[15]],
    [HourList[14],HumListSimon[14]],
    [HourList[13],HumListSimon[13]],
    [HourList[12],HumListSimon[12]],
    [HourList[11],HumListSimon[11]],
    [HourList[10],HumListSimon[10]],
    [HourList[9],HumListSimon[9]],
    [HourList[8],HumListSimon[8]],
    [HourList[7],HumListSimon[7]],
    [HourList[6],HumListSimon[6]],
    [HourList[5],HumListSimon[5]],
    [HourList[4],HumListSimon[4]],
    [HourList[3],HumListSimon[3]],
    [HourList[2],HumListSimon[2]], 
    [HourList[1],HumListSimon[1]],
    [HourList[0],HumListSimon[0]],
    ];
}

function getHumData2(){
    return[
        [HourList[23],HumListHallon[23]],
        [HourList[22],HumListHallon[22]],
        [HourList[21],HumListHallon[21]],
        [HourList[20],HumListHallon[20]],
        [HourList[19],HumListHallon[19]],
        [HourList[18],HumListHallon[18]], 
        [HourList[17],HumListHallon[17]],
        [HourList[16],HumListHallon[16]],
        [HourList[15],HumListHallon[15]],
        [HourList[14],HumListHallon[14]],
        [HourList[13],HumListHallon[13]],
        [HourList[12],HumListHallon[12]],
        [HourList[11],HumListHallon[11]],
        [HourList[10],HumListHallon[10]],
        [HourList[9],HumListHallon[9]],
        [HourList[8],HumListHallon[8]],
        [HourList[7],HumListHallon[7]],
        [HourList[6],HumListHallon[6]],
        [HourList[5],HumListHallon[5]],
        [HourList[4],HumListHallon[4]],
        [HourList[3],HumListHallon[3]],
        [HourList[2],HumListHallon[2]], 
        [HourList[1],HumListHallon[1]],
        [HourList[0],HumListHallon[0]],
        ];
    }

function getHumData3(){
    return[
        [HourList[23],HumListTerraria[23]],
        [HourList[22],HumListTerraria[22]],
        [HourList[21],HumListTerraria[21]],
        [HourList[20],HumListTerraria[20]],
        [HourList[19],HumListTerraria[19]],
        [HourList[18],HumListTerraria[18]], 
        [HourList[17],HumListTerraria[17]],
        [HourList[16],HumListTerraria[16]],
        [HourList[15],HumListTerraria[15]],
        [HourList[14],HumListTerraria[14]],
        [HourList[13],HumListTerraria[13]],
        [HourList[12],HumListTerraria[12]],
        [HourList[11],HumListTerraria[11]],
        [HourList[10],HumListTerraria[10]],
        [HourList[9],HumListTerraria[9]],
        [HourList[8],HumListTerraria[8]],
        [HourList[7],HumListTerraria[7]],
        [HourList[6],HumListTerraria[6]],
        [HourList[5],HumListTerraria[5]],
        [HourList[4],HumListTerraria[4]],
        [HourList[3],HumListTerraria[3]],
        [HourList[2],HumListTerraria[2]], 
        [HourList[1],HumListTerraria[1]],
        [HourList[0],HumListTerraria[0]],
        ];
    }

function getHumData4(){
    return[
        [HourList[23],HumListKlassrum[23]],
        [HourList[22],HumListKlassrum[22]],
        [HourList[21],HumListKlassrum[21]],
        [HourList[20],HumListKlassrum[20]],
        [HourList[19],HumListKlassrum[19]],
        [HourList[18],HumListKlassrum[18]], 
        [HourList[17],HumListKlassrum[17]],
        [HourList[16],HumListKlassrum[16]],
        [HourList[15],HumListKlassrum[15]],
        [HourList[14],HumListKlassrum[14]],
        [HourList[13],HumListKlassrum[13]],
        [HourList[12],HumListKlassrum[12]],
        [HourList[11],HumListKlassrum[11]],
        [HourList[10],HumListKlassrum[10]],
        [HourList[9],HumListKlassrum[9]],
        [HourList[8],HumListKlassrum[8]],
        [HourList[7],HumListKlassrum[7]],
        [HourList[6],HumListKlassrum[6]],
        [HourList[5],HumListKlassrum[5]],
        [HourList[4],HumListKlassrum[4]],
        [HourList[3],HumListKlassrum[3]],
        [HourList[2],HumListKlassrum[2]], 
        [HourList[1],HumListKlassrum[1]],
        [HourList[0],HumListKlassrum[0]],
        ];
    }

function getHumData5(){
    return[
        [HourList[23],HumListLars[23]],
        [HourList[22],HumListLars[22]],
        [HourList[21],HumListLars[21]],
        [HourList[20],HumListLars[20]],
        [HourList[19],HumListLars[19]],
        [HourList[18],HumListLars[18]], 
        [HourList[17],HumListLars[17]],
        [HourList[16],HumListLars[16]],
        [HourList[15],HumListLars[15]],
        [HourList[14],HumListLars[14]],
        [HourList[13],HumListLars[13]],
        [HourList[12],HumListLars[12]],
        [HourList[11],HumListLars[11]],
        [HourList[10],HumListLars[10]],
        [HourList[9],HumListLars[9]],
        [HourList[8],HumListLars[8]],
        [HourList[7],HumListLars[7]],
        [HourList[6],HumListLars[6]],
        [HourList[5],HumListLars[5]],
        [HourList[4],HumListLars[4]],
        [HourList[3],HumListLars[3]],
        [HourList[2],HumListLars[2]], 
        [HourList[1],HumListLars[1]],
        [HourList[0],HumListLars[0]],
        ];
    }
HumsimPlats();
HumHallon();
HumTerraria();
HumKlassrum();
HumLars();

//  Firebase -> Lokal Array(Graf1 Js)(temp & hum):

// var Datalistacopy = new Array

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
    Datalista.push(10000000 + 100000 * i + 10000 * x + 200 * tempvalue + 2 * humvalue)
    console.log(10000000 + 100000 * i + 10000 * x + 200 * tempvalue + 2 * humvalue)
    }})}
}

