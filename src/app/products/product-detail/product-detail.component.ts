import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { IProduct } from '../product.interface';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');

    this.productService.getProducts().subscribe(
      products => {
        products.map(el => el.productId === id ? this.product = el : null);
      },
      error => this.errorMessage = <any>error
    );
  }
  onBack(): void {
    this.router.navigate(['/products']);
  }

}
