interface Dog{
    name : string;
    age? : number;
    country? : string;
}

// Required : optional 무시
const requiredDog : Required<Dog> = {
    name : '모찌',
    age : 7,
    country : 'Korea'
}