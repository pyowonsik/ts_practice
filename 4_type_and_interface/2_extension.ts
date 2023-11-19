/**
 * Extension
 */


// extends(interface) , &(type) : 이름을 다르게 interface merge

interface IName {
    name : string;
}

interface IIdol extends IName{
    age : number;
}

let idol1 : IIdol = {
    name : "안유진",
    age : 23,
}

type TName = {
    name : string;
}

type TIdol = TName & {age :number};

const idol2 : TIdol = {name:'아이유',age:29};

interface IIdol2 extends TName{
    age : number;
} 

const idol3 : IIdol2 ={
    name : "제니",
    age : 29,
}

type TIdol2 = IName & {age :number};

const idol4 : IIdol2 ={
    name : "지수",
    age : 31,
} 

/**
 * extending Multiple
 */

 type DogName = {name : string};
 type DogAge = {age : number};
 type DogBreed = {breed : string};


 type Dog = DogName & DogAge & DogBreed;

 let dog : Dog = {
    name : '식식이',
    age : 3,
    breed : 'Pug'
 };

 interface CatName {
    name : string;
 };

 interface CatAge {
    age : number;
 }; 

 interface Cat extends CatName,CatAge{
    breed : string;
 }

 let cat : Cat = {
    name : '미티',
    age : 3,
    breed:'길냥이',
 };


// Overide

type THeight = {
    height : number;
}

type TRectangle = THeight & {
    height : string;
    width : number;
}


// let rectangleType : TRectangle = {
//     height : 200,   // never
//     width : 200,
// }


type TWidth = {
    width : string | number;
}

type TRectangle2 = TWidth & {
    height : number;
    width : number;
}

let rectangleType : TRectangle2 = {
    height : 200,
    width : 200,
}

interface IHeight { 
    height : number;
}

interface IRectangle extends IHeight{
    // height : string;
    width : number;
}


interface IWidth {
    width : number | string;
}

interface IRectangle2 extends IWidth{
    width : number;
    height : number; 
}