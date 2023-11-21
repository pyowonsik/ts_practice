interface Singer<T,V>{
    name : T,
    sing(year : V) : void;
}

class Idol implements Singer<string,number>{
    name: string;
    constructor(name:string){
        this.name = name;
    }
    sing(year: number): void {
        return console.log(`[${year}] : ${this.name}이 노래를 한다.`);
    }
}

const yujin = new Idol('안유진');
yujin.sing(2003);

class Idol2<T,V> implements Singer<T,V>{


    name: T;
    constructor(name:T){
        this.name = name;
    }
    sing(year: V): void {
        return console.log(`[${year}] : ${this.name}이 노래를 한다.`);

    }
}

const wonyoung  = new Idol2<string,number>('장원영');
wonyoung.sing(2003);
