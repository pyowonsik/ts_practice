
// Exclude : 원하는 타입을 제외할수 있다.
type NoString =  Exclude<string|number|boolean,string>
type NoFunction = Exclude<string|(() => {}),Function>