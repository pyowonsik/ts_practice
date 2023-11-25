
// ConstoructorParmeters : 클래스의 파라미터 값드을 순서대로 받아올수 있다.
class Idol{
    name : string;
    age : number
    constructor(name:string , age : number){
        this.name = name;
        this.age = age;
    }
}


type constructorParameterType = ConstructorParameters<typeof Idol>