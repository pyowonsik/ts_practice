/**
 * Property Initialization
 */

class Person {
    // 일반적인 필수값 선언
    name : string;

    // 초기값 제공 선언 
    age : number = 23;

    // optional 값 선언
    pet? : string;

    // type of undefined 선언
    petAge : number | undefined;

    constructor(name:string){
        this.name = name;
    }
}



class RouteStack {
    stack! :string[]; // ! : 생성자에서는 초기화 되지는 않았지만 initialize() 함수를 통해 반드시 초기화 될것이라는 뜻

    // 생성자함수가 호출 될때 변수를 초기화 하는 함수를 호출하여 초기화 한다. 
    constructor(){
        this.initialize();
    }
    
    initialize(){
        this.stack = [];
    }
}
