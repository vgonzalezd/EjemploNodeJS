/*
var a;

console.log(a);

a=1;
console.log(a);

a=false;
console.log(a);

a="HolaMUNDO";
console.log(a);

a={
  numero:1,
  miTexto:"texto1"
};
console.log(a);

a=["a", 1];
console.log(a);

function myFunction(nombre){
  console.log("hola "+ nombre);
}

myFunction("Vanessa");

var miPersona={
  nombre:"pedro"
};


var llamame=function(pedro){
  console.log("llamame: "+ pedro.nombre);
}


var llamame=function(numero){
  console.log("llamame: "+ numero);
}

llamame(miPersona);

var juan={
  numero:3108782414,
  getNumero: function(){
    return this.numero;
  }
}

llamame(juan.getNumero());






// Ciclos
var miEdad = 7;

for (var edad = 1; edad <= miEdad; edad++) {
  console.log(edad);
}

console.info('----------------------------');

var arregloEdad = [1, 5, 2, 6, 4, 7, 8, 12, 22];
for (item in arregloEdad) {
  console.log('ITEM #' + item + ': ' + arregloEdad[item]);
}

console.info('----------------------------');

for (item of arregloEdad) {
  console.log(item);
}

var miObjeto = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 20,
  signo: '+'
};

for (key in miObjeto) {
  console.log('ITEM -> ' + key + ': ' + miObjeto[key]);
}
*/

/*
// No se puede usar of para iterar sobre un objeto
for (item of miObjeto) {
  console.log(item);
}
*/

/*
// Trabajando con un objeto en forma de String
var data = `
{
  "nombre": "Diana",
  "apellido": "Parra",
  "edad": 22,
  "genero": "Mujer",
  "carrera": "Ingenieria Industrial",
  "graduada": false,
  "hijos": [{
    "nombre": "John",
    "apellido": "Martinez",
    "edad": 5
  }, {
    "nombre": "Katherin",
    "apellido": "Otalora",
    "edad": 8
  }],
  "esposo": {
    "nombre": "Carlos",
    "apellido": "Jimenez",
    "edad": 38
  }
}
`;

console.log(data);
var dataObjeto = JSON.parse(data);
console.log(dataObjeto);
*/

var fs = require("fs");
/*
// Trabajando con objeto JSON desde archivo externo

var datos = fs.readFileSync('../persona.json');
var persona = JSON.parse(datos);

persona.tieneHijos = function() {
  return this.hijos != undefined && this.hijos.length > 0;
}
console.log(persona.nombre + ' tiene hijos?: ' + persona.tieneHijos());

persona.tieneEsposo = function() {
  return this.estadoCivil == 'Casada' || this.esposo != undefined;
}
console.log(persona.nombre + ' tiene esposo?: ' + persona.tieneEsposo());

persona.separarse = function() {
  if (this.tieneEsposo()) {
    delete this.esposo;
    this.estadoCivil = 'Soltera';
    console.log('- ' + persona.nombre + ' se ha separado de su esposo.');
  } else {
    console.log('- ' + persona.nombre + ' no esta casada');
  }
}

persona.separarse();
console.log(persona.nombre + ' tiene esposo?: ' + persona.tieneEsposo());

var nuevosDatos = JSON.stringify(persona);
var nombreArchivo = 'Datos_' + persona.nombre + '_' + persona.apellido + '.json';

fs.writeFile(nombreArchivo, nuevosDatos);
*/



// Trabajando con Ciclo While
var datos = fs.readFileSync('./Datos_Diana_Parra.json');
var persona = JSON.parse(datos);

persona.tieneHijos = function() {
  return this.hijos != undefined && this.hijos.length > 0;
}

if (persona.tieneHijos()) {
  console.log('HIJOS DE ' + persona.nombre + ':');
  var numeroHijo = 0;

  while (numeroHijo < persona.hijos.length) {
    var hijo = persona.hijos[numeroHijo];

    console.log('Hijo #' + (numeroHijo + 1) + ': ' + hijo.nombre + ' ' + hijo.apellido);
    numeroHijo++;
  }
} else {
  console.log(persona.nombre + 'no tiene hijos');
}


var persona = {
  nombre: 'Juan',
  hijos: [],
  tieneHijos: function() {
    return this.hijos != undefined && this.hijos.length > 0;
  }
}
