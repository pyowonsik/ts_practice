/**
 * Property Check
 */

 type TName = {
    name : string;
 }

 type TAge = {
    age : number;
 }

 const iu = {
    name : '아이유',
    age : 26,
 };

 let testName : TName = iu;
 let testAge : TAge = iu;


console.log(testName);  // { name: '아이유', age: 26 }
console.log(testAge);   // { name: '아이유', age: 26 }

