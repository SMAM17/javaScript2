function hawaiana() {
  let hawaiana = document.getElementById("hawaiana").value;
  return hawaiana;
}

function mexicana() {
  let mexicana = document.getElementById("mexicana").value;
  return mexicana;
}
function pollo() {
  let pollo = document.getElementById("pollo").value;
  return pollo;
}
function italiana() {
  let italiana = document.getElementById("italiana").value;
  return italiana;
}

function cocaCola() {
  let cocaCola = document.getElementById("cocaCola").value;
  return cocaCola;
}
function sprit() {
  let sprit = document.getElementById("sprit").value;
  return sprit;
}
function manzana() {
  let manzana = document.getElementById("manzana").value;
  return manzana;
}
function colombiana() {
  let colombiana = document.getElementById("colombiana").value;
  return colombiana;
}

function pasteles() {
  let pasteles = document.getElementById("pasteles").value;
  return pasteles;
}

function dedos() {
  let dedos = document.getElementById("dedos").value;
  return dedos;
}
function buñuelos() {
  let pasteles = document.getElementById("buñuelos").value;
  return buñuelos;
}
function bocadillos() {
  let bocadillos = document.getElementById("bocadillos").value;
  return bocadillos;
}
function papas() {
  let papas = document.getElementById("papas").value;
  return papas;
}

//almaceno la cantidad de pizzas por el precio de cada una
let precioHawaiana = hawaiana() * 20000;
let precioMexicana = mexicana() * 23000;
let precioPollo = pollo() * 26000;
let precioItaliana = italiana() * 22000;

//almaceno la cantidad de bebidas por el precio de cada una
let precioCocaCola = cocaCola() * 3500;
let precioSprit = sprit() * 3500;
let precioManzana = manzana() * 3500;
let precioColombiana = colombiana() * 3500;

//almaceno la cantidad de pasabocas por el precio
let precioPasteles = pasteles() * 2500;
let precioDedos = dedos() * 1500;
let precioBuñuelos = buñuelos() * 2000;
let precioBocadillos = bocadillos() * 2000;
let precioPapas = papas() * 4000;

//pizzas

if (precioHawaiana > 0) {
  total.innerHTML("el total de las pizzas es: " + precioHawaiana);
}
if (precioMexicana > 0) {
  total.innerHTML("el total de las pizzas es: " + precioMexicana);
}
if (precioPollo > 0) {
  total.innerHTML("el total de las pizzas es: " + precioPollo);
}
if (precioItaliana > 0) {
  total.innerHTML("el total de las pizzas es: " + precioItaliana);
}

//bebidas

if (precioCocaCola > 0) {
  total.innerHTML("el total de las bebidas CocaCola es : " + precioCocaCola);
}
if (precioSprit > 0) {
  total.innerHTML("el total de las bebida sprit es: " + precioSprit);
}
if (precioManzana > 0) {
  total.innerHTML("el total de las bebida manzana es: " + precioManzana);
}
if (precioColombiana > 0) {
  total.innerHTML("el total de las bebida colombiana es: " + precioColombiana);
}

//pasabocas

if (precioPasteles > 0) {
  total.innerHTML("el total de los pasteles es : " + precioPasteles);
}
if (precioDedos > 0) {
  total.innerHTML("el total de los dedos es: " + precioDedos);
}
if (precioBuñuelos > 0) {
  total.innerHTML("el total de los buñuelos: " + precioBuñuelos);
}
if (precioBocadillos > 0) {
  total.innerHTML("el total de los bocadillos es : " + precioBocadillos);
}
if (precioPapas > 0) {
  total.innerHTML("el total de las papas es : " + precioPapas);
}

//donde voy a reflejar la factura
let total = document.getElementById("total");

total.innerHTML = precioHawaiana +=
  "<br>" +=
  precioMexicana +=
  "<br>" +=
  precioPollo +=
  "<br>" +=
  precioItaliana +=
  "<br>" +=
  precioCocaCola +=
  "<br>"+=
  precioSprit +=
  "<br>" +=
  precioManzana +=
  "<br>"+=
  precioColombiana +=
  "<br>"+=
  precioPasteles +=
  "<br>"+=
  precioDedos +=
  "<br>"+=
  precioBuñuelos +=
  "<br>"+=
  precioBocadillos +=
  "<br>"+=
  precioPapas
