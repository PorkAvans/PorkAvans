import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-sale-description',
  templateUrl: './product-sale-description.component.html',
  styleUrls: ['./product-sale-description.component.scss']
})
export class ProductSaleDescriptionComponent implements OnInit {
  productSaleId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener el parámetro 'id' de la URL
    this.productSaleId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID del producto de venta:', this.productSaleId);
  }
}
