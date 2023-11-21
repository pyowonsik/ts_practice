/** 
 * Read Only property
 */

class Idol{
   readonly name : string;
    age :number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

}

const wonsikObj = {
    name : '표원식',
    age : 26,
}

const wonsik = new Idol('표원식',26);

wonsik.age = 30;
// wonsik.name = '서연';

wonsikObj.age = 30;
wonsikObj.name = '이서연';