import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { RegisterProdService } from 'src/app/shared/services/register-prod.service';
import { ActivatedRoute } from '@angular/router';
import { analytics } from 'firebase';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit  {

  constructor(public registerProd: RegisterProdService, 
    public activatedRoute: ActivatedRoute
    ) {
      this.activatedRoute.paramMap.subscribe((params: any)=>{
        console.log(JSON.stringify(params));
      })
     }

  ngOnInit() {
  }
  addData(form: NgForm){
    const value=form.value;
    this.registerProd.addData(value);
    console.log(this.registerProd.getData());
  }
  
}
