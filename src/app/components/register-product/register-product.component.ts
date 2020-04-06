import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { RegisterProdService } from 'src/app/shared/services/register-prod.service';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit  {

  constructor(private registerProd: RegisterProdService ) { }

  ngOnInit() {
  }
  onSubmit(){
  
    
    let data=this.registerProd.form.value;

    this.registerProd.createAuctionData(data).then(res=>{
      console.log("submitted");
    });
  }
}
