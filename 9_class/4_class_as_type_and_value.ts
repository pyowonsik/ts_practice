/**
 * Class As Type And Value
 */

class Dog{
    name : string;
    constructor(name:string){
        this.name = name;
    }

    bark() {
        return `${this.name}가 짖습니다.`;
    }
}

let ori = new Dog('오리');
ori.bark();

// ori는 Dog 타입을 생성한 적이 없는데 Dog타입이다. -> 클래스 자체가 타입이 될수 있다.

// ori = '오리';
ori = {
    name:'별이',
    bark(){
        return `${this.name}이 짖는다.`
    }
}

// ori는 Dog 타입이기 때문에 객체를 이용하여 Dog 클래스에 맞춰준다면 새로운 값을 할당할수 있다. 클래스는 객체를 찍어내는 틀이기 때문.