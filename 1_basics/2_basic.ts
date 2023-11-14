/**
 * Types 
 */

let helloText : string = 'Hello';
// helloText = true

/**
 * 7개의 타입
 */

const stringVar : string = 'String';
const numberVar : number = 3;
const bigIntVar : bigint = BigInt(9999999);
const boolVar : boolean = true;
const symbolVar : symbol = Symbol(1);
const nullVar : null = null;
const undefinedVar : undefined = undefined;

/**
 * TS에만 존재하는 타입
 */

// any ; 아무타입이나 가능 - Dart의 dynamic 
let anyVar : any;
anyVar = 100;
anyVar = true;
anyVar = '표원식';


let testNumber : number = anyVar;
let testString : string = anyVar;
let testBoolean : boolean = anyVar;


// unknown : 알수 없는 타입
let unknownType : unknown;
unknownType = 100;
unknownType = '표원식';
unknownType = true;

// let testNumber2 : number = unknownType;
// let testString2 : string = unknownType;
// let testBoolean2 : boolean = unknownType;
let unknownType2 : unknown = unknownType;
let anyType2 : any = unknownType;


// never : 어떠한 값도 저장되거나 반환되지 않을때 사용하는 타입
// let neverType : never = null;
// let neverType : never = undefined;
// let neverType : never = 'string';


/**
 * 리스트 타입
 */
const koreanGirlGroup : string[] = ['아이브','레드벨벳','블랙핑크'];
const boolList : boolean[] = [true,false,true];