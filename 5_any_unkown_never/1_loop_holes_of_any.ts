/**
 * loopholes of any
 */

let number = 10;

// number.toUpperCase();    // 에러가 나야 정상
(number as any).toUpperCase();

const  multiplyTwo = (num1 : number,num2 : number):number => {
    return num1 * num2;
}

// multiplyTwo('코드팩토리',true);  // 에러가 나야 정상

let arg1 : any = '코팩';
let arg2 : any= true;

multiplyTwo(arg1,arg2);

let iu : any= {name : '아이유',age : 30};

// 자동완성 미지원 
iu.name
iu.age


const callBackRunner = (x:number,y:number,callBack:any) => {
    // return callBack(x,y);
    return callBack(x); // error 
}

const callBack = (x:number,y:number) => {
    return x * y;
}

callBackRunner(10,20,callBack);

// any의 문제점 : 버그 발생시 에러를 발생시키지 않아서 어디서 잘못됫는지 인지하기가 어려움 ,
// 자바스크립트를 사용하는것이랑 다름이 없음.