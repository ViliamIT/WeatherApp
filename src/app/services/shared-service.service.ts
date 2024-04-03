import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  private data: any;

  setData(data: any) {
    //console.log(data);
    
    this.data = data;
  }

  getData() {
    //console.log(this.data);
    
    return this.data;
  }
}
