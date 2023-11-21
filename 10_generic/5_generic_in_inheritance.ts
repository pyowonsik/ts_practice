class BaseCache<T>{
    data : T[] = [];
}

class StringCache extends BaseCache<string>{};

const stringCache = new StringCache();

stringCache.data;

class GenericChild<T,Message> extends BaseCache<T>{
    message? : Message;
    constructor (message? : Message){
        super();
        this.message = message;
    }
}

const genericChild = new GenericChild<string,string>('error');
genericChild.data;
genericChild.message;

/**
 * 제네릭의 Inheritance
 */

interface BaseGeneric{
    name : string;
}

class Idol<T extends BaseGeneric>{
    information : T;
    constructor(information:T){
        this.information = information;
    } 
}

const yujin = new Idol({name:'안유진',age:24});


/**
 * key of 사용
 */

const testObj = {
    a:1,
    b:2,
    c:3
};

// keyOf : Object의 키들 
function objectParser<O,K extends keyof O>(obj:O,key:K){
    return obj[key];
}

const val = objectParser(testObj,'a');

/**
 * 삼항 연산자
 */

class Idol2{
    type?:string;
}


class FemaleIdol extends Idol2{
    type : 'FemaleIdol' = 'FemaleIdol';
}


class MaleIdol extends Idol2{
    type : 'MaleIdol' = 'MaleIdol';
}

type SpecificIdol<T extends Idol2> = T extends FemaleIdol ? FemaleIdol : MaleIdol;

const idol2 : SpecificIdol<MaleIdol> = new MaleIdol();
