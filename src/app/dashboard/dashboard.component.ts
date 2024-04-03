import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { WeatherService } from '../services/weatherService';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,MatPaginator,CommonModule,MatIcon],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit{
  displayedColumns: string[] = ['date', 'temperature', 'humidity', 'precipitation', 'surfacePressure'];
  data: any;
  dataSource: any;
  timeTemperatureData: { time: any; temperature: any; }[] | undefined;


  ngOnInit(): void {
    this.getWeather();
  }
  
  constructor(private weatherService: WeatherService,private router: Router,private shared:SharedServiceService) { }

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  ngAfterViewInit() {
    
  }

  async getWeather() {
    try {
      this.data = await this.weatherService.getWeatherData();
      let hourWeatherArray = [];

if (this.data.hourly.time.length === this.data.hourly.temperature2m.length &&
    this.data.hourly.time.length === this.data.hourly.relativeHumidity2m.length &&
    this.data.hourly.time.length === this.data.hourly.precipitation.length &&
    this.data.hourly.time.length === this.data.hourly.surfacePressure.length) {
  
  for (let i = 0; i < this.data.hourly.time.length; i++) {
    let hourWeather = {
      time: this.data.hourly.time[i].toISOString(),
      temperature: this.data.hourly.temperature2m[i],
      relativeHumidity: this.data.hourly.relativeHumidity2m[i],
      precipitation: this.data.hourly.precipitation[i],
      surfacePressure: this.data.hourly.surfacePressure[i]
    };
  
    hourWeatherArray.push(hourWeather);
  }}
    
    this.dataSource = new MatTableDataSource<PeriodicElement>(hourWeatherArray);
    this.dataSource.paginator = this.paginator;

    this.timeTemperatureData = hourWeatherArray.map(mydata => ({
      time: mydata.time,
      temperature: mydata.temperature
    }));

    } catch (error) {
      console.error('Chyba pri získavaní údajov o počasí:', error);
    }
    
  }

  navigateTochart(){
    this.shared.setData(this.timeTemperatureData);
    this.router.navigate(['/app-chart']);
  }
}

export interface PeriodicElement {
  time: any;
  temperature: any;
  relativeHumidity: any;
  precipitation: any;
  surfacePressure: any
}

