import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
 /*    this.forecastService.getWeatherForecast()
      .subscribe((data:any)=>{
        console.log(data); */

       /*  const todayForecast = data.slice(0, 8);
        this.getTodayWeatherForecast(todayForecast);
      })*/

      this.forecastService.GetWeatherForecastByGeoLocation().subscribe(d=>{
        console.log(d);

      })

  }



/*   getTodayWeatherForecast(forecast:any){
    console.log('yes');

    console.log(forecast);

  } */

}
