// venta.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiservService } from '../services/apiserv.service';
import { Producto, Venta } from '../models/Venta';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css'],
  imports:[CommonModule],
  standalone: true
})
export class VentaComponent implements OnInit {
  productos: Producto[] = JSON.parse(localStorage.getItem('productosVenta') || '[]');

  constructor(private router: Router, private ventaServ: ApiservService) {}

  ngOnInit() {
    // Si ya hay productos en el localStorage, cargarlos
    if (this.productos.length === 0) {

      let cantidadP = this.solicitarCantidadProductos()

      for(let i = 0; i < cantidadP; i++){
        this.agregarProducto();
      }
    }
  }

  solicitarCantidadProductos(){
    let cantidad = prompt("Cantidad de productos diferentes")
    return parseInt(cantidad!)
  }

  agregarProducto() {
    let nombre = prompt('Nombre del Producto:');
    let precio = prompt('Precio del Producto:');

    if(nombre && precio){
      let producto: Producto = {
        nombre,
        precio: parseFloat(precio || '0'),
        cantidadVendida: 0
      };
  
      this.productos.push(producto);
      localStorage.setItem('productosVenta', JSON.stringify(this.productos));
    }

  }

  cambiarCantidad(producto: any, cantidad: number) {
    producto.cantidadVendida += cantidad;
    if (producto.cantidadVendida < 0) {
      producto.cantidadVendida = 0;
    }
    localStorage.setItem('productosVenta', JSON.stringify(this.productos));
  }

  registrarVenta() {
    // Aquí se debería realizar el POST a tu API para registrar la venta
    // Luego, limpiar el localStorage
    console.log(this.productos)
    console.log('Registrando venta...', this.productos);

    let venta: Venta = {
      productos: this.productos,
      fechaVenta: new Date() + ""
    }



    this.ventaServ.crearVenta(venta).subscribe({
      next: (res) => {
        alert("Creada con exito")
        localStorage.removeItem('productosVenta');
        this.router.navigate(['/menu']);
      }, error: (err) =>{
        alert("Error creando venta -> " + err)
      }
    })
  }

  volverAlMenu() {
    this.router.navigate(['/menu']);
  }
}
