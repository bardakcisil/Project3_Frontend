import { Component, OnInit } from '@angular/core';
import { Product} from "src/app/models/product";
import { ProductService } from 'src/app/services/product.service';
import { HttpClient} from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { ToastrService} from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  products:Product[] = [];
  dataLoaded = false;
  filterText="";
  isShownnext: boolean = false ;

 constructor(private productService:ProductService, 
  private activatedRoute:ActivatedRoute,
  private toastrService:ToastrService,
  private cartService:CartService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      } else {
        this.getProducts();
      }
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true;
    })} 

    getProductsByCategory(categoryId:number){
      this.productService.getProductsByCategory(categoryId).subscribe(response=>{
        this.products = response.data
        this.dataLoaded = true;
      })} 

      addToCart(product:Product){
        if (product.unitsInStock===1) {
          this.toastrService.error("ERROR", product.productName+" isimli urun sepete eklenemez")
          
        } else {
          this.toastrService.success("sepete eklendi", product.productName)
          this.cartService.addToCart(product);
        }
        
      }

      showSearched() {
        this.isShownnext = ! this.isShownnext;
     }

 }
  

  
  

  
