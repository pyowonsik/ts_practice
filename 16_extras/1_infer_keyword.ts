/**
 * Inter Keyword는 conditional Type에서만 사용 가능한 키워드 이다.
 * 그러니 extends 키워드를 사용했을때 extend 한 대상에서 타입을 한번더 추론하는 역할을 한다.
 * genric 사용시 -> 타입 추론이 한번더 필요한 겨우 사용한다.
 */


//  type Flatten<T> = T extends Array<infer ElementType> ? ElementType : T;  
// => string[] 아니면 그대로 반환을 해버림 , 그렇기 때문에 배열의 타입이 무엇인지를 추론하여 , 어떤 타입의 배열이 오던 []하나를 벗겨낼수있다.

type Flatten<T> = T extends Array<infer ElementType> ? ElementType : T; 

// Array를 벗겨낼때
type stringArray = Flatten<string[]>;
type stringArray2 = Flatten<string[][]>;
type numberArray = Flatten<number[]>;


// Return Type 추론 == 
// type InferReturnType<T> = T extends (...args:any[]) =>  string ? string : T; 
// => string 을 반환하는 함수가 아니면 함수 그대로를 반환해버림 , 그렇기 때문에 함수의 반환 타입이 무엇인지를 추론할수 있다.
type InferReturnType<T> = T extends (...args:any[]) => infer ReturnType ? ReturnType : T;

type numberArray2 = InferReturnType<number[]>;

type StringFunc = InferReturnType<() => string>;
type NumberFunc = InferReturnType<() => number>;
