import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ChartComponent } from './chart/chart.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'app-dashboard', component: DashboardComponent  },
    { path: 'app-chart', component: ChartComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
