import 'reflect-metadata';

const iu = {
    name : '아이유',
    age : 32,
    natioality : 'Korean',
}

console.log(iu);

/**
 * 파라미터 정의
 * 
 * 1) 메타데이터의 키
 * 2) 메타데이터 키에 저장할 값
 * 3) 메타데이터를 저장할 객체
 * 4) 메타데이터를 저장할 객체의 프로퍼티
 * 
 * 4번은 필수가 아니다. -> 객체 뒤에 붙는 파라미터는 프로퍼티에 meta-data를 저장 한다. 
 * 
 * Own : 프로토타입 체인 위로 검색하지 않고 자기 자신에 존재하는지만 확인
 * 
 * 메타 데이터란 ? 데이터에 대한 데이터 
 * 
 */

 Reflect.defineMetadata('test-meta',123,iu);        // Reflect.defineMetadata() metaData 정의

 console.log(iu);   // js 객체에서는 볼수 없다

 console.log(Reflect.getMetadata('test-meta',iu));  // Reflect.getMetaDat()로 읽을수 있다.

  
 Reflect.defineMetadata('test-meta',456,iu);    

 console.log(Reflect.getMetadata('test-meta',iu)); 

 Reflect.defineMetadata('test-meta2',789,iu);    

 console.log(Reflect.getMetadata('test-meta2',iu)); 

 console.log(Reflect.getMetadata('test-meta',iu)); 

 Reflect.defineMetadata('test-meta3',{name:'표원식'},iu) ;

 console.log(Reflect.getMetadata('test-meta3',iu)); 

 /**
  * 프로퍼티에 저장하기
  */
 Reflect.defineMetadata('object-meta',999,iu,'name');
 console.log(Reflect.getMetadata('object-meta',iu,'name')); 


// Reflect.deleteMetadata('object-meta',iu,'name');
console.log(Reflect.getMetadata('object-meta',iu,'name')); 
console.log(Reflect.hasMetadata('object-mata',iu,'name'));
console.log(Reflect.getMetadataKeys(iu));
console.log(Reflect.getMetadataKeys(iu,'name'));

console.log('------ ------ ------ ------');

Reflect.defineMetadata('prototype-data','프로토 타입 메타에요!',Object.getPrototypeOf(iu)); // 프로토타입에 메타데이터를 저장
Reflect.defineMetadata('child-data','자식 메타에요',iu); 

console.log(Reflect.getMetadataKeys(iu));   // 프로토 타입 Keys
console.log(Reflect.getOwnMetadataKeys(iu));  // 자기 자신의 Keys