const red=document.querySelector('.red')
const green=document.querySelector('.green')
const blue=document.querySelector('.blue')

red.addEventListener('click',()=>{
    console.log("red")
})

green.addEventListener('click',(e)=>{
    e.stopPropagation(); //for stop bubbling
    console.log("green")
})

blue.addEventListener('click',(e)=>{
    e.stopPropagation();  //for stop bubbling
    console.log("blue")
})