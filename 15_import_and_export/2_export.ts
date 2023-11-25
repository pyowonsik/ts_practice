export class  Idol {
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
};

export const rose = new Idol('로제',29);
export const number = 999;
export interface Pet{
    name:string,
    age:number;
}

export default {
    name : '코드팩토리',
    age:32
}