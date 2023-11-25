class Rectangle{
    #width : number;
    #height : number;

    constructor(width:number,height:number){
        this.#width = width;
        this.#height = height;
    }

    @Configurable(false)
    get width(){
        return this.#width;
    }
 
    @Configurable(false)
    get height(){
        return this.#height;
    }
}




function Configurable(configurable:boolean){
    return function(target:any,propertyKey:string,descriptor:PropertyDescriptor){
         descriptor.configurable = configurable;
    }
}

const rectangle = new Rectangle(100,200);

console.log(Object.getOwnPropertyDescriptors(Rectangle.prototype));