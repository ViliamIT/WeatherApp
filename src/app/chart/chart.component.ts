import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import { log } from 'console';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})


export class ChartComponent implements AfterViewInit,OnInit {

  mydata:any;
  constructor(private route: ActivatedRoute, private shared:SharedServiceService) {}


  ngOnInit() {
    this.mydata = this.shared.getData();
    console.log(this.mydata);
  }


  @ViewChild('mychart') mychart: any;


  ngAfterViewInit() {
    //console.log(this.mydata.time);
    const labels: string[] = [];

    for (let i = 0; i < this.mydata.length; i++) {
      labels.push(this.mydata[i].time);
    }

    const temperatures: number[] = [];

for (let i = 0; i < this.mydata.length; i++) {
  temperatures.push(this.mydata[i].temperature);
}
    //const labels = this.mydata.time
    const data = {
      labels: labels,
      datasets: [{
        label: 'temperature change over time',
        data: temperatures,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    const config: ChartConfiguration<'line', number[], string> = {
      data: data,
      type: 'line'
    };

    const ctx = this.mychart.nativeElement.getContext('2d');
    new Chart(ctx, config);
  }
}