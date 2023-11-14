 /**
  * Type Inference 
  * 
  * 타입 추론 
  */

 let stringType = 'string';
 let booleanType = true;
 let numberType = 30;


 booleanType = false;
//  booleanType = 'string';

const constStringType = 'const string';
const constBooleanType =  true;


let yujin = {
    name : '안유진',
    age:2003,
};

const yujin2 = {
    name : '안유진',
    age:2003,
};

yujin2.name = '표원식';
console.log(yujin2);


const yujin3 = {
    name : '안유진' as const,
    age:2003 as const,
};

// yujin3.name = '표원식';
console.log(yujin3.name);
console.log(yujin2.name);



/**
 * Array 
 */
let numbers = [1,2,3,4,5];
let numberAndString = [1,2,3,'4','5'];


numbers.push(6);
// numbers.push('6');

const number = numbers[0];
const nos = numberAndString[0];
const nos2 = numberAndString[6];


// tuple
const twoNumbers = [1,3] as const;

// twoNumbers.push(100);
const first = twoNumbers[0];
// const first2 = twoNumbers[3];