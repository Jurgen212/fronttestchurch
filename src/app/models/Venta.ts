export interface Producto {
    nombre: string;
    precio: number;
    cantidadVendida: number;
    _id?: string;
  }
  
  export interface Venta {
    _id?: string;
    productos: Producto[];
    fechaVenta: string; // Se guarda como string con formato ISO
    __v?: number;
  }
  