/**
 * Enum
 */

/**
 * API 요청 
 * 상태는 4가지
 * 
 * DONE    - 요청 완료 상태
 * ERROR   - 에러 상태
 * LOADING - 로딩 상태
 * INITIAL - 초기 상태
 */



function runWork(){
    let state = 'INITIAL';

    try{
        state = 'LOADING';
        // 작업을 한다.
        state = 'DONE';
    }catch{
        state = 'ERROR';
    }finally{
        return state;
    }
}

console.log(runWork() == 'DONE');

const doneState = 'DONE';
const errroState = 'ERROR';
const loadingState = 'LOADING';
const initailState = 'INITIAL';



function runWork2(){
    let state = initailState;

    try{
        state = loadingState;
        // 작업을 한다.
        state = doneState;
    }catch{
        state = errroState;
    }finally{
        return state;
    }
}

console.log(runWork2() == doneState);


enum State { 
    DONE = 'DONE',   // 기본값 0,1,2,3
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    INITIAL = 'INITIAL'
}


function runWork3(){
    let state = State.INITIAL;

    try{
        state = State.LOADING;
        // 작업을 한다.
        state = State.DONE;
    }catch{
        state = State.ERROR;
    }finally{
        return state;
    }
}

console.log(runWork3() == State.DONE);
console.log(State.DONE);
