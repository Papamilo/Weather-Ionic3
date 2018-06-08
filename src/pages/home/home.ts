import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: Array<any>;
  city: {
    id: number;
    name: string;
    country: string;
    coord: {
      lat: number;
      lon: number;
    };
  };
  list: {
    weather: {
      id: number;
      main: string;
      description: string;
      icon: any;
    };
    clouds: string;
    wind: number;
    snow: any;
    sys: string;
  };
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
    });
  }
}
