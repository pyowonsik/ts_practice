/**
 * method override
 */

class Parent {

    shout(name :string):string{
        return `안녕 내이름은 ${name}야 `;
    }
}

class Child extends Parent {

    shout(name:string,me?:string):string {
        if(!me){
            return super.shout(name);
        }else{
            return super.shout(name) + `내 이름은 ${me}야!`;
        }
    }

}

const child = new Child();
console.log(child.shout('아이유'));
console.log(child.shout('아이유','표원식')); 

/**
 * 속성 override
 */


class PropertyParent {
    name : string | number;

    constructor(name: string | number){
        this.name = name;       
    }
}

class PropertyChild extends PropertyParent {
    name : string;

    constructor(name:string){
        super(name);
        this.name  = name;
    }
}