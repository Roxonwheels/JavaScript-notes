//-------------------- APUNTES JAVASCRIPT ---------------------
// Usaremos console.log() para mostrar resultados en la consola.


// VARIABLES    -     Almacenan cierta informacion
//---------------------------------------------------------------------------------
// Variable - caja para almacenar info
// Nombre variable - etiqueta caja
// Valor variable - info en la etiqueta

// Declaracion de variables (camelCase)
    // let (valor puede cambiar) -   const  (valor constante)
// const variableName = 'IronHack'    (const obliga a declarar y dar valor a la vez)    
    let variableName    // (declaracion de variable)
        variableName = 'IronHack'  // (dar valor a la variable)

    console.log(variableName)  // 'IronHack'

// Cambiar valor de una variable 
    let variableName = 'Bootcamp'
    console.log(variableName)    // 'Bootcamp'

// typeof --> Al crear la variable desfinimos su tipo.para saber cual es usamos typeof
    let food
    food = 'Steak'
    console.log(food, typeof food)  // Steak , string
    console.log('Value: ', food, 'Type: ', typeof food) // Value: food Type: string

    food = 20
    console.log('Value: ', food, 'Type: ', typeof food)  // Value: 20 Type: number
// si usamos const para declarar la variable, no podemos cambiar el valor ni el tipo.

// DATOS PRIMITIVOS  
    // String  -->
    // Number  -->
    // Boolean  -->

// DATOS NO PRIMITIVOS
    // Object  -->
    // Array  -->

    
    
//  NUMEROS Y OPERADORES BASICOS (en orden de prioridad al ejecutar)
//------------------------------------------------------------------------------------

    // 1	()  	parantess
    // 2	**	    exponentes
    // 3	*	    multiplication
    // 4	/	    division
    // 5	+	    suma
    // 6	-	    resta

// %  modulo    (para saber si es multiplo de otro numer, te da el resto de la operacion)
// si un numero es modulo de otro, el resultado (resto) es cero 0.
    
    // 4 / 2 = 2
    console.log(4 / 2);
    //With a remainder of 0
    console.log(4 % 2);

    // 7 / 2 = 3.5
    console.log(7 / 2);
    //With a remainder of 1
    console.log(7 % 2);

    // 8 is indeed a multiple of 2!
    console.log(8 % 2 === 0);
    // 9 is NOT a multiple of 2!
    console.log(9 % 2 === 0);

// Operadores de asignacion  ' = '

    // Asignación	                    x = y	    N / A
    // Asignación de adición	        x += y	    x = x + y
    // Asignación de resta	            x -= y	    x = x - y
    // Asignación de multiplicación 	x *= y	    x = x * y
    // Asignación de división	        x /= y	    x = x / y
    // Asignación restante	            x %= y	    x = x % y
    // Asignación de exponenciación	    x **= y	    x = x ** y

//NUMEROS como tipo de datos.
// Metodos para el redondeo
    // Math.floor() --> redondea hacia abajo
    // Math.ceil()  --> redondea hacia arriba
    // Math.round()  --> redondea al mas cercano

    // .toFixed(n)  --> redondea a 'n' decimales    (devuelve un string)
        let anyNumber = 5.679345;
        let roundedToOne = anyNumber.toFixed(1);
        console.log(roundedToOne); // <== "5.7"

// Number()  --> convertir un string en un number
    let roundedToOne = Number(anyNumber.toFixed(1));
    console.log(roundedToOne); // <== 5.7

// Math.random()  --> devuelve un numero aleatorio del 0 al 1 (incluye el 0 , pero no incluye 1)
    console.log(Math.random()); // <== 0.010086087097095797
    console.log(Math.random()); // <== 0.24143918045188073
    console.log(Math.random()); // <== 0.23920890331219713
    // para generar un numero aleatorio entre 0 y 50
    Math.random() * 50;

//Math.max(a,b,c...)  --> devuelve el mayor numero de los argumentos
    console.log(Math.max(2, 8, -10, 0, -4)); // <== 8

// Math.min(a,b,c...) --> devuelve el menor numero de los argumentos
    console.log(Math.min(1, 2, 0, -5)); // <== -5

//Number.isInteger() --> comprobar si es un numero entero
    console.log(Number.isInteger(2017)) // --> true


// STRINGS  ( secuencia de caracteres entre comillas "" , '' , ``)
//----------------------------------------------------------------------------------
// String interpolation  `${}`   --> Permite agregar el valor de una variable dentro de una string.
    let language = 'JavaScript';
    console.log(`I am learning ${language}!`); //  "I am learning JavaScript!"
// Concatenación  -->  agrega caracteres a las strings con  +  o  +=
    let age = 21;
    console.log(`I am ${age} years old`);
    console.log("How old are you? Seriously ...");
    console.log(`I am ${age+12} years old.`);  // "I'm 33 years old"

// .length   property --> Define longitud(numero de caracteres) en la string
    const fact = 'I love Harley Davidson!';
    console.log(`"${fact}" is a string and it is length is ${fact.length}.`);
    // "'I love Harley Davidson!' is a string and it is length is 23."

//.toUpperCase()  method  --> Cambia todas las letras a mayusculas
    let name = "sandra";
    let uppercased = name.toUpperCase();
    console.log(uppercased); // => SANDRA
//.trim() --> elimina los espacios en blanco al principio y al final del string
    let lastName = "   Montero  "
    console.log(lastName.trim())
    // "Montero" 
// index  []  --> accede a un caracter de la string. index empieza siempre desde 0
// se accede indicando entre [] la posicion del caracter.
    const greeting = "Hello";
    console.log(greeting[0]); // => H
    console.log(greeting[4]); // => o
    console.log(greeting[9]); // => undefined
    console.log(greeting[-2]); // => undefined  (si no existe devuelve undefined)

//indexOf()  method --> accede a una subcadena o caracter en concreto
    const favoritePhrase = "Don't be evil";
    console.log(favoritePhrase.indexOf("Don't")); 
        // => 0
    console.log(favoritePhrase.indexOf("e")); 
        // => 7 because indexOf prints the FIRST occurance
    console.log(favoritePhrase.indexOf("z")); 
        // -1 since it's not found

//.indexOf(substr) --> encuentra una subcadena con un caracter en particular. Si no existe devuelve -1
    const message = "Don't be sad, be happy!";
    console.log(message.indexOf("Don't")); // <== 0
    console.log(message.indexOf('Be')); // <== -1 (capitalized Be ≠ lowercased be)
    console.log(message.indexOf('t')); // <== 4
    
    //la subcadena 'be' aparece mas de una vez, podemos omitir la primera indicando la posicion a partir de la que queremos buscar.
    //en este caso la priemera termina en el 7, por lo que buscaremos a partir de esa posicion
        console.log(message.indexOf('be')); // <== 6
        console.log(message.indexOf('be', 7)); // <== 14

    // .lastIndexOf(substr) --> busca subcadena desde el final.
        const message = "Don't be sad, be happy!";
        console.log(message.lastIndexOf('be'));
            // The index of the first "be" from the end is 14

// .repeat()  --> repite el string indicado las veces que pidamos
    console.log("$".repeat(3)); // "$$$"
    console.log("la".repeat(10));  // "lalalalalalalalalala"

// podemos acceder a una subcadena con siferentes metodos
    // .substring ()
        const message = "Don't be sad, be happy!";
        let withSubstring = message.substring(0, 3);
        console.log(withSubstring); // <== Don

    // .substr ()
        let withSubstr = message.substr(0, 3);
        console.log(withSubstr); // <== Don

    //.slice ()  --> el unico que admite valores negativos, para empezar por el final
        let withSlice = message.slice(0, 3);
        console.log(withSlice); // <== Don

//.localeCompare ()  --> ordenar strings
// devuelve 1 si 'str1 > srt2'  // devuelve -1 si 'str1 < str2'  //  devuelve 0 si str1 = str2  
    'str1'.localeCompare('str2');
    console.log('barcelona'.localeCompare('miami')); // -1
    console.log('miami'.localeCompare('barcelona')); // 1
    console.log('Miami'.localeCompare('miami')); // 1
    
// startsWith()  method  --> indica si string comienza con los caracteres indicados. devuelve true o false
    const str = 'To be, or not to be, that is the question.';
    console.log(str.startsWith('To be')); // true
    console.log(str.startsWith('not to be')); // false
    console.log(str.startsWith('not to be', 10)); // true

// endsWith() method -->indica si una string termina con los caracteres indicados. Devuelve true o false
    const str = 'To be, or not to be, that is the question.';
    
    console.log(str.endsWith('question.')); // true
    console.log(str.endsWith('to be')); // false
    console.log(str.endsWith('to be', 19)); // true

// includes()  method  --> indica si una subcadena se encuentra dentro del string. Devuelve true o false.
    const str = 'To be, or not to be, that is the question.';
    
    console.log(str.includes('to be')); // true
    console.log(str.includes('question')); // true
    console.log(str.includes('nonexistent')); // false
    console.log(str.includes('To be', 1)); // false

// .slice(start, end)  -->  extrae una parte de la string,
// indicar entre () posicion inicial y la final(no incluida)
    let tales = 'I have a Harley Davidson motorcycle!'
    console.log(tales.slice(9,15))   // "Harley"
        //empieza a contar en la posicion 9 hasta la 15 (no incluida)
    console.log(tales.slice(9))      // "Harley Davidson motorcycle!"
        //empieza en la 9 hasta el final del string
    console.log(tales.slice(-11))     // "motorcycle!"
        //empieza a contar en la posicion 11 desde el final, hasta el final del string.

// charAt(n)    method --> muestra el caracter n en la cadena, indicando posicion (desde 0)
    const greeting = 'Hello there!';
    console.log(greeting.charAt(0)); // <== H
    console.log(greeting.charAt(5)); // <== " "

    //tambien podemos acceder a caracteres con el [index]
        console.log(greeting[0]); // <== H
        console.log(greeting[9]); // <== r
        console.log(greeting[-2]); // undefined

// Caracteres especiales
    // backslash escape --> cuando hay que convertir un caracter especial " ' " en parte del string
    // se coloca \ delante de '
        const mood = "I\'m OK.";
        console.log(mood); // <== I'm OK.
    
    // multilane strings --> strings de varias lineas
    // se usa \n para saltar de linea
        const fruits = ' 1. banana \n 2. apple \n 3. orange \n 4. cherry';
        console.log(fruits);
            // 1. banana,
            // 2. apple,
            // 3. orange,
            // 4. cherry





// BOOLEANOS   --> devuelven True or False
//---------------------------------------------------------------------------------------------------------

//Operadores de comparacion
    // Expresión                	Descripción
    // exp1 ==exp2  	True si tienen el mismo valor.
    // exp1 ===exp2	    True si tienen el mismo valor y el mismo tipo de valor.
    // exp1 !=exp2  	True si no tienen el mismo valor.
    // exp1 !==exp2	    True si no tienen el mismo valor o el mismo tipo de valor.
    // exp1 <exp2	    True si el valor de exp1 es menor que el valor de exp2 .
    // exp1 >exp2	    True si el valor de exp1 es mayor que el valor de exp2 .
    // exp1 <=exp2	    True si el valor de exp1 es menor o igual que el valor de exp2 .
    // exp1 >=exp2	    True si el valor de exp1 es mayor o igual que el valor de exp2 .

    2 == '2'; // => true
    2 === '2'; // => false
    2 === 2; // => true

//Operadores logicos    &&  ||  !   --> and, o, no
    // &&  --> and --> Devuelve True si ambos son verdaderos
    // ||  --> o   --> Devuelve True si al menos uno es verdaderos.Si ambos son falsos, devuelve false.Devuelve falso
    // !   --> not --> Devuelve lo opuesto. Si el operando es True devuelve False y viceversa.

    console.log(11 % 3 === 2) //--> true
    console.log(17 == '17') //  --> true (porquue tienen el mismo valor)
    console.log(17 === '17') // --> false ( porque tienen el mismo valor, pero no el mismo tipo)
    console.log(!true || false) // --> false (porque ambos son falsos)
 
//Truthy and Falsy
// Todos los valores son verdaderos a no ser que se definan como falsos. Valores Falsos:
    // 0;        <-- The Number zero
    // ('');    <-- An empty String
    // false;    <-- The Boolean value: false
    // undefined;    <-- variable declarada pero sin valor
    // null;     <-- valor no existente
    // NaN;     <-- Not a Number (cuando aplicas metodos numericos a datos que no lo son)





// DECLARACIONES CONDICIONALES
//---------------------------------------------------------------------------------------------------------

// if ()  -->ejecuta bloque de instrucciones si la condicion es verdadera
    if (age > 18){
        console.log('Welcome to Ibiza')
    }
// else -->  se ejecuta cuando la if declaration es falsa    
// if ()  y operadores logicos --> && || !
    //Example 1
    let myName = 'Rocio'
    let yourName = 'Igor'
    let rocioAge = 32
    let igorAge = 28
    if(rocioAge > 18 && igorAge > 18){
    console.log(`Congrats ${myName} and ${yourName}, you can ride a bike.`)
    } else {console.log('Maybe next time')
    }
        //"Congrats Rocio and Igor, you can ride a bike."


    //Example 2
    let name = 'Rocio'
    let nameLength = name.length
    if (nameLength == 5){
    console.log('You win')
    }else{console.log('Try again!')
    }
        // "You win"

// else if  declaration  --> Encadena multiples condiciones. Se ejecuta cuando if, o la anterior else if es falsa.
    //Example 3
    let age = 20
    if(age > 21){
    console.log('You can drink alcohol wherever!')
    }else if (age < 21 && age > 18){
    console.log('You can drink alcohol in Spain, but not in USA.')
    } else {console.log('You are a baby, take a juice!')
    }
        // if age === 12 --> "You are a baby, take a juice!"
        // if age === 20 --> "You can drink alcohol in Spain, but not in USA."
        // if age === 23 --> "You can drink alcohol wherever!"


// switch declaration -->  Se ultiliza cuando existen muchas opciones posibles (condiciones)

    //Example 
    let pet = "dog";

    switch (pet) {
    case "cat":
        console.log("I will be break a lot of things but hey, I'm adorable ... ")
        break;
    case "dog":
        console.log("I will be very annoying but I'm your best friend ... ")
        break;
    case "hamster":
        console.log("I will be impossible to find but I'm reeeeaaaally cute ... ")
        break;
    default:
        console.log("I'm a special pet!")
        break;
    }




// LOOPS AND ITERATIONS  -->  Bucles - repite el codigo hasta que sea True
//----------------------------------------------------------------------------------
// 1-hay un punto de partida 
// 2- condicion donde acaba el bucle (lo que dura)
// 3- incrementar uno cada vez

// while loop
    // Example: cuenta desde 1 a 10
        let counter = 1   // --> punto de partida  1
        while (counter <= 10){  // -->  se repite mientras sea igual o menor que 10
            console.log(counter)  // --> se ejecuta el codigo
            counter += 1  // --> la siguiente vuelta se le suma 1 al counter ( counter = counter + 1)
        }

    // Example: cuenta atras de 30 a 0
        let counter = 30
        while( counter >= 0){
        console.log(counter)
        counter-=1
        }

// For loop  -incluye declaracion de variable en el loop
    // Example: cuenta desde 1 a 10
    for(let i=1; i<=10;i++){
    console.log(i)
    }

    // Example: cuenta atras de 30 a 0
    for(i=30; i>=0; i++){
    console.log(i)
    }

// break / continue instructions
// break --> para el bucle
    for (let i = 1; i <= 30; i++){
        if (i === 21){
        console.log("TWENTY ONE! Black Jack, dale!");
        break;
        } else {
        console.log(i);
        }
    }
//continue --> ejecuta la condicion y sigue el bucle
    //example: salta los multiplos de 3
    for (let i = 1; i <= 30; i++){
        if (i % 3 === 0) { 
          continue; 
        }
        console.log(i);
      }
    
    // Example Lagartija game
    for(let i=1; i<=21; i++){
        if(i % 7 === 0) 
        console.log('Lagartija')
        {console.log(i)}
      }
    
      //Example 3  -- > General
      for (let i = 1; i <= 50; i++) {
        if (i % 10 === 0 || i % 15 === 0) {
          console.log('Donkey!');
        }
        if (i % 5 === 0) {
          continue;
        }
        console.log(i);
      }
  
      

       
//  FUNCIONES - conjunto de declaraciones  (camelCase)
//-------------------------------------------------------------------------------------------------------
// Pueden contener parametros entre (), seran reemplazados por valores reales en el momento que se ejecute la funcion.
// Declaracion --> crear una funcion sin ejecutarla
    function sayHello() {
        console.log('Hello!');
    }

// Invocacion (llamar a la funcion) - ejecutarla
    sayHello(); // => Hello!

// Expresiones de funcion. --> Asignar a una variable
    // function declaration (statement)
    function welcomeMessage(message) {
        return message;
    }
    // function assigned to a variable
    const greeting = welcomeMessage('So nice to have you here! Welcome!');
    
    console.log(greeting); // So nice to have you here! Welcome!
    

//Callbacks --> funciones de devolucion de llamada
    // setTimeout() --> ejecucion retrasada de funciones
    function eatDinner() {
        setTimeout(function () {
          console.log('Eating the dinner!');
        }, 1000);
      }
      
      function eatDessert() {
        console.log('Eating the dessert!');
      }
      
      eatDinner();
      eatDessert();
      
      // the console:
      // Eating the dessert!
      // Eating the dinner!
      

    // al pasar una funcion como argumento de otra, nos aseguramos que la primera se ejecute y nos devuelva algun valor que necesitemos para la seguda.
    function eatDinner(callback) {
        console.log('Eating the dinner!');
        callback();
    }
    
    function eatDessert() {
        console.log('Eating the dessert!');
    }
    
    eatDinner(eatDessert); // <== make sure when invoking callback func NOT tu use ()
    
    // Eating the dinner!
    // Eating the dessert!
 
// Funcion anonima (sin nombre)
const calcSum = funtcion(a,b){
    return a + b;
  }

// Funciones anonimas como argumentos de otra funcion
    function printName(name, anonFunc) {
        anonFunc(name);
    }
    
    printName('sandra', function (name) {
        console.log(name[0].toUpperCase() + name.slice(1));
    });
    
    // => Sandra

// Funciones anonimas como argumentos en el setTimeout()
    setTimeout(function () {
        console.log('I am anonymous function and I will execute after 1 second.');
      }, 1000);
      
      // ... nothing happens for 1 second
      // => I am anonymous function and I will execute after 1 second.
    // Estructurarlas bien para poder usarlas cuando queramos
        function notifyUser() {
            console.log('I am anonymous function and I will execute after 1 second.');
        }
        
        setTimeout(notifyUser, 1000);


//Example
    // declarar funcion
        function Sumar(num1,num2){
        return num1+num2
        }
    //Invocar funcion
        Sumar(8,9);
// Example
    function calculator(symbol, num1, num2) {
        if (symbol === '+') {
        console.log(num1 + num2);
        } else if (symbol === '-') {
        console.log(num1 - num2);
        } else if (symbol === '*') {
        console.log(num1 * num2);
        } else if (symbol === '/') {
        console.log(num1 / num2);
        } else {
        console.log('Symbol unknown');
        }
    }
    
    calculator('+', 5, 3); // <= 8
  

// Es importante recordar que return y console.log son dos cosas distintas.
// console.log declaración solo se usa para imprimir contenido en la consola donde podemos verlo.
// Return se utiliza para devolver un valor de una función. Debe utilizar return para asegurarse de que la función devuelve un valor.

    //EXAMPLE FUNCTION
    function colorMix(color1,color2){
        if((color1==='red' && color2==='blue')||(color1==='blue'&& color2==='red')){
          return 'violet'
        } else if ((color1==='red' && color2==='yellow')||(color1==='yelow' && color2==='red')){
          return 'orange'
        } else if ((color1==='blue' && color2==='yellow')||(color1==='yellow' && color2==='blue')){
          return 'green'
        } else { return 'Insert color'}
      }
      
      const myColor = colorMix('red', 'yellow') // convertir funcion en variable. Parametros dados.
      
      console.log(myColor)

// Funciones de Flecha
        // function expression syntax
        const greeting = function (name) {
            console.log(`Hello, ${name}!`);
        };
        
        // arrow function syntax
        const greeting = name => {
            return name;
        };
  
// This --> se refiere al objeto literal que estamos declarando.
    const user = {
        name: 'ana',
        age: 29,
        getOlder: function () {
        console.log(this);
        console.log(this.name);
        }
    };
    
    user.getOlder();
    // => { name: 'ana', age: 29, getOlder: [Function: getOlder] }
    // => ana
  
// setInterval
    const user = {
        name: 'ana',
        age: 29,
        getOlder: function () {
        setInterval(() => {
            this.age += 1;
            console.log(this.age);
        }, 1000);
        }
    };
    
    user.getOlder();
    // 30
    // 31
    // 32
    // 33
  
// arguments object --> representa todos los rgumentos pasados a la funcion.
    // usmos [index] para accder a ellos
        function printSomething() {
            console.log('arguments length: ', arguments.length);
            console.log('all: ', arguments);
            console.log('first arg: ', arguments[0]);
            console.log('second arg: ', arguments[1]);
        }
        
        printSomething('hi', 'there');
        
        // arguments length:  2
        // all:  [Arguments] { '0': 'hi', '1': 'there' }
        // first arg:  hi
        // second arg:  there
        
    // usos
        function printArgs() {
            for (let i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
            }
        }
        
        printArgs('hey', 'there', 'ironhacker');
        
        // hey
        // there
        // ironhacker



//   ARRAYS  -->  []    -->   Array literal
//----------------------------------------------------------------------------------------------------------------
// Estructura de datos que almacenan multiples variables / valores. Coleccion ordenada de elementos.
    const animalsArray = ['dog', 'cat', 'snake'];
// Acceder a los elementos:
    // element [lo que esta dentro, estan separados por comas ',']
    // los elementos estan numerados, comenzando por index 0
    // .length --> obtener longitud de la matriz
        const animalArray = ["dog", "cat", "fish"];
        console.log(`The length of the animal array is: ${animalArray.length}.`);
            //"The length of the animal array is: 3."
    // .length -1  --> acceder al ultimo elemento de la matriz
        const animalArray = ["dog", "cat", "fish"];
        const lastIndex = animalArray.length - 1;
        const lastElement = animalArray[lastIndex];
        console.log(lastElement);   // => fish

// Agregar y eliminar elementos
// AGREGAR
    // .push()  --> agrega un nuevo elemento al final de su matriz.
        const animalArray = ["dog", "cat", "fish"];
        console.log(`Before: ${animalArray}`); // => Before: dog,cat,fish
        animalArray.push("bird");
        console.log(`After: ${animalArray}`); // => After: dog,cat,fish,bird

    //  .unshift() --> agrega un elemento al principio de la matriz.
        const animalArray = ["dog", "cat", "fish"];
        animalArray.unshift('tiger')
        console.log(animalArray) // --> ["tiger","dog","cat","fish"]

//ELIMINAR        
    //  .pop() --> elimina elemento del final de una matriz.
        const animalArray = ["dog", "cat", "fish"];
        animalArray.pop()
        console.log(animalArray) //  -->  ["dog","cat"]
    
    //  .shift()  --> elimina elementos del principio de la matriz
        const animalArray = ["dog", "cat", "fish"];
        animalArray.shift()
        console.log(animalArray)  //--> ["cat","fish"]

//SUSTITUIR        
    // .splice() --> elimina o agrea items en cualquier posición.
        // ELIMINAR. Contiene 2 argumentos. El primero indica index position (desde donde empezamos a contar)
        //El segundo indica cuantos items vamos a eliminar.
            const animalArray = ["dog", "cat", "fish"];
            animalArray.splice(1,1)
            console.log(animalArray) // --> ["dog","fish"]

        // AGREGAR. Contiene 3 argumentos. Index, valor 0, y el que queremos añadir.
            const animalArray = ["dog", "cat", "fish"];
            animalArray.splice(1,0,'bird')
            console.log(animalArray) //--> ["dog","bird","cat","fish"]

        // SUSTITUIR. 3 argumentos. Index, cuantos items eliminamos, y el que vamos a añadir
            const animalArray = ["dog", "cat", "fish"];
            animalArray.splice(1,1,'bird')
            console.log(animalArray)  // --> ["dog","bird","fish"]


    // Cuando eliminamos un elemwnto se queda guardado en la variable por si los necesitamos mas adelante.
        const animalArray = ['dog', 'cat', 'fish'];
        let myFirstAnimal = animalArray.shift();  // remove first element
        let myLastAnimal = animalArray.pop(); // remove last element
        
        console.log(animalArray); // => ["cat"]
        console.log(myFirstAnimal); // => "dog"
        console.log(myLastAnimal); // => "fish"
        
    //Example general
    const myArray = ['Honda','Yamaha','Kawasaki','Ducati','Aprilia']
    lastElement = myArray.pop()
    firstElement = myArray.shift()
    myArray.unshift(lastElement)
    myArray.push(firstElement)

    console.log(myArray)    // -->  ["Aprilia","Yamaha","Kawasaki","Ducati","Honda"]


// Arrays  &  Loops
    // For  --> index empieza en 0. Primer element del array, sigue hasta que i alcanza array.length
        const animalArray = ["dog", "cat", "fish"];
        for(i=0; i= animalArray.length; i++){
        console.log(`Index: ${i} - element: ${animalArray[i]}`)
        }
        // "Index: 0 - element: dog"
        // "Index: 1 - element: cat"
        // "Index: 2 - element: fish"
    
    // While --> (igual que for) index empieza en 0. Primer element del array, sigue hasta que i alcanza array.length
        const animalArray = ["dog", "cat", "fish"];
        for(i=0; i < animalArray.length; i++){
        console.log(`Index: ${i} - element: ${animalArray[i]}`)
        }
        "Index: 0 - element: dog"
        "Index: 1 - element: cat"
        "Index: 2 - element: fish"
    
    // Example loop & array   (Suma de elementos de un array)

        const prices = [10.99, 44.56, 112.79, 3, 5];
        let sum = 0; // start value for the sum
        for(let i=0; i < prices.length; i++){
        sum += prices[i]
        }
        sum = Math.round(sum)  // ->   Redondear sin decimales
        console.log(sum)

            // 176.34  -->  Primer resultado sin Math.round
            // 176 -->  Resultado final, redondeado sin decimales
           
    // Example --> Array devuelve cada elemento individualmente
        let motorcycleBrands = ['Honda', 'Yamaha', 'Ducati', 'Aprilia', 'Kawasaki']
        for (let i = 0; i < motorcycleBrands.length; i++){
        console.log(motorcycleBrands[i])
        }
            // "Honda"
            // "Yamaha"
            // "Ducati"
            // "Aprilia"
            // "Kawasaki"

            
    // Example general
        let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer'];
        seriesPending.push('Charmed')
        for (let i=0; i<seriesPending.length; i++){
        console.log(seriesPending[i]);
        if(seriesPending[i]==='Boolean 99'){
            console.log('Found it!')
        }
        }

        let seriesWatching = []
        let firstElement = seriesPending.shift()
        seriesWatching.push(firstElement)
        console.log(seriesWatching.length + ',' + seriesPending.length )        
            // "Breaking Bug"
            // "Game of Drones"
            // "Boolean 99"
            // "Found it!"
            // "Arrested Developer"
            // "Charmed"
            // "1 ,4"

//  Arrays as arguments        (matrices como argumentos)
    // Metemos bucle dentro de una funcion para poder invocarla cuando queramos
    // Despues invocamos la funcion metiendo el array como argumento.
        function separateElementsOfArray (arr){
            for (let i = 0; i < arr.length; i++){
                console.log(arr[i])
            }
        }
    //De esta manera, puedo invocar a la funcion cuando quiera, poniendo distintos argumentos.

        separateElementsOfArray(['Honda', 'Yamaha', 'Ducati', 'Aprilia', 'Kawasaki'])
            // "Honda"
            // "Yamaha"
            // "Ducati"
            // "Aprilia"
            // "Kawasaki"

// .split()  --> permite separar los elementos de un string y nos devuelve un array
    let phrase = "This is long enough for a string to count it words";

    let words = phrase.split(" "); 

    console.log(words); // --> devuelve cada palabra separada
    console.log(words[0]); // --> devuelve paralabra en posicion [0]
    console.log(words.length); // --> devuelve numero de palabras
        // ["This","is","long","enough","for","a","string","to","count","it","words"]
        // "This"
        // 11


// .forEach
    // El método itera a través de todos los elementos de una matriz, y PARA CADA elemento de la matriz,
    //  llamará a otra función, pasando en ella cada elemento, uno por uno.
        //Sin parametros --> llamara a la funcion tantas veces como elementos estén en la matriz
            ['a', 'b'].forEach(function () {
                console.log('hi!');
            });
                // => hi!
                // => hi!

        // Primer parametro --> elemento
        // Si pasamos un parámetro, será igual a cada elemento en cada iteración.
            [1, 2, 3, 4].forEach(function (element) {
                console.log(element * 2); // we can access each element inside!
            });
                // => 2
                // => 4
                // => 6
                // => 8

        // Segundo parametro: index
            const raceResults = ['Helen', 'John', 'Peter', 'Merry'];
            raceResults.forEach(function (elem, index) {
            console.log(elem + ' finished the race in ' + (index + 1) + ' position!');
            });

                // => Helen finished the race in 1 position!
                // => John finished the race in 2 position!
                // => Peter finished the race in 3 position!
                // => Merry finished the race in 4 position!

// .map()  --> recorre el array como .forEach, pero necesita return.
    const foods = ['pizza', 'sandwiches', 'ice cream'];
    const capsFoods = foods.map(function (food) {
    return food.toUpperCase();
    });
    
    console.log(capsFoods);


// .reduce()  --> convierte una lista de valores en un valor
    // accumulator: valor acumulado de cada llamada. En la primera ronda asumimos que es el primer valor de la matriz.
    // currentValue: elemento actual en cada iteracion que se agregará al acumulador.
        const numbers = [2, 4, 6, 8];
    
        const total = numbers.reduce(function (accumulator, currentValue) {
        console.log('accumulator is: ', accumulator, 'and current value is: ', currentValue);
        return accumulator + currentValue;
        });
        
        console.log('total is: ', total);

    //Suma de los elementos de un array
        const numbers = [2, 4, 6, 8];
        const total = numbers.reduce(function (accumulator, currentValue) {
        console.log('accumulator is: ', accumulator, 'and current value is: ', currentValue);
        return accumulator + currentValue;
        });

        console.log('total is: ', total);

            // accumulator is:  2 and current value is:  4
            // accumulator is:  6 and current value is:  6
            // accumulator is:  12 and current value is:  8
            // total is:  20

    //Producto de elementos de un array
        const numbers = [2, 4, 6, 8];
        const total = numbers.reduce((accumulator, current) => accumulator * current);
        console.log(total); // <== 384
            
    // concat    .reduce()
        const words = ['This', 'is', 'one', 'big', 'string'];

        const bigString = words.reduce(function (sum, word) {
        return sum + word;
        });

        console.log(bigString); // <== Thisisonebigstring

        // object --> valor inicial 0

            const people   = [
                { name: 'Candice', age: 25 },
                { name: 'Tammy', age: 30 },
                { name: 'Allen', age: 49 },
                { name: 'Nettie', age: 21 },
                { name: 'Stuart', age: 17 }
            ];
            const ages = people.reduce(function (sum, person) {
                return sum + person.age;
            }, 0); // initialValue to 0
            
            console.log(ages); // <== 142

    // .forEach para totalizar
            const numbers = [1, 2, 3, 4];
            let total = 0;
            numbers.forEach(function (number) {
            total += number;
            });
            console.log(total);
            // 10
    
          



// .filter()

    const numbers = [1, 2, 3, 4, 5, 6];

    const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
    });

    console.log(evenNumbers); // <== [ 2, 4, 6 ]

// .sort()  -->  ordena los elementos de una matriz en su lugar y devuelve la matriz
    const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
    numbers.sort();

    console.log(numbers);  // [ 0, 1, 112, 18, 22, 223, 23, 64, 68, 9, 99 ]

    // ordenar array valor ascendete   -->  numbers.sort((a, b) => a - b);
        const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
        numbers.sort(function (a, b) {
        return a - b;
        });

    // Ordenar array valor descendente -->  numbers.sort((a, b) => b - a);
        const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
        numbers.sort(function (a, b) {
        return b - a;
        });

    // Ordenar por orden alfabetico
        const words = ['Hello', 'Goodbye', 'AA', 'First', 'A', 'a', 'Second', 'b', 'Third'];
        words.sort();
        console.log(words);





// OBJECTS  -->  { key - value }
//-----------------------------------------------------------------------------------------------
    // Objects: colecciones de propiedades {key+value}. Las propiedades van separadas por ","
    // key: indentifica una propiedad del objeto.Cada key tiene un solo value. camelCase.
    // value: contenido asociado al key indicado.(valor de la clave)
        let myCar = {
            brand: 'Mercedes',
            year: 2016,
        }
    // Acceder a valores
        // dot notation "." 
            console.log(myCar.brand)  // --> 'Mercedes'
        // bracket notation []
            console.log(myCar['brand'])  // --> 'Mercedes'

    //Añadir propiedades al objeto
        myCar.model = 'CLA'
        console.log(myCar)
            // brand: 'Mercedes',
            // year: 2016,
            // model: 'CLA'

    // Actualizar (cambiar) valores
        myCar.year = 2020
        console.log(myCar)
            // brand: 'Mercedes',
            // year: 2020,
            // model: 'CLA'

    // Eliminar propiedades
        delete myCar.year;
        console.log(myCar)
            // brand: 'Mercedes',
            // model: 'CLA'

    // Object.keys () --> propiedades de lista. Nombra todas las propiedades del objecto
    // Decalara una variable para la lista de todas las propiedades(keys). ejecutar la variable. Te devuelve un Array.
        let allKeys = Object.keys ( myCar)
            console.log(allKeys)
                // ["brand","model","year"]

    // Loops & Objects   -->   for...in  --> devuelve una a una las propiedades(keys) del objeto
        //declaramos una variable que englobe todas las propiedades del objeto (key)
        for( let key in myCar){
        console.log(key)
        // "brand"
        // "model"
        // "year"

    // Obtener valores (value) - declaramos la variable (key) de todas las propiedades
    //accedemos al objeto (myCar)y dentro a la lista de variables[key]
        for ( let key in myCar){
            console.log(myCar[key])
        }
            // "Mercedes"
            // "CLA"
            // 2016

    // in operator --> Sirve para verificar si existe una key en un objeto. Devuleve un boolean.
        console.log('brand' in myCar ) // --> true
        console.log('color' in myCar)  // --> false


// ARRAYS & OBJECTS
//---------------------------------------------------------------------------------------------------------------------------------
// Array of objects -->  Objetos en una matriz
    const myMotorcycles = [
        {
            brand: 'Honda',
            model: 'Cb650R'
        },
        {
            brand: 'Harley Davidson',
            model: 'Iron883'
        }
    ]
    // Acceder a las arrays - accedemos con el [index]. posicion en el array desde 0
    // Devuelve un Array con cada key - value
        console.log(myMotorcycles[0]) // --> index[0] -->  primer objeto 
            // brand: 'Honda',
            // model: 'Cb650R'
    //Acceder a un objeto --> usamos " . "
        console.log(myMotorcycles[1].model) // index[1] --> segundo objeto
            // "Iron883"

    // Añadir / Eliminar / Modificar datos del array
        // .push()  / .unshift()  /  .pop()  /  .shift()
            let miniGp = {
                brand: 'IMR',
                model: '110cc'
                owners: ['Sergio','Rocio']
            }
            myMotorcycles.push(miniGp)
            console.log(myMotorcycles)
                // {
                //     brand: 'Honda',
                //     model: 'Cb650R'
                // },
                // {
                //     brand: 'Harley Davidson',
                //     model: 'Iron883'
                // },
                // {
                //     brand: 'IMR',
                //     model: '110cc'
                //     owners: ['Sergio','Rocio']
                // }

//Arrays in Objects
            console.log(myMotorcycles[2].owners)
                // ["Sergio","Rocio"]

// Objects in objects

// Array of arrays (two-dimensional array)



















// DOM
//-----------------------------------------------------------------------------------------------
// Todo el contenido de mi pag html esta contenido en 'document' en JavaScript
// todo se aplica sobre document

// Conectar elementos por ID
    // html:  <h1 id="title"> Hola Ironhack!" </h1>
const title = document.getElementById('title') // targetear un elemento del DOM
console.log(title)  // nos devuelve todo el h1

const titleText = title.innerText //si aplico esta propiedad a cualquier elemento del DOM, nos devuelve el texto que tiene dentro
console.log(titleText)

// para conseguir el texto interno, necesitas acceder al elmento.Tambien se puede resumir 
    const titleText = document.getElementById('title').innerText

//Example: en un videojuego preguntas el nombre de alguien y necesitas guardar ese nombre.



















