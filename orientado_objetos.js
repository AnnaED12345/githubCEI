// ORIENTADO A OBJETOS 

/* JS orientado a objetos
1. Crea una función constructora Car que tome tres argumentos: make, model y year. 
La función constructora debe almacenar estos valores como propiedades del objeto.
Además, crea un método getCarInfo en el prototipo de Car que devuelva una cadena 
con el nombre completo y el año del coche.
*/

function Car (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.getCarInfo = function() {
    console.log (this.make, this.model, this.year);
}

const toyota = new Car ("lalala", "toyota", "2008");
toyota.getCarInfo();

//  JS orientado a objetos
// 2. Crea una función constructora Circle que tome un argumento radius. La función constructora
// debe almacenar el valor de radius como una propiedad del objeto. También, crea dos métodos en el
// prototipo de Circle: area que calcule el área del círculo, y circumference que calcule la
// circunferencia del círculo.

function Circle (radius) {
    this.radius = radius;
}

Circle.prototype.getArea = function () {
    console.log (Math.PI * (this.radius**2));
}

Circle.prototype.getCircumference = function () {
    console.log (2 * Math.PI * this.radius);
}

const circulo = new Circle (20);
circulo.getArea();
circulo.getCircumference();


/*  JS orientado a objetos
 3. Crea una función constructora BankAccount que tome dos argumentos: accountNumber y
 balance. La función constructora debe almacenar estos valores como propiedades del objeto.
 Además, crea tres métodos en el prototipo de BankAccount: deposit que permita agregar fondos a
 la cuenta, withdraw que permita retirar fondos de la cuenta (asegurándote de que no se retire más
 de lo que hay en la cuenta), y getBalance que muestre el saldo actual de la cuenta.
  */

 function BankAccount (accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance; 
 }


 BankAccount.prototype.deposit = function (fondos) {
    let sumaFondos = this.balance + fondos;
    this.balance = sumaFondos;
 }

 BankAccount.prototype.withdraw = function (fondos) {
    if (fondos > this.balance) {
        console.log("Error: No se puede retirar esta cantidad");
    } else {
        let restaFondos = this.balance - fondos; 
        this.balance = restaFondos;
    }

 }

 BankAccount.prototype.getBalance = function () {
    console.log("El saldo actual es " + this.balance)
 }

 const cuenta = new BankAccount(34234, 0);
 cuenta.getBalance();
 cuenta.deposit(100);
 cuenta.getBalance();
 cuenta.withdraw(50);
 cuenta.getBalance();
 cuenta.withdraw(100);
 cuenta.getBalance();



/*  constructor y herencia
 1. Crea una clase Animal que tome dos argumentos en su constructor: name y age. La 
 clase debe almacenar estos valores como propiedades del objeto. Además, crea un método 
 en la clase Animal llamado speak que devuelva una cadena que diga: "¡Hola, mi nombre 
 es [name] y tengo [age] años!".

 A continuación, crea una clase Dog que herede de la clase Animal. El constructor de 
 Dog debe aceptar los mismos argumentos que Animal y utilizar super para llamar al 
 constructor de Animal. Crea un método en la clase Dog llamado bark que devuelva la 
 cadena "¡Guau, guau!".
  */

class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age;
    }

    speak () {
        console.log ("¡Hola, mi nombe es " + this.name + " y tengo " + this.age + " años!");
    }
}

class Dog extends Animal {
    constructor (name, age) { //ya que acepta los mismos argumentos este paso lo podemos suprimir
        super(name, age);
    }

    bark () {
        console.log("¡Guau, guau!")
    } 
}

const animal1 = new Animal ("Pop", 3);
const dog1 = new Dog ("Lulu", 2);


/* constructor y herencia
2. Crea una clase Person que tome dos argumentos en su constructor: firstName y 
lastName. La clase debe almacenar estos valores como propiedades del objeto. Además, 
crea un método en la clase Person llamado fullName que devuelva el nombre completo 
del individuo.

A continuación, crea una clase Employee que herede de la clase Person. El constructor 
de Employee debe aceptar tres argumentos: firstName, lastName y jobTitle. Utiliza super 
para llamar al constructor de Person con firstName y lastName. Almacena jobTitle como 
una propiedad en la clase Employee. Crea un método en la clase Employee llamado 
introduce que devuelva una cadena que diga: "¡Hola, mi nombre es [fullName] y soy [jobTitle]!".
 */

class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    fullName (){
        return this.firstName + " " + this.lastName;
    }
}

class Employee extends Person {
    constructor (firstName, lastName, jobTitle) {
        super(firstName, lastName)
        this.jobTitle = jobTitle;
    }
    
    introduce () {
        console.log("¡Hola, mi nombre es " + this.fullName() + " y soy " + this.jobTitle);
    }
}

const person1 = new Person ("Carlos", "Martínez")
const empleado1 = new Employee ("Miguel", "García", "Programador");

