const afterTwoSeconds = function(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done');
        },2000);
    });
}

const runner = async function (){
    const res = await afterTwoSeconds();
    console.log(res);
}
runner();

const afterOneSeconds = function():Promise<string>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done')
        },1000);
    })
}

const runner2 = async function () {
    const res2 = await afterOneSeconds();
    console.log(res2);
}

runner2();

// const runner3 = async function () {
//     return 'string type';
// }

const afterThreeSeconds = function(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done');
        },2000);
    })
};


const runner3 = async function(){
    const res3 = await afterThreeSeconds();
    console.log(res3);
}

runner3();



const afterFourSeconds = function(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done');
        },4000)
    })
}


const afterFiveSeconds = function(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve('done');
        },5000);
    })
}

const runner5 = async function(){
    const res5 = await afterFiveSeconds();
    console.log(res5);
}