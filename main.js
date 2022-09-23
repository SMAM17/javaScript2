function Chawaiana() {
  let hawaiana = document.getElementById("hawaiana").value;
  return hawaiana;
}

function Cmexicana() {
  let mexicana = document.getElementById("mexicana").value;
  return mexicana;
}
function Cpollo() {
  let pollo = document.getElementById("pollo").value;
  return pollo;
}
function Citaliana() {
  let italiana = document.getElementById("italiana").value;
  return italiana;
}

function CcocaCola() {
  let cocaCola = document.getElementById("cocaCola").value;
  return cocaCola;
}
function Csprit() {
  let sprit = document.getElementById("sprit").value;
  return sprit;
}
function Cmanzana() {
  let manzana = document.getElementById("manzana").value;
  return manzana;
}
function Ccolombiana() {
  let colombiana = document.getElementById("colombiana").value;
  return colombiana;
}

function Cpasteles() {
  let pasteles = document.getElementById("pasteles").value;
  return pasteles;
}

function Cdedos() {
  let dedos = document.getElementById("dedos").value;
  return dedos;
}
function Cbuñuelos() {
  let buñuelos = document.getElementById("buñuelos").value;
  return buñuelos;
}
function Cbocadillos() {
  let bocadillos = document.getElementById("bocadillos").value;
  return bocadillos;
}
function Cpapas() {
  let papas = document.getElementById("papas").value;
  return papas;
}

//almaceno la cantidad de pizzas por el precio de cada una

let precioHawaiana = Chawaiana() * 20000;
let precioMexicana = Cmexicana() * 23000;
let precioPollo = Cpollo() * 26000;
let precioItaliana = Citaliana() * 22000;

//almaceno la cantidad de bebidas por el precio de cada una
let precioCocaCola = CcocaCola() * 3500;
let precioSprit = Csprit() * 3500;
let precioManzana = Cmanzana() * 3500;
let precioColombiana = Ccolombiana() * 3500;

//almaceno la cantidad de pasabocas por el precio
let precioPasteles = Cpasteles() * 2500;
let precioDedos = Cdedos() * 1500;
let precioBuñuelos = Cbuñuelos() * 2000;
let precioBocadillos = Cbocadillos() * 2000;
let precioPapas = Cpapas() * 4000;

//pizzas
function resultado(){
  let total = document.getElementById("liquidar");
  if (precioHawaiana > 0) {
    total.innerHTML+="<br/>el total de las pizzas es: " + precioHawaiana;
  }
  if (precioMexicana > 0) {
    total.innerHTML+="<br/>el total de las pizzas es: " + precioMexicana;
  }
  if (precioPollo > 0) {
    total.innerHTML+="<br/>el total de las pizzas es: " + precioPollo;
  }
  if (precioItaliana > 0) {
    total.innerHTML+="<br/>el total de las pizzas es: " + precioItaliana;
  }
  
  //bebidas
  
  if (precioCocaCola > 0) {
    total.innerHTML+="<br/>el total de las bebidas CocaCola es : " + precioCocaCola;
  }
  if (precioSprit > 0) {
    total.innerHTML+="<br/>el total de las bebida sprit es: " + precioSprit;
  }
  if (precioManzana > 0) {
    total.innerHTML+="<br/>el total de las bebida manzana es: " + precioManzana;
  }
  if (precioColombiana > 0) {
    total.innerHTML+="<br/>el total de las bebida colombiana es: " + precioColombiana;
  }
  
  //pasabocas
  
  if (precioPasteles > 0) {
    total.innerHTML+="<br/>el total de los pasteles es : " + precioPasteles;
  }
  if (precioDedos > 0) {
    total.innerHTML+="<br/>el total de los dedos es: " + precioDedos;
  }
  if (precioBuñuelos > 0) {
    total.innerHTML+="<br/>el total de los buñuelos: " + precioBuñuelos;
  }
  if (precioBocadillos > 0) {
    total.innerHTML+="<br/>el total de los bocadillos es : " + precioBocadillos;
  }
  if (precioPapas > 0) {
    total.innerHTML+= "<br/>el total de las papas es : " + precioPapas;
  }

let totalfactura=precioHawaiana+precioMexicana+precioPollo+precioItaliana+precioCocaCola+precioSprit+ precioManzana+precioColombiana+precioPasteles+precioDedos+precioBuñuelos+precioBocadillos+precioPapas+1500;
total.innerHTML+="<br/>el valor de la factura es: "+totalfactura;
total.innerHTML+="<br/>el valor del domicilio es : 1500 ";
}
