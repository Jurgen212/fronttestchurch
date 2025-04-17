// ver-ventas.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiservService } from '../services/apiserv.service';
import { Producto, Venta } from '../models/Venta';

@Component({
  selector: 'app-ver-ventas',
  templateUrl: './ver-ventas.component.html',
  styleUrls: ['./ver-ventas.component.css'],
  imports:[CommonModule],
  standalone: true
})
export class VerVentasComponent implements OnInit {
  ventas: Venta[] = [];

  constructor(private http: HttpClient, private ventaServ: ApiservService) {}

  ngOnInit() {
    this.ventaServ.obtenerDatos().subscribe({
      next: (res) => {
        console.log(res)
        this.ventas = res
      }, error: (err) => {
        alert("Error obteniendo venta -> " + err)
      }
    })
  }
}
