import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAlert } from '../../models/weather/weather-alert.models';
import { WeatherAlertContentComponent } from '../weather-alert-content/weather-alert-content.component';
import { WeatherAlertSingleComponent } from './weather-alert-single.component';

describe('WeatherAlertSingleComponent', () => {
  let component: WeatherAlertSingleComponent;
  let fixture: ComponentFixture<WeatherAlertSingleComponent>;
  const alert: WeatherAlert = {
    sender_name: 'PAGASA-DOST',
    event: 'Tropical Cyclone Alert',
    start: 1633597868,
    end: 1633644658,
    description:
      'THE LOW PRESSURE AREA EAST OF CAMARINES NORTE DEVELOPED INTO A TROPICAL DEPRESSION AND WAS NAMED “MARING”.\r\n\r\nLocation of eye/center : At 4:00 PM today, the center of Tropical Depression "MARING" was estimated based on all available data at at 505 km East of Virac, Catanduanes (13.3, 128.9).\r\nStrength : Maximum winds of 45 kph near the centerand gustiness of up to 55 kph.\r\nForecast movement : Forecast to move South Southeastward at 15 kph\r\n\r\nForecast position : \r\n • 24 Hour(Tomorrow afternoon): 570 km East of Virac, Catanduanes(13.6°N,  129.5°E)\r\n • 48 Hour(Saturday afternoon):765 km East of Baler, Aurora( 15.7°N,  128.7°E)\r\n • 72 Hour(Sunday afternoon): 495 km East of Aparri, Cagayan( 18.2°N,  126.3°E)\r\n • 96 Hour(Monday afternoon):Over the coastal waters of Babuyan Islands( 19.5°N,  122.4°E)\r\n • 120 Hour(Tuesday afternoon):465 km West of Basco, Batanes (OUTSIDE PAR)( 20.5°N,  117.5°E)\r\n\r\nHAZARDS AFFECTING LAND AREAS\r\nHeavy Rainfall\r\nToday, the trough of “MARING” may bring light to moderate with at times heavy rains over Eastern Visayas.\r\nUnder these conditions, scattered flooding (including flash floods) and rain-induced landslides are possible especially in areas that are highly or very highly susceptible to these hazard as identified in hazard maps\r\n\r\nSevere Winds\r\nCurrent track and intensity forecast shows that there is a moderate to high likelihood that Tropical Cyclone Wind Signals (TCWS) will be hoisted for several provinces in Northern Luzon. These wind signals may be hoisted for these localities by Saturday morning or afternoon. The highest possible wind signal that may be hoisted for this tropical cyclone is TCWS #2.\r\nHAZARDS AFFECTING COASTAL WATERS\r\nIn the next 24 hours, moderate rough seas will prevail over the seaboards of Luzon and eastern and western seaboards of Visayas and Mindanao. These conditions are risky for those using small seacrafts. Mariners are advised to take precautionary measures when venturing out to sea and, if possible, avoid navigating in these conditions.  \r\nTRACK AND INTENSITY OUTLOOK\r\nTropical Depression “MARING” developed from the Low Pressure Area over the Philippine Sea at 2:00 PM today.\r\nOn the forecast track, the tropical depression will continue moving generally southeastward in the next 12 hours before turning northward tomorrow afternoon. Afterwards, “MARING” will move north northwestward over the Philippine Sea by Saturday morning, then west northwestward by Sunday afternoon as it moves towards Extreme Northern Luzon. By Monday, “MARING” is forecast to pass close or make landfall over Babuyan Islands. \r\n“MARING” is forecast to remain tropical depression while moving over the Philippine Sea and may intensify into tropical storm by Sunday afternoon.\r\n',
    tags: [],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherAlertSingleComponent, WeatherAlertContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAlertSingleComponent);
    component = fixture.componentInstance;
    component.alert = alert;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
