/**
 * Generic in Type
 */
type GenericSimpleType<T> = T;

const codefactory : GenericSimpleType<string> = '코드 팩토리';


interface DoneState<T> {
    data : T[];
}

interface LoadingState{
    requestedAt : Date;
}

interface ErrorState{
    error: string;
}

type State<T> = DoneState<T> | LoadingState |  ErrorState;
 
let state : State<string> = {
    data : ['1','2','3','4','5','6'],
}

state = {
    requestedAt : new Date(),
}

state = {
    error : 'error',
}