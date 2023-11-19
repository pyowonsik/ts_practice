/**
 * Object Intersection
 */

type PrimitiveIntersection = string & number; 

interface PersonType {
    name : string,
    age : number
}

interface CompanyType {
    company : string,
    companyRestrationNumber : string;
}


type PersonAndCompanyType = PersonType & CompanyType;


let jisu : PersonAndCompanyType = {
    name : '지수',
    age : 32,
    company : 'YG',
    companyRestrationNumber : 'xxxyyyzzz'
};


interface PetType {
    petName : string,
    petAge : number; 
}

type CompanyOrPet = PersonType & (CompanyType | PetType);

// PersonType은 필수 , Company Or PetType 둘중 하나는 필수
const codefactory : CompanyOrPet = {
    
    // Person Type
    name : '코드팩토리',
    age : 32,

    // Company Type
    company : '주식회사 코드팩토리',
    companyRestrationNumber : 'xxxyyyzzz',

    // Pet Type
    petName : '오리',
    petAge : 7,
}
