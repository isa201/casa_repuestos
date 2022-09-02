export class Producto {
  id;
  codigo;
  nombre;
  description;
  cantidad;
  marca;

  constructor(id, codigo, nombre, description, marca) {
    this.id = id;
    this.codigo = codigo;
    this.nombre = nombre;
    this.description = description;
    this.marca = marca;
  }

  mostrarDatosProducto() {
    //This hace referencia al mismo objeto que se esta manipulando
    console.log("DATOS DEL PRODUCTO:");
    console.log("- - - - - - - - - - - - - - - - - - - -");
    console.log("ID: " + this.id);
    console.log("CODIGO: " + this.codigo);
    console.log("NOMBRE: " + this.nombre);
    console.log("DESCRIPCION: " + this.description);
    console.log("CANTIDAD: " + this.cantidad);    
  }
}
