/**
 * Type Predicate
 */

// 반환타입을 확인
// if문 사용시 정확한 타입 유추 가능

function isNumber(input:any) : input is number{
    return typeof input == 'number';
}

console.log(isNumber(10));


function isNumberRetBool(input:any) : boolean{
    return typeof input == 'number';
}


let number : any = 5;   // number type is any

if(isNumberRetBool(number)){
     number; // any
}

if(isNumber(number)){
    number; // number
}

interface Doge { 
    name : string;
    age : number;
}

interface Cat{
    name : string;
    breede : string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal : DogeOrCat) : animal is Doge{
    return (animal as Doge).age !== undefined;
}


const doge : DogeOrCat = Math.random() > 0.5 ? {
    name : '도지',
    age : 32,
} : {
    name : "길냥이",
    breede : "코숏",
}

if(isDoge(doge)){
    doge; 
}else{
    doge;
}