
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

console.log (' Integrify Academy '.trim(''));

// p

console.log (company.startsWith('I'));


// q

console.log (company.endsWith('y'));

// r

console.log (company.match('a'));

// s

console.log ('Integrify','Academy','Headquarter'.concat());

// t

console.log ((company + ' ').repeat(5));


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

console.log(a > b ? 'a is greater than b' : 'a is less than b');

// Exercise 10

console.log('Excercise 10'.toUpperCase());

var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// a

console.log (itCompanies);

// b

console.log (itCompanies.length);

// c

for (i = 0; i < itCompanies.length; i++)
  console.log((i+1) + ": " + itCompanies[i]);

// d

for (i = 0; i < itCompanies.length; i++)
  console.log((i+1) + ": " + (itCompanies[i]).toUpperCase());

// e

var sentence = itCompanies.join (', ') + ' are big IT companies.';
console.log(sentence);

// f

console.log(itCompanies.sort());

// g

console.log(itCompanies.reverse());


// Exercise 11

console.log('Excercise 11'.toUpperCase());

// a

for (i = 0; i <= 10; i++) 
console.log(i);

i = 0;

while (i <= 10) {
    console.log(i);
    i++
}

i = 0;

do {
    console.log(i);
    i++;
}

while (i <= 10);

// b

for (i = 10; i >=0 ; i--) 
console.log(i);



 i = 10;

while (i != -1) {
    console.log(i);
    i--;
}

i = 10;

do {
    console.log(i);
    i--;
}

while (i != -1); 

// c

for (i = 0; i < itCompanies.length; i++)
  console.log((i+1) + ": " + itCompanies[i]);

// d

var searchCompany = 'Microsoft';

i = 0

while (searchCompany != itCompanies[i] && i < itCompanies.length) {

        i++

}
if (searchCompany == itCompanies[i]) {

    console.log(itCompanies[i] + " was found.");

}
    else {/*  */
        console.log (searchCompany + ' not found.');
    }


// d


var searchChars = 'oo';

for (var i = 0; i < itCompanies.length; i++) {

    if (itCompanies[i].includes(searchChars) == true) console.log(searchChars + ' found in ' + itCompanies[i]);
    else console.log(searchChars + ' not found in ' + itCompanies[i]);



}

// Exercise 12

// a

/*
function fullName() {

console.log('André Vollrath');

}

fullName();

*/

// b

function fullName(firstName, lastName) {

    return  (firstName + ' ' + lastName);
}

console.log(fullName('André','Vollrath'));
console.log(fullName('Steven','Rhoades'));

// c

function addNumbers(numOne, numTwo) {

    return (numOne + numTwo);

}

console.log(addNumbers(8,9));

// d

function printArray(arrayToPrint) {

for (i = 0; i < (arrayToPrint.length); i++) {

    console.log(arrayToPrint[i]);

    }   
}

printArray(itCompanies);

// e

function reverseArray(arrayToReverse) {

    
    var newArray = (arrayToReverse[arrayToReverse.length - 1])
    
    for (var i = (arrayToReverse.length - 2); i >= 0; i--) {

        newArray = (newArray + ' ' + arrayToReverse[i])

    }
    return newArray.split(' ');

}

console.log(reverseArray(itCompanies));



// f

function capitalizeArray (arrayToCapitalize) {

    
    var newArray = ((arrayToCapitalize[0]).toUpperCase());
    for (i = 1; i < arrayToCapitalize.length; i++) {
    var newArray = (newArray + ' ' + (arrayToCapitalize[i]).toUpperCase());

    }
    return newArray.split(' ');


}

console.log (capitalizeArray(itCompanies));

// g

function removeItem(arrayToremove) {

    var cloneArray = arrayToremove.slice();
    cloneArray.splice(cloneArray.length / 2,1);
    return cloneArray;




}

console.log (removeItem(itCompanies))


// h


function addItem (arr, item) {

    arr.push(item);
    return arr;


}

console.log(addItem(itCompanies, 'Nokia'));


// i

function sumOfNumbers(num) {

var sum = 0;
for (i = 0; i <= num; i++) {

sum = sum + i;

}

return sum;

}

console.log(sumOfNumbers(9));


// j

function sumOfOdds(num) {

var sum = 0;
for (i = 0; i <= num; i++) {

    if (i % 2 == 0) sum = sum + i;


}
return sum;

}

console.log(sumOfOdds(10));


// k

function sumOfEvens(num) {

    var sum = 0;
    for (i = 0; i <= num; i++) {
    
        if (i % 2 != 0) sum = sum + i;
    
    
    }
    return sum;
    
    }
    
    console.log(sumOfEvens(8));


// l


function sumOfEvensAndOdds (count) {

    var sumOdds = 0;
    var sumEvens = 0;

    for (i = 0; i <= count; i++) {

        if (i % 2 == 0) {
            sumEvens = sumEvens + i;
        }

        else {
            sumOdds = sumOdds + i;
            }
    }

    return [sumOdds, sumEvens];

    }   

console.log(sumOfEvensAndOdds(100));

// m

function randomHexaNumberGenerator() {

    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}

console.log(randomHexaNumberGenerator());
console.log(randomHexaNumberGenerator());
console.log(randomHexaNumberGenerator());
console.log(randomHexaNumberGenerator());
console.log(randomHexaNumberGenerator());


function userIdGenerator() {

    var letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var id = '';
    for (var i = 0; i < 7; i++) {
        id += letters[Math.floor(Math.random() * letters.length)];
    }
    return id;

}

console.log(userIdGenerator());
console.log(userIdGenerator());
console.log(userIdGenerator());
console.log(userIdGenerator());
console.log(userIdGenerator());
console.log(userIdGenerator());
console.log(userIdGenerator());



function rgbColorGenerator () {

    var color1 = Math.floor(Math.random() * 256);
    var color2 = Math.floor(Math.random() * 256);
    var color3 = Math.floor(Math.random() * 256);

    console.log ('RGB(' + color1 + ',' + color2 + ',' + color3 + ')');

}

rgbColorGenerator();


function factorial(num) {

    var sum = 1;
    for (i = 2; i <= num; i++) {

        sum *= i;

    }
    return sum;


}

console.log(factorial(15));




function isEmpty (para) {

    if (para === undefined) return 'Parameter is empty'
    else return 'Parameter is not empty'


}
var test;
console.log(isEmpty(test));




function sum() {

    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {

        sum += arguments[i];
    }
    return sum;
}


console.log(sum(3,5,8,10,21,23,42,42,12,98));






  























