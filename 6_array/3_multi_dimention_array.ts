/**
 * Multi Dimention Array
 */

const number2DArr : number[][] = [[1,2,3],[4,5,6]];

const string2DArr : string[][]  = [['1','2','3'],['4','5','6']];


const stringOrNumberArr : (number|string)[][] = [
    [1,'2',3],
    [4,'5',6],
];

let stringOrNumberArr2 : number[][] | string[][] = [
    [1,2,3],
    [4,5,6]
];


stringOrNumberArr2 = [['1','2','3'],['4','5','6']];

for(let arr of number2DArr){
    for(let item of arr){

    }
}