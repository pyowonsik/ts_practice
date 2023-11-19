/**
 * Intersection
 * 
 * &
 */


 
interface Human {
    name : string;
    age : number;
}

type Contacts = {
    phone : string;
    address : string;
}

type HumanAndContacts = Human & Contacts;


// 프로퍼티 모두 선언해 주어야 한다. 
let humanAndContacts : HumanAndContacts = {
    name : '표원식',
    age : 26,
    phone : '010-1234-1234',
    address : '대한민국'
}


type StringAndNumber = string & number; // 나올수 없는 값이기 때문에 never 타입
// let stringAndNumber : StringAndNumber = never;


// 객체를 intersection 하게 되면 모든 프로퍼티를 포함하는 객체를 생성해야한다.
// 프리미티브 값을 intersection 한다면 never타입 생성