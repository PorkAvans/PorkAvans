import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss']
})
export class BuyProductComponent implements OnInit {
  product: any;
  errorMessage: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('product_id');
    const associateId = this.route.snapshot.paramMap.get('associate_id');

    if (productId && associateId) {
      this.getProductDetails(productId, associateId);
    }
  }

  getProductDetails(productId: string, associateId: string): void {
    const url = `http://127.0.0.1:8000/associate-commission/product/${productId}/${associateId}`;
    this.http.get(url).subscribe(
      (response) => {
        this.product = response;
        console.log(this.product)
      },
      (error) => {
        this.errorMessage = 'Error al obtener los detalles del producto.';
        console.error(error);
      }
    );
  }
}
