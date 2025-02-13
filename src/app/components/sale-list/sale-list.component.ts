
import { CommonModule } from '@angular/common';
import { SaleService } from '../../services/sale.service';
import { Sale } from './../../models/sale';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-list',
  imports: [CommonModule ],
  templateUrl: './sale-list.component.html',
  styleUrl: './sale-list.component.css'
})

export class SaleListComponent implements OnInit {

  sale : Sale[] = [];

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
    this.saleService.getSales().subscribe(data => {
      this.sale = data;
    });
  }
}
