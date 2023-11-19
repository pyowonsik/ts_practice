
/**
 * Defining Function
 */



// function printName(name) {
//     console.log(name);
// }
function printName(name :string ) {
    console.log(name);
}

function returnCouple(person1 : string,person2 : string){
    return `${person1}이랑 ${person2}는 사귑니다.`;
}

console.log(returnCouple('아이유','코드팩토리'));

// console.log(returnCouple(1,2));
// console.log(returnCouple(1));
// console.log(returnCouple('아이유','코드팩토리','홍길동'));



/**
 * Optional
 */


// ? 의 의미 : undefined 될수 있음 
function multiplyOrReturn(x:number ,y?:number){
    if(y){
        return x * y;
    }else{
       return  x;
    }
}

console.log(multiplyOrReturn(10,20));
console.log(multiplyOrReturn(20));
    

// 기본값을 줌으로써 타입은 number로 확정
function multiplyOrReturn2(x:number ,y :number = 20 ){
    if(y){
        return x * y;
    }else{
       return  x;
    }
}

console.log(multiplyOrReturn2(10,30));
console.log(multiplyOrReturn2(20));


/**
 * 나머지 매개변수
 */
function getInfiniteParameters(...args : string[]){
    return args.map((e) => `${e} 너무 좋아`);
}

console.log(getInfiniteParameters('아이유','아이브','블랙핑크'));
// console.log(getInfiniteParameters(1,2,3));


/** 
 * Return Type
 */

function addToNumbers(x:number,y:number):number {
    return x+y;
}


function randomNumber() : 10 | '랜덤'{
    return Math.random() > 0.5
    ?   10
    :   '랜덤';
}
randomNumber();



function subtract(x:number,y:number) : number{
    // return '이게 반환이 안되나 ??';
    return x - y;
}

const subtractToNumbersArrow = (x : number , y :number) : number => {
    return x - y;
};

/** 
 * 특수 반환 타입
 * 
 * void / never
 */

function doNotReturn() : void  {
    console.log('반환값이 없어요');
}

doNotReturn();


// 함수가 끝나지 않는 상황을 만들면 never 타입 반환
// function throwError() : never{
//     while(true){

//     }
// }
function throwError2() : never{
    throw Error();
}

