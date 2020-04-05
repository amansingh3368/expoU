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
  addData(form: NgForm){
    const value=form.value;
    this.registerProd.addData(value);
    // console.log(this.registerProd.getData());
  }
  
}
