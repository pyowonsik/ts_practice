/**
 * Abstract Class
 */


abstract class ModelWithId{
    id : number;
    constructor(id:number){
        this.id = id;
    }
}

// const modelWithId = new Mode lWithId(111);


class Product extends ModelWithId{
      
}

const product = new Product(1);
console.log(product); 


abstract class ModelWithAbstractMethod {
    abstract shout(name :string ) : string;
}

class Person extends ModelWithAbstractMethod{
    shout(name: string): string {
        return `소리 질러~`;
    }
}
