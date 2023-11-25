
@Test
@Frozen 
@LogTest('PROD')
@ChangeClass
class Idol{
    name :string;
    age : number;
    constructor(name:string,age:number){
        this.name = name;
        this.age =  age;
    }
}


function Test(constructor:Function){
    console.log(constructor);
}

function Frozen(constructor:Function){
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

const yujin = new Idol('안유진',23);
console.log(Object.isFrozen(Object.getPrototypeOf(yujin)));

function LogTest(env:string){
    return function(constructor:Function){
        console.log(`[${env}] : ${constructor}가 실행됐습니다.`);
    }
}

const wonyoung = new Idol('장원영',22);
console.log(wonyoung);


// function ChangeClass<T extends {new(...args:any[]):{} }>(constructor : T) {
//     return class extends constructor{
//         groupName = '아이브';
//         constructor(...params:any[]){
//             super(...params);
//             console.log('constructor instantiated');
//         }
//     }
// }

function ChangeClass<T extends {new(...agrs:any[]):{}}>(constructor:T){
    return class extends constructor{
        groupName =  '아이브';
        constructor(...params:any[]){
            super(...params);
            console.log('constructor instantied');
        }
    }
}

function ChangeClass2<T extends {new(...args:any[]):{}}>(constructor:T){
    return class extends constructor{
        groupName = '아이브';
        constructor(...params:any[]){
            super(...params);
        }
    }
}

function ChangeClass3<T extends {new (...args:any[]) : {}}>(constructor:T){
    return class extends constructor{
        groupName = '아이브';
        constructor(...params:any[]){
            super(params);
        }
    }
}

function ChangeClass4<T extends {new(...args:any[]):{}}> (constructor:T){
    return class extends constructor{
        group = '아이브';
        constructor(...params:any[]){
            super(params)
        }
    }
}

function ChangeClass5<T extends {new (...args:any[]):{}}> (constructor:T){
    return class extends constructor{
        group = '아이브';
        constructor(...params:any[]){
            super(params);
        }
    }
}


