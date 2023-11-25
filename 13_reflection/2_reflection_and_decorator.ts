 import 'reflect-metadata'


const restrictParamValueKey = Symbol('restrictParamValue');

interface RestrictionInfo<T> {
     index : number;
     restirctedValues : T[];

}

function RestrictParamValue<T>(restirctedValues:T[] ){

    return (target:any,propertyKey:string,index:number) => {
        // target = idol.prototype , propertyKey = sing
        const prevMeta = Reflect.getOwnMetadata(restrictParamValueKey,target,propertyKey) ?? [];

        const info : RestrictionInfo<T> = {
            index,
            restirctedValues,
        };
        Reflect.defineMetadata(restrictParamValueKey,[
            ...prevMeta,
            info,
        ],target,propertyKey);
        

  
        console.log(info);

        console.log(Reflect.getOwnMetadata(restrictParamValueKey,target,propertyKey));
    }
}
function ValidateMethod(target:any,propertyKey:string,descriptor:PropertyDescriptor){
    const meta:RestrictionInfo<any>[] =Reflect.getOwnMetadata(restrictParamValueKey,target,propertyKey) ?? [];

    const original = descriptor.value;
     
    // sing() 함수  오버라이딩
    // args = sing()을 호출할떄의 아규먼트(파라미터)  
    descriptor.value = function(...args:any){
        const invalids =  meta.filter(
            // e.restrictedValues => ['신나게','열정적으로']
            // arg[e.index] => [ { index: 0, restirctedValues: [ '신나게', '열정적으로' ] } ]
            (e) => !e.restirctedValues.includes(args[e.index])
        );



        if(invalids.length > 0){
            throw Error(`잘못된 값입니다. ${invalids.map(e => args[e.index]).join(', ')}`);
        }
        return original.apply(this,args);
    }

}


class Idol{ 
    name :string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }


    @ValidateMethod
    // style에는 '신나게' 또는 '열정적으로'
    sing(@RestrictParamValue(['신나게','열정적으로'])style:string,@RestrictParamValue([1,2,3])ranking:number){
        return `${this.name}이 ${style} 노래를 부릅니다.`
    }

}

const iu = new Idol('아이유',30);
console.log(iu.sing('신나게',1));
console.log(iu.sing('열정적으로',2));
// console.log(iu.sing('기분나쁘게',4));    
