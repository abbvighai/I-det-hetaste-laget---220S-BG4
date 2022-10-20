#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <AM2320.h>

Adafruit_SSD1306 display(128, 64, &Wire,-1,400000UL,100000UL);

AM2320 sensor;

float SensorTemp;
float SensorHum;
bool i = true;

void setup() {
  Wire.pins(14, 12);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  
  
  //Code to clear display
  display.clearDisplay();
  
  display.setTextColor(WHITE);


}


void Temperature(void){


  display.setTextSize(1);
  display.setCursor(10, 10);
  display.cp437(true);
  if (sensor.measure()){
    SensorTemp = sensor.getTemperature();
    display.println(SensorTemp);
    display.println("temperature");
    }
  display.display();
  delay(100);
 }

void Humidity(void){

  
  display.setTextSize(1);
  display.setCursor(10, 40);
  display.cp437(true);
  if (sensor.measure()){
    SensorHum = sensor.getHumidity();
    display.println(SensorHum);
    display.println("humidity");
  }
  display.display();
  delay(200);
 }


void loop() {

    Temperature();
    Humidity();
    delay(2000);
    display.clearDisplay();
} 
