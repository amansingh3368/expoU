import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { RegisterProdService } from 'src/app/shared/services/register-prod.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit  {

  constructor(private registerProd: RegisterProdService, private route:ActivatedRoute ) { }
  imgURL: any;
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
        this.imgURL=params.get('url');
        // console.log(this.imgURL);
    });
  }
  onSubmit(){
  
    let data=this.registerProd.form.value;
    this.registerProd.form.value.imageData=this.imgURL;
    this.registerProd.createAuctionData(data).then(res=>{
      console.log("submitted");
    });
  }
}
