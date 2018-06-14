import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: Array<any>;

  constructor(
    public navCtrl: NavController,
    private weatherProvider: WeatherProvider
  ) {}

  ionViewWillEnter() {
    // this.city = {
    //   id: 519188,
    //   name: 'Novinki',
    //   country: 'RU',
    //   coord: {
    //     lon: 37.666668,
    //     lat: 55.683334
    //   }
    // };

    this.weatherProvider.getWeather().subscribe(weather => {
      console.log(weather);
      // this.weather = weather.weather.base;
      // Todo: vu que c'est un array parcours le avec un forEach !!!
      // this.weather.forEach(city => {
      //   weather = weather.city;
      // });
      // this.weather = weather.weather.base;
    });
  }
}
