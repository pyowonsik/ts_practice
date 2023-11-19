/**
 * problems with array in JS
 */

const number = [1,'2',3,'4',5,];

let strings : string[] = ['1','2','3','4','5'];

let stringOrNumbers : (string|number)[] = [1,'2',3,'4'];

let stringArrNumberArr : string[] | number[] = [1,2,
    // '3'
];

let stringOrNumberArr : string | number[] = 'String Or [1,2,3,4]'; 

let boolArr = [true,true,false ];

boolArr.push(false);
// boolArr.push(1);

const onlyString = ['1','2','3'];
const onlyNumbers = [1,2,3];

for (let i = 0; i < onlyString.length; i++) {
    let item = onlyString[i];
}
for(let item of onlyNumbers){

}

let number3 = onlyNumbers[0];   // number
let number4 = onlyNumbers[99];  // number


// 자바스크립트의 배열의 문제점은 배열이 여러타입이 섞일수 있다. 일단 배열을 지정하면 타입이 자동으로 추론된다.