
// Exercise 1

console.log('Excercise 1'.toUpperCase());

//a

var firstName = 'André';
var lastName = 'Vollrath';
var marStatus = 'unmarried';
var country = 'Germany';

//b

var firstName ='Andre', lastName = 'Vollrath', marStatus = 'unmarried', country ='Germany';

//c


var myAge = 33, yourAge = 44;
console.log (`I am ${myAge} years old.`);
console.log (`You are ${yourAge} years old.`);


// Exercise 2

console.log('Excercise 2'.toUpperCase());

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof marStatus);
console.log(typeof country);
console.log(typeof myAge);
console.log(typeof yourAge);




// Exercise 3 

console.log('Excercise 3'.toUpperCase());

var company ='Integrify Academy';

// a

console.log (company);

// b

console.log (company.length);

// c

console.log (company.toUpperCase());

// d

console.log (company.toLowerCase());

// e

console.log (company.substring(10));

// f

console.log (company.includes('Academy'));

// g

console.log (company.split());


// h

console.log (company.split(' '));

// i

console.log ('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(', '))

// j 

console.log (company.replace('Integrify','Microsoft'));

// k

console.log (company.charAt(10)); // answer = 10

// l

console.log (company.charCodeAt(10)); // answer = 65

// m

console.log (company.indexOf('e')); // answer = 3

// n

console.log (company.lastIndexOf('e')); // answer = 14

// o

console.log (' Integrify Academy '.trim(' '));

// p

console.log (company.startsWith('I'));

// q

console.log (company.endsWith('y'));

// r

console.log (company.match('a'));

// s

console.log ('Integrify','Academy'.concat());

// t

console.log (company.repeat(5));


// Exercise 4

console.log('Excercise 4'.toUpperCase());

// a

console.log (firstName.startsWith('A'));
console.log (myAge < yourAge);
console.log (1000 > 100);

// b

console.log (lastName.endsWith('V'));
console.log (myAge == yourAge);
console.log (10 > 100);

// Exercise 5

console.log('Excercise 5'.toUpperCase());


let operandOne = 4;
let operandTwo = 3;

console.log (operandOne + operandTwo); // 7
console.log (operandOne - operandTwo); // 1
console.log (operandOne * operandTwo); // 12
console.log (operandOne / operandTwo); // 1.33333333333
console.log (operandOne % operandTwo); // 1
console.log (++operandOne); // 5
console.log (--operandTwo); // 2
console.log (operandOne++ * operandTwo++ * operandOne * operandTwo + operandOne + operandTwo); // 189


// Exercise 6

console.log('Excercise 6'.toUpperCase());

// a

console.log (4 > 3); // answer = true

// b

console.log (4 >= 3); // answer = true

// c

console.log  (4 < 3); // answer = false

// d

console.log (4 <= 3); // answer = false

// e

console.log (4 == 4); // answer = true

// f

console.log (4 === 4); // answer = true

// g

console.log (4 != 4); // answer = false

// h

console.log (4 !== 4); // answer = false

// i

console.log (4 !='4'); // answer = false

// j

console.log (4 =='4'); // answer = true

// k

console.log (4 ==='4'); // answer = false


// Exercise 7

console.log('Excercise 7'.toUpperCase());

// a

console.log (4 > 3 && 10 < 12); // answer = true

// b

console.log (4 > 3 && 10 > 12); // answer = false

// c

console.log (4 > 3 || 10 < 12); // answer = true

// d

console.log (4 > 3 || 10 > 12); // answer = true

// e 

console.log (!(4 > 3)); // answer = false

// f

console.log (!(4 < 3)); // answer = true

// g

console.log (!(false)); // answer = true

// h

console.log (!(4 > 3 && 10 < 12)); // answer = false

// i

console.log (!(4 > 3 && 10 > 12)); // answer = true

// j

console.log (!(4==='4')); // answer = true



// Exercise 8

console.log('Excercise 8'.toUpperCase());

var yourAge = prompt('Enter your age:');

if (yourAge >= 18) {
    
    console.log('You are old enough to drive.'); 
}

    else {
        
        console.log (`Sorry, you have to wait for ${18 - yourAge} years to drive a car.`);
}



if (yourAge > myAge) {

    console.log (`You are ${yourAge - myAge} years older than me.`);
}

    else if (yourAge == myAge) {

        console.log ('You are the same age as me.');
    }

    else {

        console.log (`I am ${myAge - yourAge} years older than you.`);

    }

    // Exercise 9

    console.log('Excercise 9'.toUpperCase());

    let a = 4;
    let b = 3;

    console.log((a > b) ? 'a is greater than b' : 'a is less than b');























