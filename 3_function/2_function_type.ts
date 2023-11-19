/**
 * Function Type
 */


type Mapper = (x : string) => string;

 const runner = (callback : Mapper) => {
    return ['안유진','장원영','레이'].map(
        callback
    );
 }

 console.log(runner((e) => `아이브 멤버 : ${e}`));


 type MultiplyTwoNumbers = (x:number, y:number) => number;

 let multiplyTwoNumbers : MultiplyTwoNumbers = (x,y) =>{
    return x* y;
 }

 console.log(multiplyTwoNumbers(10,20));


 /**
  * interface로 함수 타입 선언
  */
 interface MultiplyTwoNumbers2 {
    (x : number , y : number) : number;
 }

 let multiplyTwoNumbers2 : MultiplyTwoNumbers2 = (x,y) => {
    return x*y;
 } 

 console.log(multiplyTwoNumbers2(20,30));


// 매개변수랑 , 반환값의 타입만 정해주고
type IsBig = (x:number,y:number) => number;


// 로직은 함수에서 작성 -> 이함수의 타입은 위에서 정해준 타입
let isBig : IsBig = (x,y) => {
    return x > y ? x : y;
}

console.log(isBig(10,20));