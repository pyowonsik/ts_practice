/**
 * Type vs Interface
 */


// 객체 선언

interface IObject {
    x : number;
    y : number;
}

type TObject = {
    x : number;
    y : number;
}


// function 선언


interface IFunction {
    (x:number,y:number) : number;
}

type TFunction = (x:number,y:number) => number;

// type 에서만 할수 있는것

// (1) primitive 타입 선언하기
type Name = string;
// (2) union 타입 선언하기
type UnionType = string|number;
// (3) primitive 리스트 또는 튜플타입 선언하기
type TupleType = [number,string];   // 동적 배열
// let tupleType : TupleType = [1,'sss',1];


// interface 에서만 할수 있는것

// interface merging

interface RectangleType {
    width : number;
}

interface RectangleType {
    height : number;
}

let rectangleType : RectangleType = {
    width : 200,
    height : 100,
};

type RectangleType2  = {
    width : number;
}

// type RectangleType2 = {
//     height : number;
// }

// 클래스의 타입 지정
class Review {

    // 프로퍼티
    getY = (x:number) => { return x;};

    // 메서드
    getX(x:number){
        return x;
    }
}



interface GetXnY{
    // 프로퍼티
    getX : (x : number) => number;  // == getX : number;
    getY : (y : number) => number;

}

interface GetXnY{
    // 프로퍼티 
    // getX : (x : number) => number;
    // getY : (y : string ) => number; // 오버로딩 불가
    
}


interface GetXnY2{
    // 메서드
    getX(x:number) : number;
    getY(y:number) : number
}


interface GetXnY2{
    // 메서드
    getX(x:number) : number;
    getY(y:string) : number // 메서드이기 때문에 오버로딩 가능
}

const testMethod : GetXnY2 ={
    getX(x){
        return x;
    },
    getY(y){
        return 1;
    }
}


// class 내에서
// 프로퍼티 : x : number === x(x:number) => number
// 메서드  : getX(x:number) : number 
// 인터페이스 머징 가능 , 타입 머징 불가능 -> extends , & 사용해서 타입명 다르게해서 머징해야함 

