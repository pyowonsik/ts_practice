/**
 * Spread Operator
 */

const onlyString = ['1','2','3','4']; 
const onlyNumbers = [1,2,3,4];

const arr1 = [...onlyString]; 

const arr2 = [...onlyNumbers,...onlyString];

// spread시 타입 자동 유추