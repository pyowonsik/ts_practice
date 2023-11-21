class Idol{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
}

interface IdolConstructor{
    new (name:string,age:number):Idol;
}   // constructor를 매개변수로 던지기 위해 인터페이스 정의? 

function createIdol(constructor:IdolConstructor,name:string,age:number){
    // return new Idol('아이유',32);
    return new constructor(name,age);
}

console.log(createIdol(Idol,'아이유',32));
// console.log(createIdol());