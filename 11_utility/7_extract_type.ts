// Extract : 원하는 타입을 선택

type stringOnly = Extract<string|number|boolean,string>
type funtionOnly = Extract<string|(() => {}),Function>