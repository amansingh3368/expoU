import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterProdService {

  constructor() { }

    data: any;
    addData(value){
      this.data=value;
    }
    getData(){
      return this.data;
    }
    clearData(){
      this.data= undefined;
      return this.data;
    }
}
