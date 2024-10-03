const container=document.querySelector('.container')
const card=document.querySelector('.card')
let count=1;

card.addEventListener('click',()=>{
    const newItem=document.createElement('div')
    newItem.innerText=count;
    count++;
    newItem.classList.add('card','newCard');
    newItem.classList.remove('add-card')
    container.append(newItem) //added in dom
})

container.addEventListener('click',(e)=>{     
    console.log(e.target);
    if(e.target!==container){
        e.target.remove();  //remove element
    }
})