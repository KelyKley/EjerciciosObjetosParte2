var assert = require("assert");

//Ejecicio 1
function sumar(numInicial, numFinal){
  var objeto ={
    inicio: numInicial,
    final: numFinal
  };

resultado =0;
    for(i = objeto.inicio; i <= objeto.final; i++){
    resultado += i;

  }
  return resultado;
}


//Ejercicio 2
function superCoder(nombre, edad, ocupacion, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.ocupacion = ocupacion;
    this.genero = genero;
   this.mensaje = function mensaje(edad,ocupacion,genero){
        if(this.edad > 17 && (this.ocupacion.toLowerCase() == "web developer" || this.ocupacion.toLowerCase() == "estudiante laboratoria") && this.genero.toLowerCase() == "femenino"){
            return ("You´re awesome");
        }else {
            return ("Upsiii");
        }
    }
}
var code = new superCoder("Kely", 18, "Estudiante Laboratoria", "Femenino");


//Ejercicio 3
function arr(array) {

  var objeto = {};
  array.forEach(function(valor,indice){
    objeto["propiedad"+(indice+1)] = valor;
  });
  var llaves = Object.keys(objeto);
  var resultado = "";

  for (var i in objeto){
    resultado += i + "-->"+objeto[i]+";";
  }
  resultado = resultado.slice(0,-1);
  return resultado;
}
var numeros = new arr([6, 5, 4, 3, 2, 1]);

//Ejercicio 4
function datos(nombre, apellido, edad, genero, ciudad, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.ciudad = ciudad;
    this.pais = pais;
    this.ficha = function mostrarFicha(nombre,apellido,edad,pais){
        return ("Nombre: " + this.nombre + " " + this.apellido  + "  Edad: " + this.edad + "  País: " + this.pais);
    }
};
var persona = new datos("Kely", "Añamuro", 18, "Femenino", "Arequipa", "Perú");



//PRUEBAS UNITARIAS

describe ("Ejercicios Objetos II", function(){

    describe("Ejercicio 1", function (){
      it("La suma de numeros desde 1 hasta 10", function(){
        assert.equal(55, sumar(1,10));
      });
    });

    describe("Ejercicio 2", function(){
      it("Eres una mujer SuperCoder", function(){
        assert.equal("You´re awesome",code.mensaje());
      });
    });

    describe("Ejercicio 3", function(){
      it("Propiedades de objetos", function(){
        assert.equal("propiedad1-->6;propiedad2-->5;propiedad3-->4;propiedad4-->3;propiedad5-->2;propiedad6-->1", arr([6, 5, 4, 3, 2, 1]));
      });
    });

    describe("Ejercicio 4", function(){
      it("Ficha Personal", function(){
        assert.equal("Nombre: Kely Añamuro  Edad: 18  País: Perú" , persona.ficha());
      });
    });

});
