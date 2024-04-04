import { ChangeDetectorRef, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatListModule, MatNavList} from "@angular/material/list"
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatButtonModule,
    MatIconModule, 
    MatSidenavModule, 
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterOutlet
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  private _mobileQueryListener: () => void;

constructor(private router: Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher){
  this.mobileQuery = media.matchMedia('(max-width: 600px)');
  this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  this.mobileQuery.addListener(this._mobileQueryListener);
}
mobileQuery: MediaQueryList;

ngOnDestroy(): void {
  this.mobileQuery.removeListener(this._mobileQueryListener);
}


navigateToHeatIndexCalculator(){
  this.router.navigate(["/app-heat-index"])
}

}
