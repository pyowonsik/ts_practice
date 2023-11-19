/**
 * Union Basics 
 * 
 * 유니언은 타입을 병합할수 있는 수많은 방법중 하나이다.
 * 
 * |
 */

type StringOrBoolean = string | boolean;
let stringOrBooleanType : StringOrBoolean = '아이브';
stringOrBooleanType = true;

// 불가능
// stringOrBooleanType = undefined;
// stringOrBooleanType = null;

type StrBoolNullType = string|boolean|null;

type StateTypes = 'DONE'|'LOADING'|'ERROR';
let state : StateTypes = 'DONE';
state = 'LOADING';

// state = 'INITIAL';

/**
 * 리스트의 유니언
 */

type StringListOrBooleanList = string[] | boolean[];
let stringListOrBooleanList : StringListOrBooleanList = [
    '아이유',
    '김고은',  
    '박소담',
];

stringListOrBooleanList = [true,true,false,true];

// stringListOrBooleanList = ['아이유',true];


type StringOrNumberList = (string|number) [];

let stringOrNumberList : StringOrNumberList = ['아이유',1,2,3];

stringOrNumberList = [1,2,3];
stringOrNumberList = ['아이유','김고은','박소담']; 


/**
 * Interface로 사용하는 union
 */


interface Animal {
    name : string;
    age : number;
}

interface Human {
    name : string;
    age : number;
    address : string;
}


type AnimalOrHuman = Animal | Human;

let animalOrHuman : AnimalOrHuman = {
    name : '표원식',
    age : 26,
    address : '대한민국',
}

console.log(animalOrHuman);

animalOrHuman = {
    name : '오리',
    age : 2,
}


console.log(animalOrHuman);
// console.log(animalOrHuman.address);


let animalOrHuman2 : {
    name : string;
    age : number;
    address : string;
} | {
    name : string;
    age : number;
} = {
    name : '표원식',
    age : 25,
    address  : '대한민국',
}


console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);
console.log(animalOrHuman2.address);


animalOrHuman2 = {
    name : '오리',
    age : 2,
}

console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);
// console.log(animalOrHuman2.address);


// 서로 관계가 없는 유니온 선언
// type
type Person = {
    name : string;
    age : number;
}
// interface
interface Dog {
    breed : string;
    address : string;
}


type PersonOrDog = Person | Dog;


// 타입 하나의 프로퍼티를 충족한다면 모든 타입 사용해도 됨,
// 하나의 타입도 충족하지 못한다면 사용불가
const personOrDog : PersonOrDog = {
    name : '표원식',
    age : 26,
    breed : 'Pug',
    address : 'USA'
}