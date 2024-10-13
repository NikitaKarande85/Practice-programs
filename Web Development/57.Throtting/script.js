
const count=document.querySelector('.count')

const updateNumber=throttle(()=>{count.innerText=++count.innerText},100)

document.addEventListener('mousemove',()=>{
    updateNumber();
})

function throttle(func,delay=1000){
    let timerId=null;
    return (...arg)=>{

        if(timerId) return

        timerId=setTimeout(()=>{  
            timerId=null;  //same as cleartimeout
            func(...arg)
        },delay)
    }

}