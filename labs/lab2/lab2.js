// Exercise 1

let gretter = (myArray, counter) => {
    for (let name of myArray){
        console.log(`Hello, ${name}!`);
    }
}

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

console.log("")

// Exercise 2

function capitalize(myStr){
    let [first, ...rest] = myStr;
    let output = first.toUpperCase() + rest.join('');
    return output;
}

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

console.log("")

// Exercise 3

const colors = ['red', 'green', 'blue'];

const capitalized = colors.map(capitalize);

console.log(capitalized);

console.log("")

// Exercise 4

let values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter((value) => value < 20);

console.log(filterLessThan20);
console.log('');

// Exercise 5

let array = [1, 2, 3, 4];

const initValueSum = 0;
const initValueProduct = 1;

const calculateSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, initValueSum);
const calculateProduct = array.reduce((accumulator, currentValue) => accumulator * currentValue, initValueProduct);

console.log(calculateSum);
console.log(calculateProduct);

console.log('');

// Exercies 6

class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }

    details(){
        return `Model: ${this.model}, ${this.year}`;
    }
}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }

    info(){
        return `${this.model} has a balance of \$${this.balance.toFixed(2)}`;
    }
}

const car2 = new Sedan('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());