// ReturnType : 함수의 반환 타입을 알수 있다.
type ReturnTypeSample = ReturnType<() => number>;

type FunctionType = (x:number,y:number) => number;

type ReturnTypeSample2 = ReturnType<FunctionType>;