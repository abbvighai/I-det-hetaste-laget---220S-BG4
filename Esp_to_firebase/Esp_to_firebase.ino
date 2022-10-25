#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <AM2320.h>
#include <NTPClient.h>
#include "FirebaseESP8266.h"
#include <ESP8266WiFi.h>
#include <WiFiUdp.h>

#define FIREBASE_HOST "https://i-det-hetaste-laget-bg4-default-rtdb.asia-southeast1.firebasedatabase.app/"
#define FIREBASE_AUTH "sBoymgIFPi9O8tklj9nMf4LPCWgT1SEvwyklrjga"
#define WIFI_SSID "ABBgym_2.4"
#define WIFI_PASSWORD "mittwifiarsabra"

String path = "/rum1test";
String nodeID = "rum1testNode";


Adafruit_SSD1306 display(128, 64, &Wire, -1, 400000UL, 100000UL);

AM2320 sensor;

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org", 7200, 60000);

float SensorTemp;
float SensorHum;
float hum;
float humi;
float temp;

int timmar;
int minuter;

int tid = 0;
int temp78;

bool i = true;

//Define Firebase Data objects
FirebaseData firebaseData;

void setup() {
  Wire.pins(14, 12);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);

  Serial.begin(9600);

  //Code to clear display
  display.clearDisplay();

  display.setTextColor(WHITE);



  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-fi");

  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }

  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

  if (!Firebase.beginStream(firebaseData, path))
  {
    Serial.println("Could not begin stream");
    Serial.println("REASON: " + firebaseData.errorReason());
    Serial.println();
  }


  timeClient.begin();


}


void Temperature(void) {


  display.setTextSize(1);
  display.setCursor(10, 10);
  display.cp437(true);
  if (sensor.measure()) {
    SensorTemp = sensor.getTemperature();
    display.println(SensorTemp);
    display.println("temperature");
  }
  display.display();

}

void Humidity(void) {


  display.setTextSize(1);
  display.setCursor(10, 40);
  display.cp437(true);
  if (sensor.measure()) {
    SensorHum = sensor.getHumidity();
    display.println(SensorHum);
    display.println("humidity");
  }
  display.display();





}
void humid(void) {
  if (sensor.measure()) {
    hum = sensor.getHumidity();
    Serial.println(hum);
    Serial.println("hum");
  }
  else {
    Serial.println("fuck");
  }
}
void tempurat(void) {
  if (sensor.measure()) {
    temp = sensor.getTemperature();
    humi = sensor.getHumidity();
//    Serial.println(temp);
//    Serial.println("temp");
  }
}



void loop() {
  timeClient.update();


//  tid = tid + 1;
    tempurat();
//  Serial.println(timeClient.getFormattedTime());


  if (0 == timeClient.getSeconds()) {
    timmar = timeClient.getHours();
    minuter = timeClient.getMinutes();
    
    Firebase.setInt(firebaseData, "/SimonsPlats/Hour-" + String(timmar) + "/Minute-" + String(minuter) + "/Temperature", temp);
    Firebase.setInt(firebaseData, "/SimonsPlats/Hour-" + String(timmar) + "/Minute-" + String(minuter) + "/Humidity", humi);
    Serial.println(timeClient.getFormattedTime());
  }
  else{
    delay(1);
  }




}
