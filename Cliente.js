//exportar la clase para poder ser importada en la clase principal
export class Cliente {
  id;
  dni;
  nombre;
  apellidos;
  email;
  //Crear atributo privado acceder con un setter o un getter
  _cbu;
  //relacionar una clase con otra de las clases  //Cliente<--Producto
  producto;

  //por defecto el constructor va tener un producto como null
  //ya que no es seguro que compre el cliente si o si
  //si el constructor no esta definido por dentro js lo defini pero no se ve en el codigo
  constructor(id, dni, nombre, apellidos, email) {
    this.producto = null;
    this.id = id;
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.email = email;
  }

  // cliente2.Cbu=212520; uso del getter en el main
  //console.log(cliente2.Cbu); uso del setter en el main

  set Cbu(valor) {
    console.log("SETTER");
    this._cbu = valor;
  }

  get Cbu() {
    console.log("GETTER");
    return this._cbu;
  }

  mostrarDatosCliente() {
    //This hace referencia al mismo objeto que se esta manipulando
    console.log("Datos del cliente actual");
    console.log("DNI: " + this.dni);
    console.log("Nombre: " + this.nombre);
    console.log("Apellidos: " + this.apellidos);
    console.log("Email: " + this.email);
  }
}
