/**
 * Object
 */


const codefactory = {
    name : '표원식',
    age : 26
};

interface IPerson {
    name : string,
    age : number
};

type TPerson = {
    name : string,
    age : number
};


let iPerson : IPerson = {
    name : '아이유',
    age : 30
};

let tPerson : TPerson = {
    name : '유인나',
    age : 30
};

iPerson.age;
tPerson.name;