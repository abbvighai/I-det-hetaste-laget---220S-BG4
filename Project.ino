#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <AM2320.h>

Adafruit_SSD1306 display(128, 64, &Wire,-1,400000UL,100000UL);

AM2320 sensor;

float SensorTemp;
float SensorHum;
float hum;
float temp;
bool i = true;

void setup() {
  Wire.pins(14, 12);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
    
  Serial.begin(9600);
  
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

 }
void humid(void){
    if (sensor.measure()){
      hum = sensor.getHumidity();
      Serial.println(hum);
      Serial.println("hum");
    }
}
void tempurat(void){
    if (sensor.measure()){
      temp = sensor.getTemperature();
      Serial.println(temp);
      Serial.println("temp");
    }
}

void loop() {
  
    delay(100);
    humid();
    delay(100);
    tempurat();
    delay(100);
    Temperature();
    delay(100);
    Humidity();
    delay(100);
    
    delay(2000);
    display.clearDisplay();
    
} 
