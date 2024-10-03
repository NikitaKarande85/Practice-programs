
const form=document.querySelector('form');


form.addEventListener('submit',(e)=>{
    e.preventDefault(); //stop reload
    const myFormData=new FormData(form);
    console.log("myFormData",myFormData);

    for(const item of myFormData.entries()){
        console.log(item);
    }
})



// usernameInput.addEventListener('click', () => {
//     console.log('input clicked');
// })


// usernameInput.addEventListener('dblclick', () => {
//     console.log('input double clicked');
// })


// usernameInput.addEventListener('input', (e) => {
//     console.log(e);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
// })


// usernameInput.addEventListener('change', (e) => {
//     console.log(e);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
// })



// usernameInput.addEventListener('focus', (e) => {
//     console.log(e.type);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
// })


// usernameInput.addEventListener('blur', (e) => {
//     console.log(e.type);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
// })