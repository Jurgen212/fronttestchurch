// app-routing.module.ts
import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { VentaComponent } from './venta/venta.component';
import { VerVentasComponent } from './ver-ventas/ver-ventas.component';

export const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'venta', component: VentaComponent },
  { path: 'ver-ventas', component: VerVentasComponent },
  { path: '**', redirectTo: '/menu' }
];
