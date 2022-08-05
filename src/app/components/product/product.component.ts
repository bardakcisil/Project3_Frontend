import { Component, OnInit } from '@angular/core';
import { Product} from "src/app/models/product";
import { HttpClient} from "@angular/common/http";
import {ProductResponseModel} from 'src/app/models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  product:Product[] = [];
  apiUrl = "https://localhost:44396/api/products/getall";
  productResponseModel:ProductResponseModel={
    data:this.product,
    message: "",
    success:true
  };
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();

  }

  getProducts(){
  
    this.httpClient
      .get<ProductResponseModel>(this.apiUrl)
      .subscribe( (response) => {
        //this.productResponseModel = response or
        this.product = response.data
      } );
  }

 }
  
