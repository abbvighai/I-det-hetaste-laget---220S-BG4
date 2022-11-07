
// Deklarering av ALLA globala variabler
var Valtdatum = 1// 1 - 99
var Valtmode = 1// 1, 2
var Valdstation = 1// 1, 2, 3, 4, 5

var Datalista = new Array()
var Listavgtemps = new Array()
var Listavghums = new Array()

var Kolumn1genomsnittTemp = 0
var Kolumn2genomsnittTemp = 0
var Kolumn3genomsnittTemp = 0
var Kolumn4genomsnittTemp = 0
var Kolumn5genomsnittTemp = 0
var Kolumn6genomsnittTemp = 0
var Kolumn7genomsnittTemp = 0
var Kolumn8genomsnittTemp = 0

var Kolumn1genomsnittTempoutput = 0
var Kolumn2genomsnittTempoutput = 0
var Kolumn3genomsnittTempoutput = 0
var Kolumn4genomsnittTempoutput = 0
var Kolumn5genomsnittTempoutput = 0
var Kolumn6genomsnittTempoutput = 0
var Kolumn7genomsnittTempoutput = 0
var Kolumn8genomsnittTempoutput = 0

var Kolumn1genomsnittcounterTemp = 0
var Kolumn2genomsnittcounterTemp = 0
var Kolumn3genomsnittcounterTemp = 0
var Kolumn4genomsnittcounterTemp = 0
var Kolumn5genomsnittcounterTemp = 0
var Kolumn6genomsnittcounterTemp = 0
var Kolumn7genomsnittcounterTemp = 0
var Kolumn8genomsnittcounterTemp = 0

var Kolumn1genomsnittHum = 0
var Kolumn2genomsnittHum = 0
var Kolumn3genomsnittHum = 0
var Kolumn4genomsnittHum = 0
var Kolumn5genomsnittHum = 0
var Kolumn6genomsnittHum = 0
var Kolumn7genomsnittHum = 0
var Kolumn8genomsnittHum = 0

var Kolumn1genomsnittHumoutput = 0
var Kolumn2genomsnittHumoutput = 0
var Kolumn3genomsnittHumoutput = 0
var Kolumn4genomsnittHumoutput = 0
var Kolumn5genomsnittHumoutput = 0
var Kolumn6genomsnittHumoutput = 0
var Kolumn7genomsnittHumoutput = 0
var Kolumn8genomsnittHumoutput = 0


var Kolumn1genomsnittcounterHum = 0
var Kolumn2genomsnittcounterHum = 0
var Kolumn3genomsnittcounterHum = 0
var Kolumn4genomsnittcounterHum = 0
var Kolumn5genomsnittcounterHum = 0
var Kolumn6genomsnittcounterHum = 0
var Kolumn7genomsnittcounterHum = 0
var Kolumn8genomsnittcounterHum = 0

var Temprekordhögoutput = 0
var Humrekordhögoutput = 0
var Temprekordlågoutput = 100
var Humrekordlågoutput = 100

var Kolumn1order
var Kolumn2order
var Kolumn3order
var Kolumn4order
var Kolumn5order
var Kolumn6order
var Kolumn7order
var Kolumn8order

var Kolumn1output
var Kolumn2output
var Kolumn3output
var Kolumn4output
var Kolumn5output
var Kolumn6output
var Kolumn7output
var Kolumn8output

var Mellan1Kolumn12
var Mellan2Kolumn12
var Mellan3Kolumn12
var Mellan1Kolumn23
var Mellan2Kolumn23
var Mellan3Kolumn23
var Mellan1Kolumn34
var Mellan2Kolumn34
var Mellan3Kolumn34
var Mellan1Kolumn45
var Mellan2Kolumn45
var Mellan3Kolumn45
var Mellan1Kolumn56
var Mellan2Kolumn56
var Mellan3Kolumn56
var Mellan1Kolumn67
var Mellan2Kolumn67
var Mellan3Kolumn67
var Mellan1Kolumn78
var Mellan2Kolumn78
var Mellan3Kolumn78

var Grafbotten
var Graftopp

var LängdDatalista

var Övermedel



  // Start av primär funktion
function Refreshgraph() {
    
      Valdstation = document.getElementById("hej").value

      Valtmode = document.getElementById("hejj").value
      
      Valtdatum = document.getElementById("hejjj").value
// Ovan ska ersättas med input av Firebase
LängdDatalista = (Datalista.length)

// Nollställer datavärden inför beräkningar
Kolumn1order = 0
Kolumn2order = 0
Kolumn3order = 0
Kolumn4order = 0
Kolumn5order = 0
Kolumn6order = 0
Kolumn7order = 0
Kolumn8order = 0

Kolumn1output = 0
Kolumn2output = 0
Kolumn3output = 0
Kolumn4output = 0
Kolumn5output = 0
Kolumn6output = 0
Kolumn7output = 0
Kolumn8output = 0

Mellan1Kolumn12 = 0
Mellan2Kolumn12 = 0
Mellan3Kolumn12 = 0
Mellan1Kolumn23 = 0
Mellan2Kolumn23 = 0
Mellan3Kolumn23 = 0
Mellan1Kolumn34 = 0
Mellan2Kolumn34 = 0
Mellan3Kolumn34 = 0
Mellan1Kolumn45 = 0
Mellan2Kolumn45 = 0
Mellan3Kolumn45 = 0
Mellan1Kolumn56 = 0
Mellan2Kolumn56 = 0
Mellan3Kolumn56 = 0
Mellan1Kolumn67 = 0
Mellan2Kolumn67 = 0
Mellan3Kolumn67 = 0
Mellan1Kolumn78 = 0
Mellan2Kolumn78 = 0
Mellan3Kolumn78 = 0

Grafbotten = 100
Graftopp = 0

// Går igenom varje datarad och filtrera bort alla som inte är relevanta för grafen(matchar EJ Valdstation, Valtmode eller Tidsram)
for (let i = Datalista.length; i > 0; i--) {
if(((((Datalista[i]) % 1000000000) - (Datalista[i] % 10000000))/10000000) == Valdstation && (((((Datalista[i]) % 10000000) - (Datalista[i] % 100000))/100000) == Valtdatum)){

if(Valtmode == 1) {

   
// Beräkna Grafbotten
if((((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100 < Grafbotten){

Grafbotten = (((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100

}
// Beräkna Graftopp
if((((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100 > Graftopp){

Graftopp = (((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100

}
// Tilldela datarad till rätt tidpunkt(1-8)
switch(((((Datalista[i]) % 100000) - (Datalista[i] % 10000))/10000)){
        case 1:

        Kolumn1order = (((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100
        break
        case 2:

        Kolumn2order = (((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100
        break
        case 3:

        Kolumn3order = (((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100
        break
        case 4:

        Kolumn4order = (((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100
        break
        case 5:

        Kolumn5order = (((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100
        break
        case 6:

        Kolumn6order = (((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100
        break
        case 7:

        Kolumn7order = (((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100
        break
        case 8:

        Kolumn8order = (((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100
        break

default:
    // Error - Devsyfte
    console.log("errortempswitchnocasefound")
   
}}

// Samma fast för Valtmode = 2 (hum) SKIPPA TILL "HIT"
  if(Valtmode == 2){

if((((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1 < Grafbotten){

Grafbotten = (((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1

}

if((((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1 > Graftopp){

Graftopp = (((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1

}

    switch((((Datalista[i]) % 100000) - (Datalista[i] % 10000))/10000){
        case 1:  
        Kolumn1order = (((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1
        break
        case 2:  
        Kolumn2order = (((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1
        break
        case 3:  
        Kolumn3order = (((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1
        break
        case 4:  
        Kolumn4order = (((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1
        break
        case 5:  
        Kolumn5order = (((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1
        break
        case 6:  
        Kolumn6order = (((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1
        break
        case 7:  
        Kolumn7order = (((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1
        break
        case 8:  
        Kolumn8order = (((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1
        break  
default:
      // Error - Devsyfte
    console.log("errortempswitchnocasefound")
break
}}}}
// HIT

// Log - Devsyfte
console.log("Columndatadistributioncomplete")

// "Medel" står på plats 6 i listan över mätplatser. Om "Medel"-alternativet är valt görs den nedre koden ISTÄLLET för ALLT ovan som tillhör funktionen "Refreshgraph"
if(Valdstation == 6){
    // (temp)
      if(Valtmode == 1){
      // Ge medelvärden till grafen
      Kolumn1order = Kolumn1genomsnittTempoutput
      Kolumn2order = Kolumn2genomsnittTempoutput
      Kolumn3order = Kolumn3genomsnittTempoutput
      Kolumn4order = Kolumn4genomsnittTempoutput
      Kolumn5order = Kolumn5genomsnittTempoutput
      Kolumn6order = Kolumn6genomsnittTempoutput
      Kolumn7order = Kolumn7genomsnittTempoutput
      Kolumn8order = Kolumn8genomsnittTempoutput
      // Bestäm graftopp & grafbotten
      Listavgtemps = [Kolumn1genomsnittTempoutput, Kolumn2genomsnittTempoutput, Kolumn3genomsnittTempoutput, Kolumn4genomsnittTempoutput, Kolumn5genomsnittTempoutput, Kolumn6genomsnittTempoutput, Kolumn7genomsnittTempoutput, Kolumn8genomsnittTempoutput]
      
      for (let i = Listavgtemps.length; i > 0; i--){
      
      if(Listavgtemps[i] < Grafbotten){
         Grafbotten = Listavgtemps[i]
      }
      if(Listavgtemps[i] > Graftopp){
         Graftopp = Listavgtemps[i]
      }
      }
      }
      // Samma fast för Valtmode == 2(hum) SKIPPA TILL "HIT"
      if(Valtmode == 2){
      
      Kolumn1order = Kolumn1genomsnittHumoutput
      Kolumn2order = Kolumn2genomsnittHumoutput
      Kolumn3order = Kolumn3genomsnittHumoutput
      Kolumn4order = Kolumn4genomsnittHumoutput
      Kolumn5order = Kolumn5genomsnittHumoutput
      Kolumn6order = Kolumn6genomsnittHumoutput
      Kolumn7order = Kolumn7genomsnittHumoutput
      Kolumn8order = Kolumn8genomsnittHumoutput
      
      Listavghums = [Kolumn1genomsnittHumoutput, Kolumn2genomsnittHumoutput, Kolumn3genomsnittHumoutput, Kolumn4genomsnittHumoutput, Kolumn5genomsnittHumoutput, Kolumn6genomsnittHumoutput, Kolumn7genomsnittHumoutput, Kolumn8genomsnittHumoutput]
      
      for (let i = Listavghums.length; i > 0; i--){
      if(Listavghums[i] < Grafbotten){
         Grafbotten = Listavghums[i]
      }
      if(Listavghums[i] > Graftopp){
         Graftopp = Listavghums[i]
      }
      }
      }
      }
      // HIT

// Repeterad operator för att omvandla Temp/hum till grafposition. (Ex: 30celcius - Y-posotion 4 i grafkolumn)
Kolumn1output = Math.floor(((Kolumn1order - Grafbotten) / (Graftopp - Grafbotten)) * 9.99)
Kolumn2output = Math.floor(((Kolumn2order - Grafbotten) / (Graftopp - Grafbotten)) * 9.99)
Kolumn3output = Math.floor(((Kolumn3order - Grafbotten) / (Graftopp - Grafbotten)) * 9.99)
Kolumn4output = Math.floor(((Kolumn4order - Grafbotten) / (Graftopp - Grafbotten)) * 9.99)
Kolumn5output = Math.floor(((Kolumn5order - Grafbotten) / (Graftopp - Grafbotten)) * 9.99)
Kolumn6output = Math.floor(((Kolumn6order - Grafbotten) / (Graftopp - Grafbotten)) * 9.99)
Kolumn7output = Math.floor(((Kolumn7order - Grafbotten) / (Graftopp - Grafbotten)) * 9.99)
Kolumn8output = Math.floor(((Kolumn8order - Grafbotten) / (Graftopp - Grafbotten)) * 9.99)

// Positioner för "stödkolumner" som syns mellan mätvärden i grafen
Mellan1Kolumn12 = Math.round(Kolumn1output - ((Kolumn1output - Kolumn2output) * 0.25))
Mellan2Kolumn12 = Math.round(Kolumn1output - ((Kolumn1output - Kolumn2output) * 0.5))
Mellan3Kolumn12 = Math.round(Kolumn1output - ((Kolumn1output - Kolumn2output) * 0.75))

Mellan1Kolumn23 = Math.round(Kolumn2output - ((Kolumn2output - Kolumn3output) * 0.25))
Mellan2Kolumn23 = Math.round(Kolumn2output - ((Kolumn2output - Kolumn3output) * 0.5))
Mellan3Kolumn23 = Math.round(Kolumn2output - ((Kolumn2output - Kolumn3output) * 0.75))

Mellan1Kolumn34 = Math.round(Kolumn3output - ((Kolumn3output - Kolumn4output) * 0.25))
Mellan2Kolumn34 = Math.round(Kolumn3output - ((Kolumn3output - Kolumn4output) * 0.5))
Mellan3Kolumn34 = Math.round(Kolumn3output - ((Kolumn3output - Kolumn4output) * 0.75))

Mellan1Kolumn45 = Math.round(Kolumn4output - ((Kolumn4output - Kolumn5output) * 0.25))
Mellan2Kolumn45 = Math.round(Kolumn4output - ((Kolumn4output - Kolumn5output) * 0.5))
Mellan3Kolumn45 = Math.round(Kolumn4output - ((Kolumn4output - Kolumn5output) * 0.75))

Mellan1Kolumn56 = Math.round(Kolumn5output - ((Kolumn5output - Kolumn6output) * 0.25))
Mellan2Kolumn56 = Math.round(Kolumn5output - ((Kolumn5output - Kolumn6output) * 0.5))
Mellan3Kolumn56 = Math.round(Kolumn5output - ((Kolumn5output - Kolumn6output) * 0.75))

Mellan1Kolumn67 = Math.round(Kolumn6output - ((Kolumn6output - Kolumn7output) * 0.25))
Mellan2Kolumn67 = Math.round(Kolumn6output - ((Kolumn6output - Kolumn7output) * 0.5))
Mellan3Kolumn67 = Math.round(Kolumn6output - ((Kolumn6output - Kolumn7output) * 0.75))

Mellan1Kolumn78 = Math.round(Kolumn7output - ((Kolumn7output - Kolumn8output) * 0.25))
Mellan2Kolumn78 = Math.round(Kolumn7output - ((Kolumn7output - Kolumn8output) * 0.5))
Mellan3Kolumn78 = Math.round(Kolumn7output - ((Kolumn7output - Kolumn8output) * 0.75))
console.log("Graphfunctioncomplete")

// Överför data till CSS(i form av strings). (Ex Class(boxP + (5)) = Class boxp5)
  document.getElementById("boxtarget1").setAttribute("class", "boxP" + (Kolumn1output + 1).toString())
  document.getElementById("boxtarget2").setAttribute("class", "boxP" + (Kolumn2output+ 1).toString())
  document.getElementById("boxtarget3").setAttribute("class", "boxP" + (Kolumn3output+ 1).toString())
  document.getElementById("boxtarget4").setAttribute("class", "boxP" + (Kolumn4output+ 1).toString())
  document.getElementById("boxtarget5").setAttribute("class", "boxP" + (Kolumn5output+ 1).toString())
  document.getElementById("boxtarget6").setAttribute("class", "boxP" + (Kolumn6output+ 1).toString())
  document.getElementById("boxtarget7").setAttribute("class", "boxP" + (Kolumn7output+ 1).toString())
  document.getElementById("boxtarget8").setAttribute("class", "boxP" +( Kolumn8output+ 1).toString())
  document.getElementById("boxtarget12-M1").setAttribute("class", "boxP" + (Mellan1Kolumn12+ 1).toString())
  document.getElementById("boxtarget12-M2").setAttribute("class", "boxP" + (Mellan2Kolumn12+ 1).toString())
  document.getElementById("boxtarget12-M3").setAttribute("class", "boxP" + (Mellan3Kolumn12+ 1).toString())
  document.getElementById("boxtarget23-M1").setAttribute("class", "boxP" + (Mellan1Kolumn23+ 1).toString())
  document.getElementById("boxtarget23-M2").setAttribute("class", "boxP" + (Mellan2Kolumn23+ 1).toString())
  document.getElementById("boxtarget23-M3").setAttribute("class", "boxP" + (Mellan3Kolumn23+ 1).toString())
  document.getElementById("boxtarget34-M1").setAttribute("class", "boxP" + (Mellan1Kolumn34+ 1).toString())
  document.getElementById("boxtarget34-M2").setAttribute("class", "boxP" + (Mellan2Kolumn34+ 1).toString())
  document.getElementById("boxtarget34-M3").setAttribute("class", "boxP" + (Mellan3Kolumn34+ 1).toString())
  document.getElementById("boxtarget45-M1").setAttribute("class", "boxP" + (Mellan1Kolumn45+ 1).toString())
  document.getElementById("boxtarget45-M2").setAttribute("class", "boxP" + (Mellan2Kolumn45+ 1).toString())
  document.getElementById("boxtarget45-M3").setAttribute("class", "boxP" + (Mellan3Kolumn45+ 1).toString())
  document.getElementById("boxtarget56-M1").setAttribute("class", "boxP" + (Mellan1Kolumn56+ 1).toString())
  document.getElementById("boxtarget56-M2").setAttribute("class", "boxP" + (Mellan2Kolumn56+ 1).toString())
  document.getElementById("boxtarget56-M3").setAttribute("class", "boxP" + (Mellan3Kolumn56+ 1).toString())
  document.getElementById("boxtarget67-M1").setAttribute("class", "boxP" + (Mellan1Kolumn67+ 1).toString())
  document.getElementById("boxtarget67-M2").setAttribute("class", "boxP" + (Mellan2Kolumn67+ 1).toString())
  document.getElementById("boxtarget67-M3").setAttribute("class", "boxP" + (Mellan3Kolumn67+ 1).toString())
  document.getElementById("boxtarget78-M1").setAttribute("class", "boxP" + (Mellan1Kolumn78+ 1).toString())
  document.getElementById("boxtarget78-M2").setAttribute("class", "boxP" + (Mellan2Kolumn78+ 1).toString())
  document.getElementById("boxtarget78-M3").setAttribute("class", "boxP" + (Mellan3Kolumn78+ 1).toString())

if(Valtmode == 1){
document.getElementById("Nummer1").innerHTML = "Högsta temperatur: " + (Graftopp/10 + 18) + "°C"
document.getElementById("Nummer10").innerHTML = "Lägsta temperatur: " + (Grafbotten/10 + 18) + "°C"
}else{
      document.getElementById("Nummer1").innerHTML = "Högsta fuktighet: " + (Graftopp/10 + 16) + "%"
      document.getElementById("Nummer10").innerHTML = "Lägsta fuktighet: " + (Grafbotten/10 + 16) + "%"
}

for (let i = Datalista.length; i > 0; i--) {
      //temp:
        if((((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100 < Temprekordlågoutput) {
            Temprekordlågoutput = (((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100
        }
        else {
        if((((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100 > Temprekordhögoutput) {
            Temprekordhögoutput = (((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100
        }
        }
      
      //hum:
        if((((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1 < Humrekordlågoutput) {
            Humrekordlågoutput = (((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1
        }
        else {
        if((((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1 > Humrekordhögoutput){
            Humrekordhögoutput = (((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1
      }}}
      console.log("temphumrecordvaluedefinitioncomplete")
      // Log - Devsyfte
      
      // Gå igenom hela listan av datarader för att beräkna medelvärden över alla (mättillfällen / tidperspektiv), för både Valtmode = 1(temp) och Valtmode = 2(hum). Alltså t.ex snitttemperaturen klockan 09:00 mellan alla dagar.
      for (let i = Datalista.length; i > 0; i--) {
        switch((((Datalista[i]) % 100000) - (Datalista[i] % 10000))/10000){
      
            case 1:
            Kolumn1genomsnittTemp = Kolumn1genomsnittTemp + ((((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100)
      Kolumn1genomsnittHum = Kolumn1genomsnittHum + ((((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1)
      Kolumn1genomsnittcounterTemp++
      Kolumn1genomsnittcounterHum++
      
            break
            case 2:
            Kolumn2genomsnittTemp = Kolumn2genomsnittTemp + ((((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100)
      Kolumn2genomsnittHum = Kolumn2genomsnittHum + ((((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1)
      Kolumn2genomsnittcounterTemp++
      Kolumn2genomsnittcounterHum++
      
            break
            case 3:
            Kolumn3genomsnittTemp = Kolumn3genomsnittTemp + ((((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100)
      Kolumn3genomsnittHum = Kolumn3genomsnittHum + ((((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1)
      Kolumn3genomsnittcounterTemp++
      Kolumn3genomsnittcounterHum++
      
            break
            case 4:
            Kolumn4genomsnittTemp = Kolumn4genomsnittTemp + ((((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100)
      Kolumn4genomsnittHum = Kolumn4genomsnittHum + ((((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1)
      Kolumn4genomsnittcounterTemp++
      Kolumn4genomsnittcounterHum++
      
            break
            case 5:
            Kolumn5genomsnittTemp = Kolumn5genomsnittTemp + ((((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100)
      Kolumn5genomsnittHum = Kolumn5genomsnittHum + ((((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1)
      Kolumn5genomsnittcounterTemp++
      Kolumn5genomsnittcounterHum++
      
            break
            case 6:
            Kolumn6genomsnittTemp = Kolumn6genomsnittTemp + ((((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100)
      Kolumn6genomsnittHum = Kolumn6genomsnittHum + ((((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1)
      Kolumn6genomsnittcounterTemp++
      Kolumn6genomsnittcounterHum++
      
            break
            case 7:
            Kolumn7genomsnittTemp = Kolumn7genomsnittTemp + ((((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100)
      Kolumn7genomsnittHum = Kolumn7genomsnittHum + ((((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1)
      Kolumn7genomsnittcounterTemp++
      Kolumn7genomsnittcounterHum++
      
            break
            case 8:
            Kolumn8genomsnittTemp = Kolumn8genomsnittTemp + ((((Datalista[i]) % 10000) - ((Datalista[i]) % 100))/100)
      Kolumn8genomsnittHum = Kolumn8genomsnittHum + ((((Datalista[i]) % 100) - ((Datalista[i]) % 1))/1)
      Kolumn8genomsnittcounterTemp++
      Kolumn8genomsnittcounterHum++
      
            break
            default:
              console.log("erroravgvaluecalcnocasefound")
                break
      }}
      // Slutgiltig beräkning(tillhör övre stycke kod)
      Kolumn1genomsnittTempoutput = Math.round(Kolumn1genomsnittTemp / Kolumn1genomsnittcounterTemp)
      Kolumn2genomsnittTempoutput = Math.round(Kolumn2genomsnittTemp / Kolumn2genomsnittcounterTemp)
      Kolumn3genomsnittTempoutput = Math.round(Kolumn3genomsnittTemp / Kolumn3genomsnittcounterTemp)
      Kolumn4genomsnittTempoutput = Math.round(Kolumn4genomsnittTemp / Kolumn4genomsnittcounterTemp)
      Kolumn5genomsnittTempoutput = Math.round(Kolumn5genomsnittTemp / Kolumn5genomsnittcounterTemp)
      Kolumn6genomsnittTempoutput = Math.round(Kolumn6genomsnittTemp / Kolumn6genomsnittcounterTemp)
      Kolumn7genomsnittTempoutput = Math.round(Kolumn7genomsnittTemp / Kolumn7genomsnittcounterTemp)
      Kolumn8genomsnittTempoutput = Math.round(Kolumn8genomsnittTemp / Kolumn8genomsnittcounterTemp)
      
      Kolumn1genomsnittHumoutput = Math.round(Kolumn1genomsnittHum / Kolumn1genomsnittcounterHum)
      Kolumn2genomsnittHumoutput = Math.round(Kolumn2genomsnittHum / Kolumn2genomsnittcounterHum)
      Kolumn3genomsnittHumoutput = Math.round(Kolumn3genomsnittHum / Kolumn3genomsnittcounterHum)
      Kolumn4genomsnittHumoutput = Math.round(Kolumn4genomsnittHum / Kolumn4genomsnittcounterHum)
      Kolumn5genomsnittHumoutput = Math.round(Kolumn5genomsnittHum / Kolumn5genomsnittcounterHum)
      Kolumn6genomsnittHumoutput = Math.round(Kolumn6genomsnittHum / Kolumn6genomsnittcounterHum)
      Kolumn7genomsnittHumoutput = Math.round(Kolumn7genomsnittHum / Kolumn7genomsnittcounterHum)
      Kolumn8genomsnittHumoutput = Math.round(Kolumn8genomsnittHum / Kolumn8genomsnittcounterHum)



  }
// !!! Slutet av primär funktion. Allt nedan behöver bara beräknas vid öppning av websida. Detta för anledningen att utföra mindre mängder kod.


 


// Log för alla frekvent använda variabler, inputs och outputs från funktionen - Devsyfte
console.log("Startvaluediagnostic")


console.log("värdemängd")

console.log(Graftopp)
console.log(Grafbotten)

console.log("värderekord(temp, hum)")

console.log(Temprekordhögoutput)
console.log(Temprekordlågoutput)
console.log(Humrekordhögoutput)
console.log(Humrekordlågoutput)

console.log("kolumnorder(värde)")

console.log(Kolumn1order)
console.log(Kolumn2order)
console.log(Kolumn3order)
console.log(Kolumn4order)
console.log(Kolumn5order)
console.log(Kolumn6order)
console.log(Kolumn7order)
console.log(Kolumn8order)

console.log("kolumnoutput")

console.log(Kolumn1output)
console.log(Kolumn2output)
console.log(Kolumn3output)
console.log(Kolumn4output)
console.log(Kolumn5output)
console.log(Kolumn6output)
console.log(Kolumn7output)
console.log(Kolumn8output)

console.log("Mellankolumner i trepar")

console.log(Mellan1Kolumn12)
console.log(Mellan2Kolumn12)
console.log(Mellan3Kolumn12)
console.log(Mellan1Kolumn23)
console.log(Mellan2Kolumn23)
console.log(Mellan3Kolumn23)
console.log(Mellan1Kolumn34)
console.log(Mellan2Kolumn34)
console.log(Mellan3Kolumn34)
console.log(Mellan1Kolumn45)
console.log(Mellan2Kolumn45)
console.log(Mellan3Kolumn45)
console.log(Mellan1Kolumn56)
console.log(Mellan2Kolumn56)
console.log(Mellan3Kolumn56)
console.log(Mellan1Kolumn67)
console.log(Mellan2Kolumn67)
console.log(Mellan3Kolumn67)
console.log(Mellan1Kolumn78)
console.log(Mellan2Kolumn78)
console.log(Mellan3Kolumn78)

console.log("Genomsnitt temp, hum")

console.log(Kolumn1genomsnittTempoutput)
console.log(Kolumn2genomsnittTempoutput)
console.log(Kolumn3genomsnittTempoutput)
console.log(Kolumn4genomsnittTempoutput)
console.log(Kolumn5genomsnittTempoutput)
console.log(Kolumn6genomsnittTempoutput)
console.log(Kolumn7genomsnittTempoutput)
console.log(Kolumn8genomsnittTempoutput)

console.log(Kolumn1genomsnittHumoutput)
console.log(Kolumn2genomsnittHumoutput)
console.log(Kolumn3genomsnittHumoutput)
console.log(Kolumn4genomsnittHumoutput)
console.log(Kolumn5genomsnittHumoutput)
console.log(Kolumn6genomsnittHumoutput)
console.log(Kolumn7genomsnittHumoutput)
console.log(Kolumn8genomsnittHumoutput)

console.log("Längddatalista")

console.log(LängdDatalista)

console.log("Endvaluediagnostic")

// Större/mindre än genomsnitt för vald tidpunkt / tidsperspektiv

function b1(){
// temp/hum
if(Valtmode == 1){
document.getElementById("Nummer8").innerHTML = "Temperatur: " + (Kolumn1order / 10 + 18) + "°C"

if(Kolumn1order == Kolumn1genomsnittTempoutput){
      document.getElementById("Nummer2").innerHTML = "---"
}
     else if(Kolumn1order > 1.15 * Kolumn1genomsnittTempoutput){
// Långt över medel
document.getElementById("Nummer2").innerHTML = "Varmt till jämförelse"}

      else if(Kolumn1order > Kolumn1genomsnittTempoutput){
// Lite över medel
document.getElementById("Nummer2").innerHTML = "Lite varmt till jämförelse"}
      else if(Kolumn1order < 0.85 * Kolumn1genomsnittTempoutput){
// Långt under medel
document.getElementById("Nummer2").innerHTML = "Kyligt till jämförelse"}
      else{
// Lite under medel
document.getElementById("Nummer2").innerHTML = "Lite kyligt till jämförelse"}}
                        else{
                  document.getElementById("Nummer8").innerHTML = "Fuktighet: " + (Kolumn1order/10 + 16) + "%"
                  
                  if(Kolumn1order == Kolumn1genomsnittHumoutput){
                        document.getElementById("Nummer2").innerHTML = "---"
                  }
                       else if(Kolumn1order > 1.15 * Kolumn1genomsnittHumoutput){
                  // Långt över medel
                  document.getElementById("Nummer2").innerHTML = "Hög fuktighet"}
                        else if(Kolumn1order > Kolumn1genomsnittHumoutput){
                  // Lite över medel
                  document.getElementById("Nummer2").innerHTML = "Lite högre fuktighet"}
                        else if(Kolumn1order < 0.85 * Kolumn1genomsnittHumoutput){
                  // Långt under medel
                  document.getElementById("Nummer2").innerHTML = "Låg fuktighet"}
                        else{
                  // Lite under medel
                  document.getElementById("Nummer2").innerHTML = "Lite lägre fuktighet"}}}

function b2(){
// temp/hum
if(Valtmode == 1){
document.getElementById("Nummer8").innerHTML = "Temperatur: " + (Kolumn2order / 10 + 18) + "°C"


if(Kolumn2order == Kolumn2genomsnittTempoutput){
      document.getElementById("Nummer2").innerHTML = "---"
}
     else if(Kolumn2order > 1.15 * Kolumn2genomsnittTempoutput){
// Långt över medel
document.getElementById("Nummer2").innerHTML = "Varmt till jämförelse"}

      else if(Kolumn2order > Kolumn2genomsnittTempoutput){
// Lite över medel
document.getElementById("Nummer2").innerHTML = "Lite varmt till jämförelse"}
      else if(Kolumn2order < 0.85 * Kolumn2genomsnittTempoutput){
// Långt under medel
document.getElementById("Nummer2").innerHTML = "Kyligt till jämförelse"}
      else{
// Lite under medel
document.getElementById("Nummer2").innerHTML = "Lite kyligt till jämförelse"}}
                        else{
                  document.getElementById("Nummer8").innerHTML = "Fuktighet: " + (Kolumn2order/10 + 16) + "%"
                  
                  if(Kolumn2order == Kolumn2genomsnittHumoutput){
                        document.getElementById("Nummer2").innerHTML = "---"
                  }
                       else if(Kolumn2order > 1.15 * Kolumn2genomsnittHumoutput){
                  // Långt över medel
                  document.getElementById("Nummer2").innerHTML = "Hög fuktighet"}
                        else if(Kolumn2order > Kolumn2genomsnittHumoutput){
                  // Lite över medel
                  document.getElementById("Nummer2").innerHTML = "Lite högre fuktighet"}
                        else if(Kolumn2order < 0.85 * Kolumn2genomsnittHumoutput){
                  // Långt under medel
                  document.getElementById("Nummer2").innerHTML = "Låg fuktighet"}
                        else{
                  // Lite under medel
                  document.getElementById("Nummer2").innerHTML = "Lite lägre fuktighet"}}}






function b3(){
// temp/hum
if(Valtmode == 1){
document.getElementById("Nummer8").innerHTML = "Temperatur: " + (Kolumn3order / 10 + 18) + "°C"


if(Kolumn3order == Kolumn3genomsnittTempoutput){
      document.getElementById("Nummer2").innerHTML = "---"
}
     else if(Kolumn3order > 1.15 * Kolumn3genomsnittTempoutput){
// Långt över medel
document.getElementById("Nummer2").innerHTML = "Varmt till jämförelse"}

      else if(Kolumn3order > Kolumn3genomsnittTempoutput){
// Lite över medel
document.getElementById("Nummer2").innerHTML = "Lite varmt till jämförelse"}
      else if(Kolumn3order < 0.85 * Kolumn3genomsnittTempoutput){
// Långt under medel
document.getElementById("Nummer2").innerHTML = "Kyligt till jämförelse"}
      else{
// Lite under medel
document.getElementById("Nummer2").innerHTML = "Lite kyligt till jämförelse"}}
                        else{
                  document.getElementById("Nummer8").innerHTML = "Fuktighet: " + (Kolumn3order/10 + 16) + "%"
                  
                  if(Kolumn3order == Kolumn3genomsnittHumoutput){
                        document.getElementById("Nummer2").innerHTML = "---"
                  }
                       else if(Kolumn3order > 1.15 * Kolumn3genomsnittHumoutput){
                  // Långt över medel
                  document.getElementById("Nummer2").innerHTML = "Hög fuktighet"}
                        else if(Kolumn3order > Kolumn3genomsnittHumoutput){
                  // Lite över medel
                  document.getElementById("Nummer2").innerHTML = "Lite högre fuktighet"}
                        else if(Kolumn3order < 0.85 * Kolumn3genomsnittHumoutput){
                  // Långt under medel
                  document.getElementById("Nummer2").innerHTML = "Låg fuktighet"}
                        else{
                  // Lite under medel
                  document.getElementById("Nummer2").innerHTML = "Lite lägre fuktighet"}}}

                  function b4(){
// temp/hum
if(Valtmode == 1){
document.getElementById("Nummer8").innerHTML = "Temperatur: " + (Kolumn4order / 10 + 18) + "°C"


if(Kolumn4order == Kolumn4genomsnittTempoutput){
      document.getElementById("Nummer2").innerHTML = "---"
}
     else if(Kolumn4order > 1.15 * Kolumn4genomsnittTempoutput){
// Långt över medel
document.getElementById("Nummer2").innerHTML = "Varmt till jämförelse"}

      else if(Kolumn4order > Kolumn4genomsnittTempoutput){
// Lite över medel
document.getElementById("Nummer2").innerHTML = "Lite varmt till jämförelse"}
      else if(Kolumn4order < 0.85 * Kolumn4genomsnittTempoutput){
// Långt under medel
document.getElementById("Nummer2").innerHTML = "Kyligt till jämförelse"}
      else{
// Lite under medel
document.getElementById("Nummer2").innerHTML = "Lite kyligt till jämförelse"}}
                        else{
                  document.getElementById("Nummer8").innerHTML = "Fuktighet: " + (Kolumn4order/10 + 16) + "%"
                  
                  if(Kolumn4order == Kolumn4genomsnittHumoutput){
                        document.getElementById("Nummer2").innerHTML = "---"
                  }
                       else if(Kolumn4order > 1.15 * Kolumn4genomsnittHumoutput){
                  // Långt över medel
                  document.getElementById("Nummer2").innerHTML = "Hög fuktighet"}
                        else if(Kolumn4order > Kolumn4genomsnittHumoutput){
                  // Lite över medel
                  document.getElementById("Nummer2").innerHTML = "Lite högre fuktighet"}
                        else if(Kolumn4order < 0.85 * Kolumn4genomsnittHumoutput){
                  // Långt under medel
                  document.getElementById("Nummer2").innerHTML = "Låg fuktighet"}
                        else{
                  // Lite under medel
                  document.getElementById("Nummer2").innerHTML = "Lite lägre fuktighet"}}}

                  
                  function b5(){
// temp/hum
if(Valtmode == 1){
document.getElementById("Nummer8").innerHTML = "Temperatur: " + (Kolumn5order / 10 + 18) + "°C"


if(Kolumn5order == Kolumn5genomsnittTempoutput){
      document.getElementById("Nummer2").innerHTML = "---"
}
     else if(Kolumn5order > 1.15 * Kolumn5genomsnittTempoutput){
// Långt över medel
document.getElementById("Nummer2").innerHTML = "Varmt till jämförelse"}

      else if(Kolumn5order > Kolumn5genomsnittTempoutput){
// Lite över medel
document.getElementById("Nummer2").innerHTML = "Lite varmt till jämförelse"}
      else if(Kolumn5order < 0.85 * Kolumn5genomsnittTempoutput){
// Långt under medel
document.getElementById("Nummer2").innerHTML = "Kyligt till jämförelse"}
      else{
// Lite under medel
document.getElementById("Nummer2").innerHTML = "Lite kyligt till jämförelse"}}
                        else{
                  document.getElementById("Nummer8").innerHTML = "Fuktighet: " + (Kolumn5order/10 + 16) + "%"
                  
                  if(Kolumn5order == Kolumn5genomsnittHumoutput){
                        document.getElementById("Nummer2").innerHTML = "---"
                  }
                       else if(Kolumn5order > 1.15 * Kolumn5genomsnittHumoutput){
                  // Långt över medel
                  document.getElementById("Nummer2").innerHTML = "Hög fuktighet"}
                        else if(Kolumn5order > Kolumn5genomsnittHumoutput){
                  // Lite över medel
                  document.getElementById("Nummer2").innerHTML = "Lite högre fuktighet"}
                        else if(Kolumn5order < 0.85 * Kolumn5genomsnittHumoutput){
                  // Långt under medel
                  document.getElementById("Nummer2").innerHTML = "Låg fuktighet"}
                        else{
                  // Lite under medel
                  document.getElementById("Nummer2").innerHTML = "Lite lägre fuktighet"}}}

                       function b6(){
// temp/hum
if(Valtmode == 1){
document.getElementById("Nummer8").innerHTML = "Temperatur: " + (Kolumn6order / 10 + 18) + "°C"


if(Kolumn6order == Kolumn6genomsnittTempoutput){
      document.getElementById("Nummer2").innerHTML = "---"
}
     else if(Kolumn6order > 1.15 * Kolumn6genomsnittTempoutput){
// Långt över medel
document.getElementById("Nummer2").innerHTML = "Varmt till jämförelse"}

      else if(Kolumn6order > Kolumn6genomsnittTempoutput){
// Lite över medel
document.getElementById("Nummer2").innerHTML = "Lite varmt till jämförelse"}
      else if(Kolumn6order < 0.85 * Kolumn6genomsnittTempoutput){
// Långt under medel
document.getElementById("Nummer2").innerHTML = "Kyligt till jämförelse"}
      else{
// Lite under medel
document.getElementById("Nummer2").innerHTML = "Lite kyligt till jämförelse"}}
                        else{
                  document.getElementById("Nummer8").innerHTML = "Fuktighet: " + (Kolumn6order/10 + 16) + "%"
                  
                  if(Kolumn6order == Kolumn6genomsnittHumoutput){
                        document.getElementById("Nummer2").innerHTML = "---"
                  }
                       else if(Kolumn6order > 1.15 * Kolumn6genomsnittHumoutput){
                  // Långt över medel
                  document.getElementById("Nummer2").innerHTML = "Hög fuktighet"}
                        else if(Kolumn6order > Kolumn6genomsnittHumoutput){
                  // Lite över medel
                  document.getElementById("Nummer2").innerHTML = "Lite högre fuktighet"}
                        else if(Kolumn5order < 0.85 * Kolumn6genomsnittHumoutput){
                  // Långt under medel
                  document.getElementById("Nummer2").innerHTML = "Låg fuktighet"}
                        else{
                  // Lite under medel
                  document.getElementById("Nummer2").innerHTML = "Lite lägre fuktighet"}}}

                       function b7(){
// temp/hum
if(Valtmode == 1){
document.getElementById("Nummer8").innerHTML = "Temperatur: " + (Kolumn7order / 10 + 18) + "°C"


if(Kolumn7order == Kolumn7genomsnittTempoutput){
      document.getElementById("Nummer2").innerHTML = "---"
}
     else if(Kolumn7order > 1.15 * Kolumn7genomsnittTempoutput){
// Långt över medel
document.getElementById("Nummer2").innerHTML = "Varmt till jämförelse"}

      else if(Kolumn7order > Kolumn7genomsnittTempoutput){
// Lite över medel
document.getElementById("Nummer2").innerHTML = "Lite varmt till jämförelse"}
      else if(Kolumn7order < 0.85 * Kolumn7genomsnittTempoutput){
// Långt under medel
document.getElementById("Nummer2").innerHTML = "Kyligt till jämförelse"}
      else{
// Lite under medel
document.getElementById("Nummer2").innerHTML = "Lite kyligt till jämförelse"}}
                        else{
                  document.getElementById("Nummer8").innerHTML = "Fuktighet: " + (Kolumn7order/10 + 16) + "%"
                  
                  if(Kolumn7order == Kolumn7genomsnittHumoutput){
                        document.getElementById("Nummer2").innerHTML = "---"
                  }
                       else if(Kolumn7order > 1.15 * Kolumn7genomsnittHumoutput){
                  // Långt över medel
                  document.getElementById("Nummer2").innerHTML = "Hög fuktighet"}
                        else if(Kolumn7order > Kolumn7genomsnittHumoutput){
                  // Lite över medel
                  document.getElementById("Nummer2").innerHTML = "Lite högre fuktighet"}
                        else if(Kolumn7order < 0.85 * Kolumn7genomsnittHumoutput){
                  // Långt under medel
                  document.getElementById("Nummer2").innerHTML = "Låg fuktighet"}
                        else{
                  // Lite under medel
                  document.getElementById("Nummer2").innerHTML = "Lite lägre fuktighet"}}}

                          function b8(){
// temp/hum
if(Valtmode == 1){
document.getElementById("Nummer8").innerHTML = "Temperatur: " + (Kolumn8order / 10 + 18) + "°C"


if(Kolumn8order == Kolumn8genomsnittTempoutput){
      document.getElementById("Nummer2").innerHTML = "---"
}
     else if(Kolumn8order > 1.15 * Kolumn8genomsnittTempoutput){
// Långt över medel
document.getElementById("Nummer2").innerHTML = "Varmt till jämförelse"}

      else if(Kolumn8order > Kolumn8genomsnittTempoutput){
// Lite över medel
document.getElementById("Nummer2").innerHTML = "Lite varmt till jämförelse"}
      else if(Kolumn8order < 0.85 * Kolumn8genomsnittTempoutput){
// Långt under medel
document.getElementById("Nummer2").innerHTML = "Kyligt till jämförelse"}
      else{
// Lite under medel
document.getElementById("Nummer2").innerHTML = "Lite kyligt till jämförelse"}}
                        else{
                  document.getElementById("Nummer8").innerHTML = "Fuktighet: " + (Kolumn8order/10 + 16) + "%"
                  
                  if(Kolumn8order == Kolumn8genomsnittHumoutput){
                        document.getElementById("Nummer2").innerHTML = "---"
                  }
                       else if(Kolumn8order > 1.15 * Kolumn8genomsnittHumoutput){
                  // Långt över medel
                  document.getElementById("Nummer2").innerHTML = "Hög fuktighet"}
                        else if(Kolumn8order > Kolumn8genomsnittHumoutput){
                  // Lite över medel
                  document.getElementById("Nummer2").innerHTML = "Lite högre fuktighet"}
                        else if(Kolumn8order < 0.85 * Kolumn8genomsnittHumoutput){
                  // Långt under medel
                  document.getElementById("Nummer2").innerHTML = "Låg fuktighet"}
                        else{
                  // Lite under medel
                  document.getElementById("Nummer2").innerHTML = "Lite lägre fuktighet"}}}

