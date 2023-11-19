 /**
  * Nested Object 
  */

 type NestedPerson = {
    identity : {
        name : string,
        age : number
    },
    nationality : string
 };

 const wonsik = {
    identity : {
        name : '표원식',
        age : 26
    },
    nationality : '대한민국'
 };

 type TPeson = {
    identity : TIdentity,
    nationality : string,    
 };

 type TIdentity ={
    name : string,
    age: number,
 };


const seoyeon : TPeson = {
    identity :{
        name : '이서연',
        age : 24
    },
    nationality : '대한민국',
};

interface IPerson {
    identity : IIdentity,
    nationality : string,
}

interface IIdentity {
    name : string,
    age :number,
}

const codefactory : IPerson = {
    identity : {
        name : '코드팩토리',
        age : 32
    },
    nationality : '대한민국'
};

console.log(codefactory.identity.name);



