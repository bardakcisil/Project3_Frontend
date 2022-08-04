import { Component, OnInit } from '@angular/core';
import { Product} from "src/app/models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductsComponent implements OnInit {

  product:Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
