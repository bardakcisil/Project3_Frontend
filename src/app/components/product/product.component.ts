import { Component, OnInit } from '@angular/core';
import { Product} from "src/app/models/product";
import { ProductService } from 'src/app/services/product.service';
import { HttpClient} from "@angular/common/http";
import {ProductResponseModel} from 'src/app/models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  product:Product[] = [];
  dataLoaded = false;

 constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();

  }

  getProducts(){
    //console.log("Api request basladi");
    this.productService.getProducts().subscribe(response=>{
      this.product = response.data
      this.dataLoaded = true; //senkron yapi
      //console.log("Api request bitti");
    })
    //dataLoaded = true; //bunu yapma yoksa g.o.
    //console.log("Method bitti");

  
    
      } 

 }
  

  
  

  
