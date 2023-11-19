/**
 * unkwon type
 */


let anyValue : any;

anyValue = 24;
anyValue = '아이유';
anyValue = true;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let unkownValue : unknown;

unkownValue = 24;
unkownValue = '아이유';
unkownValue = true;
unkownValue = [];
unkownValue = {};
unkownValue = null;
unkownValue = undefined;


let anyType : any = anyValue;
let unknownType :unknown = anyValue;
let numberType : number = anyValue;
let stringType : string = anyValue;
let booleanType : boolean = anyValue;
let arrayType : string[] = anyValue;
let objectType : {} = anyValue;


// unkown 타입의 값은 any,unknown 타입에만 할당할수 있다.
// let anyType : any = unkownValue;
// let unknownType :unknown = unkownValue;
// let numberType : number = unkownValue;
// let stringType : string = unkownValue;
// let booleanType : boolean = unkownValue;
// let arrayType : string[] = unkownValue;
// let objectType : {} = unkownValue;


anyValue.toUpperCase();
anyValue.name;
new anyValue();

// 안됨
// unkownValue.name;
// unkownValue.toUpperCase();


function isString(target : unknown) : target is string{
    return typeof target === 'string';
}

let testVal : unknown;

if(isString(testVal)){
    testVal;
}

type uAndString = unknown | string;
type uAndNumber = unknown | number;
type uAndBoolean = unknown | boolean;
type uAndAny = unknown | any;

/**
 * Operator
 */

let number1 : unknown = 10;
let number2 : unknown = 10;

// 불가
// number1 + number2    

// 가능
number1 === number2 ;
number1 == number2 ;
number1 != number2 ;
number1 !== number2 ;

