const resolveBtn = document.querySelector('.resolve')
const rejectBtn = document.querySelector('.reject')

const p = new Promise((resolve, reject) => {
    resolveBtn.addEventListener('click', function () {
        resolve("Resolved promise...")
    })

    rejectBtn.addEventListener('click', function () {
        reject("rejected promise")
    })
})

console.log("p",p);

p.then((data)=>{
    console.log("data",data);
    return "hello";
}).then((data)=>{
    console.log("data received from then",data);
    return data;
}).then((data)=>{
    console.log("received",data);
    console.log("p",p);
}).catch((err)=>{
    console.log("p",p);
    console.log("err",err);
})