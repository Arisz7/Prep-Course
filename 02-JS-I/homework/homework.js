// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 27;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:

const nuevaResta = 10 - null === 5 === false;
console.log(nuevaResta);
//Pocas palabras es falso pero por si las dudas

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * null === 40 === false;
console.log(nuevaMultiplicacion);
//Es falso


// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === null === false;
//Es falso

// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return(str)
}
devolverString("Henry")


function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var suma = x + y;
  return console.log(suma);
  }
suma(2, 2);


function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var resta = y - x;
  return console.log(resta);
}
resta(4, 2);

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var multiplica = x * y;
  return console.log(multiplica);
  }
multiplica(4, 2);




function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var divide = x / y;
  return console.log(divide);
}
divide(4, 2);
 


function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( x === y ) {
    return console.log(true);
  } else {
    return console.log(false);
  }
} 
sonIguales();

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  var str1 = "Hola "
  var str2 = "Hola"
  if (str1 === str2) {
    return console.log(true);
  } else {
    return console.log(false)
  }
} 
tienenMismaLongitud();

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  var num = 80;
  if(num < 90) {
    return console.log(true);
  } else {
    return console.log(false)
  }
}
menosQueNoventa();


function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  var num = 60;
  if (num > 50) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}
mayorQueCincuenta();


function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
   var resto = x % y;
  return console.log(resto);
}
obtenerResto(21, 5);


function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  	var num = 4;
	if(num%2 ==0) {
		return console.log(true);
	} else {
    if(num%2 ==1) {
		return console.log(false);    
	}
 }
}
esPar();


function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
 var num = 3;
  if (num %2 ==1) {
    return console.log(true);
  } else {
    if( num %2 ==0) {
      return console.log(false);
    }
  }
}
esImpar();

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var num = 2
  return console.log((Math.pow(num, 2)));
}
elevarAlCuadrado();


function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return console.log((Math.pow(num, 3)));
}
elevarAlCubo(2);


function elevar(num, exponente) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return console.log((Math.pow(num, exponente)));
}
elevar(2, 3)


function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var num = 4.5
  return console.log(Math.round(num));
}
redondearNumero();


function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var num = 4.3
  return console.log(Math.ceil(num));
}
redondearNumero();


function numeroRandom(num) {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return console.log(Math.random());
}
numeroRandom(0, 1);


function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0) {
    return console.log('El numero es positivo');
  } else {
    if ( numero < 0 ) {
      return console.log('El numero es negativo');
    } else {
      if (numero === 0) {
        return console.log(false);
      }
    }
  }
}
esPositivo(4);


function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return console.log(`"${"Hello World"}`+ str);
}
agregarSimboloExclamacion(`${'!'}"`);


function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
 nombre = "Soy"
  apellido = "Henry"
  return console.log(""+`"${nombre}`+" "+" "+`${apellido}"`+"");
}
combinarNombres();


function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
 const saludo = `"${'Hola'}` + " " 

 const completo = saludo.concat(nombre)
 return console.log(completo)  
}
obtenerSaludo(`${'Martin!'}"`);


function obtenerAreaRectangulo(largo, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
 var largo = 7;
 var ancho = 5;
  return console.log(largo * ancho);
}
obtenerAreaRectangulo();


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var lado = 3 + 7;
  return console.log(lado);
}
retornarPerimetro();


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
 var base = 10
 var altura = 5
return console.log(base*altura/2);
}
areaDelTriangulo();


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
   var dolar = 0.95;
		 let resultado = euro * dolar/1.2;
	   return console.log(resultado)
	}
 deEuroAdolar(8);


  
function esVocal(char){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if(["a", "e", "i", "o", "u"].includes(char.toLowerCase())){
    console.log("Vocal!")  
  }else {
    console.log("Dato incorrecto!")
  }
}

esVocal("a"); //Vocal!
esVocal("e"); //Vocal!
esVocal("i"); //Vocal!
esVocal("o"); //Vocal!
esVocal("u"); //Vocal!
esVocal("j"); //Dato incorrecto!
esVocal("test"); //Dato incorrecto!



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
