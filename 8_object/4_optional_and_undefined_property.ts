interface Dog {
    name : string,
    age : number,
    breed? : string,    // string | undefined
}

const sikE : Dog ={
    name : '식이',
    age : 3,
    // breed : '푸들',
};

type Cat = {
    name : string,
    age : number,
    breed : string | undefined;
}


const cat : Cat = {
    name : '나비',
    age : 4,
    breed : undefined
};
