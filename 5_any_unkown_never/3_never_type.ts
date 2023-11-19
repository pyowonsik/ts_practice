
// 1. 함수에서 에러 던질때
function throwError() : never {
    throw Error();
}
// 2 . 무한루프

// 3. 존재할수 없는 인터섹션
type StringAndNumber = string & number;
// let neverType : never = 10;
// let neverType : never = undefined; 



// 5강정리 -> never는 일어날수 없는 타입 , 무한루프 , 함수에서 에러이고 , unkown은 any 보다는 강력한 타입 , any 사용시 에러를 발생하지 않아서 생 자박스크립트를 사용하는것과 같다. 
