import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterProdService {

  constructor() { }

    data=[];
    addData(value){
      this.data.push(value);
    }
    getData(){
      return this.data;
    }
    clearData(){
      this.data=[];
      return this.data;
    }
}
