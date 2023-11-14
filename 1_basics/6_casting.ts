/**
 * Casting
 * 
 * TS에서 Casting을 하변 JS에서 적용이 되지 않는다.
 */


const codefactory = 'codefactory';
const testNumber = 3;

console.log(codefactory.toUpperCase());
// console.log(testNumber.toUpperCase());

let sampleNumber : any = 5;
// console.log(sampleNumber.toUpperCase());
let stringVar = sampleNumber as string;

console.log(typeof(sampleNumber as string));


let number = 5;

// console.log((number as any).toUpperCase());
// as : 상속상 구체화된 값으로 캐스팅 할때 사용