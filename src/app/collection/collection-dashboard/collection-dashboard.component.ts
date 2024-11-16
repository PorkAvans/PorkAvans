import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection-dashboard',
  templateUrl: './collection-dashboard.component.html',
  styleUrls: ['./collection-dashboard.component.scss']
})
export class CollectionDashboardComponent implements OnInit {
  user: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user_id') || '';
  }

  redirectToAddProductSale(): void {
    this.router.navigate(['/gestion-coleccion/add-product-sale']);
  }
}
