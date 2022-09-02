//importar clases para poder utilizarlas dentro de la clase
import { Cliente } from "./Cliente.js";
import { Producto } from "./Producto.js";

//Crear el package json usando npm init
//agregarle el "type":"module" al json y al script para indicarle que al archivo main se le van a importar modulos
//indica que va tener un unico archivo que va recibir modulos que son las distintas clases

const bombaAgua = new Producto();
bombaAgua.id = 1;
bombaAgua.codigo = "BAVW001";
bombaAgua.nombre = "BOMBA DE AGUA";
bombaAgua.description = "GOL AB9";
bombaAgua.cantidad = "10";
bombaAgua.marca = "volkswagen";
bombaAgua.mostrarDatosProducto();

//Creando un objeto sin usar los parametros del constructor
//Luego se agregan uno por uno
const cliente1 = new Cliente();
cliente1.id = 1;
cliente1.dni = 40560201;
cliente1.nombre = "Isaias";
cliente1.apellidos = "Cardenas";
cliente1.email = "Isakardenas352@gmail.com";
cliente1.producto = bombaAgua;
//Este metodo me muestra todos los datos del cliente
cliente1.mostrarDatosCliente();
//Con el console.log se van a mostrar todos los datos del cliente y
// si posee un objeto del tipo producto lo muestra dentro tambien
console.log(cliente1);



//Creando a partir de los parametros con el constructor
//Se agregan al mismo tiempo que se crea
const cliente2 = new Cliente(
  2,
  15378965,
  "Pepe",
  "Honguito",
  "pepehonguito@gmail.com"
);
cliente2.Cbu=212520;
console.log(cliente2.Cbu);

console.log("Datos del cliente como objeto:")
console.log(cliente2);
