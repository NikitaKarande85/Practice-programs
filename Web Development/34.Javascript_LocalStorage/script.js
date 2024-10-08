const p = document.querySelector('.mydata');
const myinput = document.querySelector('.myinput');
const remove = document.querySelector('.remove');


myinput.addEventListener('input', (e) => {
    console.log("e", e.target.value)

    localStorage.setItem("Mydata", e.target.value);
    p.innerText = localStorage.getItem('Mydata');

})

remove.addEventListener('click', () => {
    localStorage.removeItem('Mydata');
    p.innerText = "";
    myinput.value = ""
})


//-------------------------------------------------------------

//local storage in everything is save in string format
const myInfo = {
    username: "Nikita",
    company: "google"
}

//localStorage.setItem('myInfo',myInfo)
//[object Object]  //stored in localstorage issue

localStorage.setItem('myInfo', JSON.stringify(myInfo))
//"{"username":"Nikita","company":"g...

const localstorageInfo = localStorage.getItem('myInfo')
console.log("localstorageInfo",localstorageInfo);
//"{"username":"Nikita","company":"google"}
//we need again its object 

console.log(JSON.parse(localstorageInfo))
//Its converted string into object format
//{username: 'Nikita', company: 'google'}