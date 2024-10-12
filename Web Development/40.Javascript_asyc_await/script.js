

async function makeAsyncRequest(){
    const url='//dummyjson.com/test';
    // const response=fetch(url)
    // console.log("response",response);

    const response=await fetch(url)   //await works like (.then)
    const data = await response.json()
    console.log("data",data);
    return data;
}

makeAsyncRequest().then((mydata)=>{
    console.log("mydata",mydata);
})

//async keyword return bydefault promise