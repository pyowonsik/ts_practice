/**
 * Inheritance 
 */


class Parent {
    name: string;
    constructor(name:string){
        this.name = name;
    }

    dance(){
        return `${this.name}이 춤을 춥니다. `
    }
}

class Child extends Parent{
    age : number;
    constructor(name :string,age : number) {
        super(name);
        this.age = age;
    }

    sing(){
        return `${this.name}이 노래를 합니다. `
    }
}


const codefactory = new Parent('코드팩토리');
const wonsik = new Child('표원식',25); 


let person : Parent;
person = codefactory;
person = wonsik;


let person2 : Child;
person2 = wonsik;
// person2 = codefactory ;


/**
 * Optional Property를 유의하자
 */

class Parent2 {
    name : string;
    
    constructor(name : string){
        this.name = name;
    }
}

class Child2 extends Parent2{
    age? : number;
    constructor(name : string,age? : number){
        super(name);
        this.age  = age;
    }
}



const cf2 = new Parent('코드팩토리');
const wonsik2 = new Child('표원식',25); 

let child : Child2;
child = wonsik2;
child = cf2;