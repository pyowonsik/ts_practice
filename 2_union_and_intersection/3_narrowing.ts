/**
 * Narrowing : Union에서 타입 유추
 * 
 * Narrowing은 Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추 할수 있게 되는걸 의미한다.
 */

// let stringOrNumber : string | number = '표원식';

// stringOrNumber;

// const desimal = 12.3278;
// console.log(desimal.toFixed(2));

// stringOrNumber.toFixed();

 
/**
 * Narrowing의 종류
 * 1) Assignment Narrowing
 * 2) type of Narrowing
 * 3) Truthiness Narrowing
 * 4) Eqaulity Narrowing
 * 5) in operator Narrowing
 * 6) instanceof Narrowing
 * 7) discrimated Narrowing
 * 8) exhaustiveness Narrowing
 */

// 1) Assignment Narrowing : 특정값 할당 하여 Narrowing

let numberOrString : number | string = '아이유';
numberOrString.toString();

// 2) type of Narrowing : typeof로 구분
numberOrString = Math.random() > 0.5 ? 1123 : '아이유'; 

// === : 데이터 형까지 비교해준다.
if(typeof numberOrString === 'string'){
    numberOrString; // string
}else{
    numberOrString; // number
}


// 3) Truthiness Narrowing : true or false로 구분
let nullOrString : null | string[] = Math.random() > 0.5 ? null : ['레드벨벳' , '아이브'];

// nullOrString = null 이라면 nullOrString = false 
if(nullOrString){
    nullOrString;   // string[]
}else{
    nullOrString;   // null 
}


// 4) Equality Narrowing : 두개의 데이터 타입이  같은지 구분 
let numberOrString2 : number | string = Math.random() > 0.5 ? 1123 : '아이유';

let stringOrBool2 : string | boolean = Math.random() > 0.5 ? '아이브' : true;

if(numberOrString2 === stringOrBool2){
    numberOrString2;    // string
    stringOrBool2;      // string
}else{
    numberOrString2;    // string | number 
    stringOrBool2;      // string | bool
}

let numberOrStringOrNull : number | string | null = Math.random() > 0.5 ? 1123 : Math.random() > 0.5 ? '안유진' : null; 

if(typeof numberOrStringOrNull === 'number') {
    numberOrStringOrNull;   // number
}else{
    numberOrStringOrNull;   // string | null
}


// 5) in operator Narrowing : in으로 key값이 있는지 구분

interface Human {
    name : string;
    age : number;
}

type Dog = {
    name : string;
    breede : string;
}

let human : Human = { 
    name : '안유진',
    age : 23
}

let dog : Dog = { 
    name :'오리',
    breede : 'Pug',
}

let humanOrDog : Human | Dog = Math.random() > 0.5 ? human : dog;

if('breede' in humanOrDog) {
    humanOrDog; // Dog
}else{
    humanOrDog; // Human
}


// 6) instanceof Narrowing  : instanceof로 구분
let dateOrString : Date | string = Math.random() > 0.5 ? new Date() : '표원식';

if(dateOrString instanceof Date) {
    dateOrString;   // Date
}else{
    dateOrString;   // string
}

// 7) discrimated Narrowing : interface 하나엑서 타입을 분기 치는것 보다 interface 두개를 생성하는것이 바른 방법
interface Animal {
    type : 'human' | 'dog';
    height? : number;
    breed? : string;
}

let humanOrDog2 : Animal  =  Math.random() > 0.5 ? {
    type : 'human',
    height : 177,
}:{
    type : 'dog',
    breed : 'Pug'
};

if(humanOrDog2.type === 'human'){
    humanOrDog2.height; // number | undefined
}else{
    humanOrDog2.breed;  // string | undefined
}

interface Human2 {
    type : 'human';
    height : number;
}

interface Dog2{
    type : 'dog';
    breed : string;
}

interface Fish2{
    type : 'fish';
    length : number;
}


type humanOrDog = Human2 | Dog2 | Fish2; 

let human2OrDog2 : humanOrDog = Math.random() > 0.5 ? {
    type : 'human',
    height : 177
}:  Math.random() > 0.5 ?
{
    type : 'dog',
    breed : 'Pug'
} :
{
    type : 'fish',
    length : 12
};

if(human2OrDog2.type === 'human'){
    human2OrDog2;   // Human
}else{
    human2OrDog2;   // Dog2
}


// 8) exhaustiveness Narrowing
switch(human2OrDog2.type){
    case 'human' : 
        human2OrDog2;
        break;
    case 'dog' : 
        human2OrDog2;
        break;
    case 'fish' : 
        human2OrDog2;
        break;
    default :
        human2OrDog2;
        const _check : never = human2OrDog2;    // 타입 추가 정의시 에러 발생 원래는 never가 되야하는데 Fish라는 타입이 생겻기때문에 never가 아니라 fish가 됧수 있음 .
        break;
}