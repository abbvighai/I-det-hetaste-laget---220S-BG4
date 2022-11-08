// Graferna fungerar på samma sätt oavsett Temperatur/Humidity

const firebaseConfig = {
    apiKey: "AIzaSyDY7wGtFEKln8NJ3LFDqO26V5dzsEu_Dhs",
    authDomain: "i-det-hetaste-laget-bg4.firebaseapp.com",
    databaseURL: "https://i-det-hetaste-laget-bg4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "i-det-hetaste-laget-bg4",
    storageBucket: "i-det-hetaste-laget-bg4.appspot.com",
    messagingSenderId: "364821865365",
    appId: "1:364821865365:web:29a23ec2b7b918d8be8c9c"
};
// Initialize Firebase & variables.
firebase.initializeApp(firebaseConfig);

//Här deklareras alla variablar.

let TheValue1;
let TheValue2;
let TheValue3;
let TheValue4;
let TheValue5;


//New DAte och d.getMinute används för att få ut minuter, och timmar
let d = new Date();

let Minute = d.getMinutes();
let hourSimon = d.getHours();
let hourHallon = d.getHours();
let hourTerraria = d.getHours();
let hourKlassrum = d.getHours();
let hourLars = d.getHours();

let hour = d.getHours();

//Här läggs till en timme på nuvarande timme för att firebase timmarna är I fel timezone 
hourSimon = hourSimon+1
hourHallon = hourHallon+1
hourTerraria = hourTerraria+1
hourKlassrum = hourKlassrum+1
hourLars = hourLars+1

//Här är den sämsta delen av hela koden. Kan inte ändra på grund att on() functionen hade stora problem att få in sig en Varibel av
//en for loop. Jag hade planerat hur vi skulle göra men tyvärr var det visst omöjligt /:  Jag frågade lisa och hon fattade inte heller. 
let dag = 7

let dagSimon = dag
let dagHallon = dag
let dagTerraria = dag
let dagKlassrum = dag
let dagLars = dag


let p = 0
let dat
let tim

let HumListSimon = [];
let HumListHallon = [];
let HumListTerraria = [];
let HumListKlassrum = [];
let HumListLars = [];
let HourList = [];

//Här sätts referatet till firebase databasen
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

//Lägger in nuvarande timme till timmen för 24 timmar sen I en 24 lång array.
for(let i=0; i<24;i++){
    HourList.push(hour);
    hour = hour-1;
    hour = otherDayCheck(hour);
}
//Bygger en array för Humidity value
//Görs en gång för varje graf/rum
for(let i=0; i<24;i++){
    var HumidityRef1 = db.ref("SimonsPlats/Dagar-" + dagSimon + "/Hour-" + hourSimon + "/Minute-0/Humidity");
    HumidityRef1.on("value", (Hum) => {
        let TheValue1 = Hum.val();
        HumListSimon.push(TheValue1)
    });

    hourSimon = hourSimon-1;
    dagSimon = otherDayChange(hourSimon,dagSimon);
    hourSimon = otherDayCheck(hourSimon);
    //Den letar efter minut 0 av timmen som är vald och pushar in det I humidity arrayen. 
    //Sedan ändras Timme och kanske dag. ifall det behövs.

}
for(let i=0; i<24;i++){
    var HumidityRef2 = db.ref("Hallonrummet/Dagar-" + dagHallon + "/Hour-" + hourHallon + "/Minute-0/Humidity");
    HumidityRef2.on("value", (Hum) => {
        let TheValue2 = Hum.val();
        HumListHallon.push(TheValue2)
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
        HumListLars.push(TheValue5)
        console.log(HumListLars)
    });

    hourLars = hourLars-1;
    dagLars = otherDayChange(hourLars,dagLars);
    hourLars = otherDayCheck(hourLars);

}

//Grafenrna
function HumsimPlats(){
HumidityRef1.once("value").then((snapshot) => {
anychart.onDocumentReady(function () {
//     När sidan är redo skickas alla värden från listan in i variabeln. Datan mappas till x:0 i div-taggen
    let simonsPlatsHum = anychart.data.set(getHumData1());

    let thermometerData1 = simonsPlatsHum.mapAs({ x: 0, value: 1 });

    let chart = anychart.line();
// Titlar
    chart.title('Luftfuktighet: Simons plats');

    chart.yAxis().title('Luftfuktighet (%)');

    chart.xAxis().title('Klockan:')
// Bestämmer vilken div datan skrivs in i, beskriver startposition och ritar ut
    chart.line(thermometerData1);

    chart.container('simPlats');

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
    
        chart.xAxis().title('Klockan:')
    
        chart.line(thermometerData2);
    
        chart.container('hallon');

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
        
            chart.xAxis().title('Klockan:')
        
            chart.line(thermometerData3);
        
            chart.container('terra');

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
            
                chart.title('Luftfuktighet: Biblioteket');
            
                chart.yAxis().title('Luftfuktighet (%)');
            
                chart.xAxis().title('Klockan:')
            
                chart.line(thermometerData4);
            
                chart.container('klassRum');

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
                
                    chart.title('Luftfuktighet: Lars arbetsplats');
                
                    chart.yAxis().title('Luftfuktighet (%)');
                
                    chart.xAxis().title('Klockan:')
                
                    chart.line(thermometerData5);
                
                    chart.container('Lars');

                    chart.draw();
                    });
                
                });
                }
// Listor (returnerar värden)
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

// Här på slutet körs graferna så att de kommet upp på hemsidan
HumsimPlats();
HumHallon();
HumTerraria();
HumKlassrum();
HumLars();



// All data från firebase komprimeras till "datarader" i en lokal array(Tillhörande Graf1).
// En rad ser ungefär ut som följande ex: "13614582".
// Varje "datarad" innehåller data om vilken mätstation mätningen togs av, vilken dag, vilken tid på dagen, samt vilket temperatur respektive fuktighet som observerades(med 1 decimal säkerhet).
// Anledningen att data till grafen inte hämtas direkt från firebase är för att inte behöva vänta på servrarna vilket tar lång tid.

var humvalue
var tempvalue
// Simonsplats
for(let i=20;i>=0;i--){
    for(let x=7; x>=0;x--){
    var TemperatureRef = db.ref("SimonsPlats/Dagar-" + i + "/Hour-" + x * 3 + "/Minute-5/Temperature");
    TemperatureRef.on("value", (tempa) => {
            tempvalue = Math.round((tempa.val() - 18) * 10)
            console.log(tempvalue);
            console.log("t:")
        })
    var HumidityRef = db.ref("SimonsPlats/Dagar-" + i + "/Hour-" + x * 3 + "/Minute-5/Humidity");
    HumidityRef.on("value", (huma) => {
            humvalue = Math.round((huma.val() - 16) * 10)
            console.log(humvalue);
            console.log("h:")
if (tempvalue != 0 && humvalue != 0){
    Datalista.push(10000000 + 100000 * i + 10000 * (x + 1) + 100 * tempvalue + humvalue)
    }})}
}

// Hallonrummet
for(let i=20;i>=0;i--){
    for(let x=7; x>=0;x--){
    var TemperatureRef = db.ref("Hallonrummet/Dagar-" + i + "/Hour-" + x * 3 + "/Minute-5/Temperature");
    TemperatureRef.on("value", (tempa) => {
            tempvalue = Math.round((tempa.val() - 18) * 10)
            console.log(tempvalue);
            console.log("t:")
        })
    var HumidityRef = db.ref("Hallonrummet/Dagar-" + i + "/Hour-" + x * 3 + "/Minute-5/Humidity");
    HumidityRef.on("value", (huma) => {
            humvalue = Math.round((huma.val() - 16) * 10)
            console.log(humvalue);
            console.log("h:")
if (tempvalue != 0 && humvalue != 0){
    Datalista.push(20000000 + 100000 * i + 10000 * (x + 1) + 100 * tempvalue + humvalue)
    }})}
}
// Terrariet
for(let i=20;i>=0;i--){
    for(let x=7; x>=0;x--){
    var TemperatureRef = db.ref("Terrariet/Dagar-" + i + "/Hour-" + x * 3 + "/Minute-5/Temperature");
    TemperatureRef.on("value", (tempa) => {
            tempvalue = Math.round((tempa.val() - 18) * 10)
            console.log(tempvalue);
            console.log("t:")
        })
    var HumidityRef = db.ref("Terrariet/Dagar-" + i + "/Hour-" + x * 3 + "/Minute-5/Humidity");
    HumidityRef.on("value", (huma) => {
            humvalue = Math.round((huma.val() - 16) * 10)
            console.log(humvalue);
            console.log("h:")
if (tempvalue != 0 && humvalue != 0){
    Datalista.push(30000000 + 100000 * i + 10000 * (x + 1) + 100 * tempvalue + humvalue)
    }})}
}
// Klassrummmet
for(let i=20;i>=0;i--){
    for(let x=7; x>=0;x--){
    var TemperatureRef = db.ref("Klassrum/Dagar-" + i + "/Hour-" + x * 3 + "/Minute-5/Temperature");
    TemperatureRef.on("value", (tempa) => {
            tempvalue = Math.round((tempa.val() - 18) * 10)
            console.log(tempvalue);
            console.log("t:")
        })
    var HumidityRef = db.ref("Klassrum/Dagar-" + i + "/Hour-" + x * 3 + "/Minute-5/Humidity");
    HumidityRef.on("value", (huma) => {
            humvalue = Math.round((huma.val() - 16) * 10)
            console.log(humvalue);
            console.log("h:")
if (tempvalue != 0 && humvalue != 0){
    Datalista.push(40000000 + 100000 * i + 10000 * (x + 1) + 100 * tempvalue + humvalue)
    }})}
}
// Larsplats
for(let i=20;i>=0;i--){
    for(let x=7; x>=0;x--){
    var TemperatureRef = db.ref("Lars/Dagar-" + i + "/Hour-" + x * 3 + "/Minute-5/Temperature");
    TemperatureRef.on("value", (tempa) => {
            tempvalue = Math.round((tempa.val() - 18) * 10)
            console.log(tempvalue);
            console.log("t:")
        })
    var HumidityRef = db.ref("Lars/Dagar-" + i + "/Hour-" + x * 3 + "/Minute-5/Humidity");
    HumidityRef.on("value", (huma) => {
            humvalue = Math.round((huma.val() - 16) * 10)
            console.log(humvalue);
            console.log("h:")
if (tempvalue != 0 && humvalue != 0){
    Datalista.push(50000000 + 100000 * i + 10000 * (x + 1) + 100 * tempvalue + humvalue)
    }})}
}
