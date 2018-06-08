import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey = 'd7bf9911c431b4fa480b5784f3615374';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url =
      'http://api.openweathermap.org/data/2.5/forecast?q=Thessaloniki&units=metric&cnt=5&appid=' +
      this.apiKey;
  }

  getWeather(id, name, country) {
    return this.http.get(this.url);
  }
}