/**
 * Generic in Method
 */

class Idol<T> {
    id : T;
    name : string;
    constructor(id:T,name:string){
        this.id = id;
        this.name = name;
    }

    sayHello<Time>(logTime:Time){
        return `[${logTime}] 안녕학세요. 제 이름은 ${this.name}이고 아이디는 ${this.id} 입니다.`;
    }
}

const yujin = new Idol('a999','안유진');

yujin.sayHello(1992);
yujin.sayHello('1992');


class Message<T>{
    sayHello<Time>(logTime : Time , message : T){
        console.log(`logTime : ${typeof logTime} message : ${typeof message}`);
    }
}

const message = new Message<string>();

message.sayHello<number>(2000,'hello'); 

class DuplicatedGeneric<T>{
    sayHello<T>(logTime:T){
        console.log(`logTime : ${typeof logTime}`);
    }
}

const duplicate = new DuplicatedGeneric<string>();

// method 타입을 따라간다.
duplicate.sayHello<number>(123);