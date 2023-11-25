/**
 * method decorator
 */

class Idol {
    name:string;
    constructor(name:string){
        this.name = name;
    }

    @TestMethodDecorate
    @Configurable(false)
    @MethodCallLogger('PROD')
    dance(){
        return `${this.name}이 춤을 춥니다;`
    }
}

// target - static 메서드에 데코레이팅을 할 경우 생성자 함수
//        - instance 메서드에 데코레이팅을 할 경우 인스턴스의 프로토 타입이 출력 
// propertyKey - method의 이름
// descriptor - property descriptor

function TestMethodDecorate(target:any,propertyKey:string,descriptor:PropertyDescriptor){
    console.log('Log Call');
    console.log('----- target -----');
    console.log(target);
    console.log('----- propertyKey -----');
    console.log(propertyKey);
    console.log('----- descriptor -----');
    console.log(descriptor);
}

const rose = new Idol('로제');
console.log('----- run dance -----');
rose.dance();

function Configurable(configurable : boolean){
    return function(target:any,propertyKey:string,descriptor:PropertyDescriptor){
        descriptor.configurable = configurable;
    }
}

console.log(Object.getOwnPropertyDescriptors(Idol.prototype));

// constructor.name이 춤을 춥니다 -> running function : dance로 메소드를 변경해줌
function MethodCallLogger(env:string){
    return function(target:any,propertyKey:string,descriptor:PropertyDescriptor){
        const originalMethod  = descriptor.value;
         
        // 메서드 재정의후 데코레이터를 통해 기존 메서드로 돌려줌 -> 데코레이터가 실행됨에 따라서 새로 정의된 메서드로 변경되어 실행됨 
        descriptor.value = function(...args:any[]){
            console.log(`[${env}] running function : ${propertyKey}`);
            const result = originalMethod.apply(this,...args);
            return result;
        }
    }
}

rose.dance();

function ChangeClass<T extends {new (...args:any[]):{}}>(constructor:T){
    return class extends constructor{
        group = '아이브'
        constructor(...params:any[]){
            super(params);
        }

    }
}