const fetchData = callback =>{
setTimeout(()=>{
    callback('Done');
},1500)
}

// sync code
setTimeout(()=>{
    console.log('Timer is done')
    fetchData(text =>{
        console.log(text)
    })
},2000)

// async code
console.log('Hello')
console.log('Hi')

// Async code with promisses
const fetchData = () => {
    const promise = new Promise((resolve , reject)=>{
    setTimeout(() => {
        resolve('Done');
    }, 1500)
    });
    return promise   
};

// sync code
setTimeout(() => {
    console.log('Timer is done')
    fetchData()
    .then(text => {
        console.log(text)
        return fetchData();
    })
    .then(text2 =>{
        console.log(text2)
    })
}, 2000)

// async code
console.log('Hello')
console.log('Hi')
