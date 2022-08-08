import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ProductService } from 'src/app/services/product.service';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm : FormGroup;

  constructor(private formBuilder:FormBuilder, private productService:ProductService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      productName:["", Validators.required],
      unitPrice: ["", Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["", Validators.required]
    })
  }

  add(){

    if (this.productAddForm.valid) {
      let productModel = Object.assign({},this.productAddForm.value) 
      this.productService.add(productModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message,"Conguracilations")
      },responseError=>{
        if(responseError.errors.Errors.length>0){
          console.log(responseError.error.Errors)
          for (let i = 0; i < responseError.error.Errors[i].ErrorMessage; i++) {
            this.toastrService.error(responseError.error.Errors,"Correction Error")   
          }      
        }
      }
      )

    } else {
      this.toastrService.error("Check your form again.", "!!!")
    }

    
    //console.log(productModel)
  }

}
