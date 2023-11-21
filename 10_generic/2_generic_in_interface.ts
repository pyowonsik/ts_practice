/**
 * Generic in Interface
 */


interface Cache<T>{
    data : T[];
    lastUpdate : Date;
}



const cache1 : Cache<string> = {
    data  : ['data1','data2'],
    lastUpdate : new Date(),
}


// 타입 유추 안됨 , 타입 생략 안됨 
// const cache2 : Cache<> = {
//     data  : [123,456],
//     lastUpdate : new Date(),
// }


// 제네릭에서 Default 타입 
interface DefaultInterface<T = string>{
    data : T[];
}

const cache3 : DefaultInterface = {
    data  : ['123','456'],
}