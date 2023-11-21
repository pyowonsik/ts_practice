interface Cat<T,V>{
    name : T;
    age : V;
}

const ori : Cat<string,number> ={
    name : "오리",
    age : 4,
};

ori.name = '원식';


// ReadOnly : 수정 불가능
const bori : Readonly<Cat<string,number>> = {
    name : "보리",
    age : 6,
}
// bori.age = 8;

// JS 
Object.freeze(bori);