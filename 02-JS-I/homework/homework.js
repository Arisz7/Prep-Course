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
  return(suma);
  }
suma(2, 2);


function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var resta = x - y;
  return(resta);
}
resta(4, 2);


function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var multiplica = x * y;
  return(multiplica);
  }
multiplica(4, 2);




function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var divide = x / y;
  return(divide);
}
divide(4, 2);
 


function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( x == y ) {
    return(true);
  } else {
    return(false);
  }
} 
sonIguales();

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
   if (str1.length == str2.length) {
    return(true);
  } else {
    return(false);
  }
} 
tienenMismaLongitud('hi', 'hi');


function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num < 90) {
    return(true);
  } else {
    return(false);
  }
}
menosQueNoventa(80);


function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50) {
    return(true);
  } else {
    return(false);
  }
}
mayorQueCincuenta(60);


function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
   var resto = x % y;
  return(resto);
}
obtenerResto(21, 5);


function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
	if(num%2 ==0) {
		return(true);
	} else {
    if(num%2 ==1) {
		return(false);    
	}
 }
}
esPar(4);


function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código
  if (num %2 ==1) {
    return(true);
  } else {
    if( num %2 ==0) {
      return(false);
    }
  }
}
esImpar(3);

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return((Math.pow(num, 2)));
}
elevarAlCuadrado(2);


function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return((Math.pow(num, 3)));
}
elevarAlCubo(2);


function elevar(num, exponente) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return((Math.pow(num, exponente)));
}
elevar(2, 3)


function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return(Math.round(num));
}
redondearNumero(4.5);


function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return(Math.ceil(num));
}
redondearNumero(4.3);


function numeroRandom(num) {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return(Math.random());
}
numeroRandom(0, 1);


function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0) {
    return('Es positivo');
  } else {
    if ( numero < 0 ) {
      return('Es negativo');
    } else {
      if (numero === 0) {
        return(false);
      }
    }
  }
}
esPositivo(4);


function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return(str + "!");
}
agregarSimboloExclamacion("hello world");


function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return(nombre+" "+apellido);
}
combinarNombres('Soy', 'Henry');


function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return( `Hola ${nombre}!`);
}



function obtenerAreaRectangulo(largo, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return(largo * ancho);
}
obtenerAreaRectangulo(7, 5);


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return(lado*4);
}
retornarPerimetro(7);


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
return((base * altura)/2);
}
areaDelTriangulo(10, 5);


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
		 let resultado = (euro*1.2);
	   return(resultado);
	}
 deEuroAdolar(8);


  
function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí

if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U" || letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    return ("Es vocal");
}else{
      return ("Dato incorrecto");
 }
}
esVocal("a"); //Vocal!




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
