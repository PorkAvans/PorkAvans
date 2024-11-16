import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection-dashboard',
  templateUrl: './collection-dashboard.component.html',
  styleUrls: ['./collection-dashboard.component.scss']
})
export class CollectionDashboardComponent {
  constructor(private router: Router) {}

  redirectToAddProductSale(): void {
    this.router.navigate(['/gestion-coleccion/add-product-sale']);
  }
}
