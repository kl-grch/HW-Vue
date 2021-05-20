let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let data = Math.random();
        if (data < 0.5) {
            resolve(`Код выполнился ${data}`);
        } else {
            reject(`Выполнение привело к ошибке ${data}`)
        }
    }, Math.floor(Math.random() * 20000))
});
console.log(promise)

promise
    .then((successData) => {
        console.log(`SUCCESS ${successData}`);
        return {info: successData}
    })
    .then((returnData)=>{
        console.log(returnData);
    })
    .catch((errorData) => {
        console.log(`ERROR ${errorData}`)
    });

function getPromise(){
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (Math.random() < 0.5) resolve("Код выполнился");
            else reject("Код не выполнился")
        }, Math.floor(5000))
    });
}

async function getResult() {
    let result = await getPromise();
    console.log(result);
    return result;
}

getResult();
getResult().then((data)=>{
    console.log("data " + data);
});


