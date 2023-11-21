function whatValue(value:any){
    return value;
}


const value = whatValue('test');


function genericWhatValue<T>(value : T):T{
    return value;
}

const generictResult1 = genericWhatValue<number>(123);

let generictResult2  = genericWhatValue('123');


function multipleGeneric<X,Y,Z>(x:X,y:Y,z:Z){
    return {
        x,
        y,
        z
    };
}

const multipleGenericResult1 = multipleGeneric<string,number,boolean>('123',123,true);
const multipleGenericResult2 = multipleGeneric('123',123,true);


function getTuple<X,Y>(val1:X,val2:Y){
    return [val1,val2] as const;

}

const tuple = getTuple<boolean,number>(true,100);


class Idol {
    name :string;
    age : number; 

    constructor(name : string,age : number){
        this.name = name; 
        this.age = age; 
    }
}

class Car {
    brand : string;
    codeName : string;

    constructor(brand:string , codeName : string) {
        this.brand = brand;
        this.codeName = codeName;
    }
}

//  {new (...arg:any[]) : {}} => constructor
//                    let test = new Idol('test',22); // 반환값은 객체 {}
function instantiator<T extends {new (...args:any[]) : {}}>(constructor : T, ...args:any[]){
    return new constructor(...args);
}

const instance1 = instantiator(Idol,'안유진',22);
const instance2 = instantiator(Car,'BMW','1111');

console.log(instance1);
console.log(instance2);
