/**
 * Tuple
 */

let iveTopMembers = ['장원영','안유진','레이'];

let numberAndStringTuple : [string,number] = ['표원식',23]; // 추가 선언 불가 
numberAndStringTuple.push('이서연');    // push는 가능

console.log(numberAndStringTuple);

let unmodifiableTuple : readonly [number,string] = [23,'표원식'];   // push도 금지

// unmodifiableTuple.push() //'readonly [number, string]' 형식에 'push' 속성이 없습니다.

/**
 * Tuple 유추 하기
 */

let actress = ['김고은','박소담','전여빈']; 

let actressTuple = ['김고은','박소담','전여빈'] as const; // as const : 정확한 타입 유추 가능
const actressTupleConst = ['김고은','박소담','전여빈'] as const; 

let stringArray : string[] = [
    ...actressTuple,
    ...actressTupleConst,
    ...['1','2','3']
];

/** 
 * Named Tuple  
 */

const namedTuple : [name:string,age:number] = [
    '코드팩토리',
    32
];


/**
 * Assigning Tuple to Tuple 
 * 
 * tuple은 같은 타입끼리만 할당이 가능하다.
 */


const tuple1 : [string,string] = ['표원식','이서연'];
const tuple2: [number,number] = [1,2];
// const tuple3 : [boolean,boolean] = tuple2;
const tuple4 : [string,string] = tuple1; 

/**
 * Tuple 과 Array 관계
 */

let ive : [string,string] = ['표원식','이서연'];


let stringArr : string[] = ive;

// let ive2 : [string,string] = stringArr;
let ive2: [string,string] = ive; 


/**
 * Multi Dimensional Tuple
 */

const tuple2D : [string,number][] = [['표원식',26],['이서연',24]];


