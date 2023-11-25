class Cat{
    name:string;
    constructor(name:string){
        this.name = name;
    }

    dance(
        @LogParam
        adj:string){
        console.log(`${this.name}이 ${adj} 춤을 춥니다.`)
    }
}

const cat = new Cat('냥이');
cat.dance('신나게') 


function LogParam(target:any,propertyKey:string,paramIndex:number){
    console.log(`${paramIndex}번째 파라미터인 ${propertyKey}가 입력 되었습니다.`);
}