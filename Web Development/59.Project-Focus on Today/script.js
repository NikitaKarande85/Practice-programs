
const checkbocList=document.querySelectorAll('.customcheckbox');
const inputFields=document.querySelectorAll('.goalInput');
const errorlable=document.querySelector('.errorMsg');
const progressbar=document.querySelector('.progress-Bar')
const progressValue=document.querySelector('.progress-val')

checkbocList.forEach((checkbox)=>{
    checkbox.addEventListener('click',(e)=>{
        const isSelected= [...inputFields].every(function (input) {
            return input.value
          })

        if(isSelected){
            checkbox.parentElement.classList.toggle('completed');
            progressValue.style.width = '33.33%'
        }else{
            // errorlable.style.display='block';
            progressbar.classList.add('show-error')
        }
    })
})

inputFields.forEach((input) => {
    input.addEventListener('focus', () => {
        progressbar.classList.remove('show-error')
    })
})