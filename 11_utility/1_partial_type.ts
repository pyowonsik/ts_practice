/**
 * Partial Type
 */
interface Idol {
    name : string;
    age : number;
    groupName : string;
    
}
const yujin : Idol = {
    name : '안유진',
    age : 23,
    groupName : '아이브',
}

// Partial : 객체에서 원하는 property만 바꿀수 있음.
function updateIdol(origin:Idol,updates:Partial<Idol>){
    return {
        ...origin,
        ...updates
    }
}

console.log(updateIdol(yujin,{age : 25}));
