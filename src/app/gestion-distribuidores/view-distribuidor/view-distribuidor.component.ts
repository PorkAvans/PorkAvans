import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-distribuidor',
  templateUrl: './view-distribuidor.component.html',
  styleUrls: ['./view-distribuidor.component.scss']
})
export class ViewDistribuidorComponent implements OnInit {

  distribuidores = [
    {
      image: 'path_to_image1.jpg',
      distributor_name: 'Distribuidor 1',
      distributor_address: 'Calle 123, Ciudad',
      distributor_quarter: 'Centro',
      cell_phone: '(123) 456-7890',
      register_date: '2024-11-08T14:30:00',
      type_distributor: 1,
      status_distributor: 'ACTIVO',
      collection_id: 101,
      status_collection_id: 1
    },
    {
      image: 'path_to_image2.jpg',
      distributor_name: 'Distribuidor 2',
      distributor_address: 'Avenida 456, Ciudad',
      distributor_quarter: 'Sur',
      cell_phone: '(987) 654-3210',
      register_date: '2024-10-15T10:15:00',
      type_distributor: 2,
      status_distributor: 'INACTIVO',
      collection_id: 102,
      status_collection_id: 2
    }
    // Agrega más distribuidores aquí
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
