/**
 * Type and Interface
 */

/**
 * Type : 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할
 */


type NewStringType = string;
type NewNullType = null;
type NewNumberType = number;
type MaleOrFemale = 'male' | 'female';

const stringVar : NewStringType = 'test';

type IdolType = {
    name : string;
    year : number;
}


const yujin : IdolType = {
    name: '안유진',
    year:2002,
}


/**
 * Interface : 객체 타입 지정?
 *
 */

interface IdolInterFace {
    name : String;
    year : number;
} 

const yujin2 : IdolInterFace = {
    name :'안유진',
    year  : 2002,
}

interface IdolIT{
    name : NewStringType;
    year : NewNumberType;
}

let a : number = 2;

const yujin3 : IdolIT = { 
    name : '안유진',
    year : 2002,
}

interface IdolOptional {
    name : string;
    year? : number;
}


const yujin4 : IdolOptional = {
    name : '안유진',
    year : 2002,
}

// interface 는 함수 , 객체 선언 가능 , type 처럼 primitive 나열 불가 