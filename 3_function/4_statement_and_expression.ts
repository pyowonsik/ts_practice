/**
 * Statement And Expression
 */


// statement (문장)
function addTwoNumbers(x:number,y:number) {
    return x + y;
}


// expression (표현식)
const  addTwoNumbersExp = (x:number,y:number) => {
    return x+y;
}



/**
 * statement
 */

function add(x:number,y:number) : number {
    return x+y;
}
function substract(x:number,y:number) : number {
    return x-y;
}
function multiply(x:number,y:number) : number {
    return x*y;
}
function devide(x:number,y:number) : number {
    return x/y;
}

/** 
 * expression  
 */

// functionType + expression 사용시 매개변수 , 반환값에 타입을 안정해도되고 가독성이 좋다.
type CalculationType = (x:number,y:number) => number;   // functionType 
// interface CalculationType2 {(x:number,y:number) : number};

const add2 : CalculationType= function(x,y){ 
    return x+y;
}

const substract2 : CalculationType= function(x,y){ 
    return x-y;
}

const multiply2 : CalculationType= function(x,y){ 
    return x*y;
}

const devide2 : CalculationType= function(x,y){ 
    return x/y;
}
 