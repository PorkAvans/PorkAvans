// buy-product.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { PayForProductComponent } from '../pay-for-product/pay-for-product.component';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss']
})
export class BuyProductComponent implements OnInit {
  product: any;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private dialog: MatDialog
  ) {}


  openPayForProductModal() {
    const associateId = this.route.snapshot.paramMap.get('associate_id');
    if (!associateId) {
      console.error('El associate_id no está disponible');
      return; // No abre el modal si el ID no está disponible
    }
  
    this.dialog.open(PayForProductComponent, {
      width: '400px',
      data: { 
        ...this.product,
        associate_id: associateId 
      }
    });
  }
  
  
  
  

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('product_id');
    const associateId = this.route.snapshot.paramMap.get('associate_id');

    if (productId && associateId) {
      this.getProductDetails(productId, associateId);
    }
  }

  getProductDetails(productId: string, associateId: string): void {
    this.authService.getProductDetails(productId, associateId).subscribe(
      (response) => {
        this.product = response;
        console.log(this.product);
      },
      (error) => {
        this.errorMessage = 'Error al obtener los detalles del producto.';
        console.error(error);
      }
    );
  }
}
