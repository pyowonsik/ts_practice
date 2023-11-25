class UserModel{
    @propertyLogger
    id :string;
    name:string;

    constructor(id:string,name:string){
        this.id = id;
        this.name = name;
    }
}
function propertyLogger(target:any,propertyKey:string){
    console.log(target);
    console.log(`${propertyKey} 값이 정의 되었습니다.`);

}