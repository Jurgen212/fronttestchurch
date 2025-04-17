// menu.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports:[CommonModule],
  standalone: true
})
export class MenuComponent {
  productos: any[] = JSON.parse(localStorage.getItem('productosVenta') || '[]');

  constructor(private router: Router) {}


  crearVenta() {
    this.router.navigate(['/venta']);
  }

  verVentasHoy() {
    this.router.navigate(['/ver-ventas']);
  }

  borrarLocalStorage() {
    localStorage.clear();
    location.reload()
  }
}
