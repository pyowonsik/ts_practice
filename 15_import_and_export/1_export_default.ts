class IdolModel{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
}

const number = 12;

// export default number;

 interface Pet{
    name:string;
    breede:string;
}


// export default는 파일당 하나만 가능 하기 때문에 여러개 넘기기위해서는 객체화 해야한다.
export default {
    IdolModel,
    number
}