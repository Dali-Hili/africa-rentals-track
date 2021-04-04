import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import {ProductService} from '../../servercis/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  mydata: any=[];

  constructor(private router:Router ,private pdService:ProductService) { }
   
  functionON() {
    this.router.navigate(["/info"])
    
  }
  getprod(){
    this.pdService.getProduct().subscribe((data)=>{
      this.mydata = data
     
    })
  }

  ngOnInit(): void {
    this.getprod()
  }

}
