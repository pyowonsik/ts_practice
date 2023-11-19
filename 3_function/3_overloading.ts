/**
 * Overloading
 */

/**
 * 파라미터를 
 * 1) 하나를 받거나
 * 2) 세개를 받는 함수
 */


function stringOrStrings(members : string) : string;
function stringOrStrings(member1 : string, member2:string , member3:string) : string;

function stringOrStrings(member1 : string,member2? : string,member3? : string) : string{
    if(member2 &&  member3){
        return `아이브 : ${member1},${member2},${member3}`;
    }else{
        return `아이브 : ${member1}`;
    }
}

console.log(stringOrStrings('안유진','장원영','레이'));
console.log(stringOrStrings('안유진'));
// console.log(stringOrStrings('안유진','장원영'));
