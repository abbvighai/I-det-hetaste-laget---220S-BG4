//Detta är koden för att få ut värdena och skicka de till Firebase!

//DEt första är att includa alla libraries. Wifi, Displayen, Tidsclient, Am2320 sensor och firebase.

#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <AM2320.h>
#include <NTPClient.h>
#include "FirebaseESP8266.h"
#include <ESP8266WiFi.h>
#include <WiFiUdp.h>

//Här definas vart Firebasen ligger(på molnet) och också vilket Wifi och vad lösenordet för logga in på wifi.

#define FIREBASE_HOST "https://i-det-hetaste-laget-bg4-default-rtdb.asia-southeast1.firebasedatabase.app/"
#define FIREBASE_AUTH "sBoymgIFPi9O8tklj9nMf4LPCWgT1SEvwyklrjga"
#define WIFI_SSID "ABBgym_2.4"
#define WIFI_PASSWORD "mittwifiarsabra"

//?? Sätter upp displayen och sensorn

Adafruit_SSD1306 display(128, 64, &Wire, -1, 400000UL, 100000UL);
AM2320 sensor;

//Sätter upp så att tiden kan hitta till Wifi och så att den har rätt tidszon. Också vilket sätt den ska skriva tiden på.

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org", 7200, 60000);

//Definerar alla variablar som kommer behövas I framtiden

String tiden;

float SensorTemp;
float SensorHum;
float humi;
float temp;

int dagar = 6;
int timmar;
int minuter;

//Definerar Firebase Data objects

FirebaseData firebaseData;


void setup() {
  //Säger vilka pins som information av emc kommer ifrån.

  Wire.pins(14, 12);

  //Startar displayen

  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);

  //Startar serial monitor fast den inte behövs. Bara för att kolla att allt funkar. Kan också kolla om den lyckas connecta till wifi

  Serial.begin(9600);

  //Clearar Displayen innan vi börjar använda den

  display.clearDisplay();

  //Sätter display färgen till vit fast det inte kan vara vit. //Inte värt att testa utan (:

  display.setTextColor(WHITE);

  //Sätter på Led_Builtin Användes för test

  pinMode(LED_BUILTIN, OUTPUT);

  //Säger till koden att Starta Wifi med Namn och lösenord

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-fi");

  //Skriver . medans Wifi håller på att connecta

  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }

  //Säger till vilken Ip wifi connectar till

  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  //Startar/Hittar firebase så att vi senare kan skicka värdena

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

  //Säger till tids clienten att starta

  timeClient.begin();


}

//Declarerar en function som kommer displaya temperaturen på displayen.

void Temperature(void) {
  display.setTextSize(1);
  display.setCursor(10, 0);
  display.cp437(true);
  if (sensor.measure()) {
    SensorTemp = sensor.getTemperature();
    display.println(SensorTemp);
    display.println("temperature");

    //Om sensorn mätter så sätter den SensorTemp = mätningen, och skriver sedan ut det på displayen tillsammans med temperature under

  }
  display.display();
}

//Declarerar en function som kommer displaya humidity under temperature på displayen.

void Humidity(void) {
  display.setTextSize(1);
  display.setCursor(10, 20);
  display.cp437(true);
  if (sensor.measure()) {
    SensorHum = sensor.getHumidity();
    display.println(SensorHum);
    display.println("humidity");

    //Om sensorn mätter så sätter den SensorHum = mätningen, och skriver sedan ut det på displayen tillsammans med humidity under
    //Innan if loopen på display.setCursor sätter den också cursorn mer neråt så att den inte skriver över temperature värdenen
  }
  display.display();
}

//Declarerar en function som kommer displaya tiden under humidity och temperature på displayen.

void TimeDisplay(void) {
  display.setTextSize(1);
  display.setCursor(10, 40);
  display.cp437(true);

  //Sätter att tiden = formetterade tiden av våran tids client. Sedan displayas det tillsammans med en text där det står time.

  tiden = timeClient.getFormattedTime();
  display.println(tiden);
  display.println("Time");
  display.display();
}

//Declarerar en function som ger variablarna temp och humi värdena av temperaturen och humiditien.

void tempurat(void) {
  if (sensor.measure()) {
    temp = sensor.getTemperature();
    humi = sensor.getHumidity();
  }
}


void loop() {

  //updaterar timeClienten så att den är på rätt tid

  timeClient.update();

  //Använder functionen tempurat för att få in nya updaterade värden i void loopen.

  tempurat();

  if (0 == timeClient.getSeconds()) {

    //Om sekunden är 0 så går den in i if. Det gör att vi får ett värde varje minut

    display.clearDisplay();

    //definerar timmar och minuter till vilken timme och minut det är på just den mätningen

    timmar = timeClient.getHours();
    minuter = timeClient.getMinutes();

    //Dagen börjar på 0 och varje gång timmen och minuten är på noll. Det vill säga varje gång klockan är 00:00 så adderas dagen med 1.
    //Tyvärr lyckades jag inte att få utt riktiga dagen med tids clienten. Den trodde att det var den tredje när det igentligen var den 26.

    if (0 == timeClient.getHours()) {
      if (0 == timeClient.getMinutes()) {
        dagar = dagar + 1;
      }
    }

    //Här så skickas datan av Temperatur och Humidity till Firebase. Firebase "bibliteket" är strukturerat så här: Plats/dag/timme/minut/mättning
    //Här används variablarna som vi innan definerade till exact vilken timme, minut och "dag" det var.

    //Våran data åker enda bort till Singapore. Varför?? Jo!! Den måste åka på en resa runt nästan hela jorden och så vill vi spara el här i Europa
    //På grund av Rysslands invasion av Ukraina har elpriserna gått up och databaser drar mycket el. Därför vill vi hjälpa våra belgiska bröder genom att inte använda deras el (:
    
    Firebase.setInt(firebaseData, "/Terrariet/Dagar-" + String(dagar) + "/Hour-" + String(timmar) + "/Minute-" + String(minuter) + "/Temperature", temp);
    Firebase.setInt(firebaseData, "/Terrariet/Dagar-" + String(dagar) + "/Hour-" + String(timmar) + "/Minute-" + String(minuter) + "/Humidity", humi);

    //Här använder vi functionerna som skriver ut värdena på displayen. En delay har vi för att varför inte. Och innan så behövdes delay av någon anledning. Så för att vara på säkra sidan lade jag till det!

    Humidity();
    delay(100);
    Temperature();
    delay(100);
    TimeDisplay();

  //Här läggs en delay till så att den inte kollar alldeles för mycket.

  }
  else {
    delay(1);
  }
}

//That's it (: 
