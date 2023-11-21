/**
 * Class 선언하기
 */

// 클래스 내부 변수 혹은 메서드에 타입까지 정의

class SampleClass {

}


class Game{
    name : string;
    country : string;
    download :number;

    constructor(name:string,country:string,download:number){
        this.name = name;
        this.country = country;
        this.download = download;
    }
    introduce() : string{
        return `${this.name}은 ${this.country}에서 제작된 ${this.download}개의 다운로드를 달성한 게임 입니다.`
    }
}

const starcraft = new Game('Star Craft','USA',1000000);
const retVal = starcraft.introduce();