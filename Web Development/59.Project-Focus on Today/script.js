
const checkbocList = document.querySelectorAll('.customcheckbox');
const inputFields = document.querySelectorAll('.goalInput');
const errorlable = document.querySelector('.errorMsg');
const progressbar = document.querySelector('.progress-Bar')
const progressValue = document.querySelector('.progress-val')
const progressLabel = document.querySelector('.progress-bar-title')
const allgroupData = JSON.parse(localStorage.getItem('goalsData')) || {};
let completedGaolsCount = Object.values(allgroupData).filter((goal) => goal.isCompleted).length;
progressValue.style.width = `${completedGaolsCount / 3 * 100}%`
progressValue.firstElementChild.innerText = `${completedGaolsCount}/3 Completed`

const allQuotes = [
    'Raise the bar by completing your goals!',
    'Well begun is half done!',
    'Just a step away, keep going!',
    'Whoa! You just completed all the goals, time for chill :D',
]

checkbocList.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        const isSelected = [...inputFields].every(function (input) {
            return input.value
        })

        if (isSelected) {
            checkbox.parentElement.classList.toggle('completed');
            // progressValue.style.width = '33.33%'
            const inputId = checkbox.nextElementSibling.id;

            allgroupData[inputId].isCompleted = !allgroupData[inputId].isCompleted;
            completedGaolsCount = Object.values(allgroupData).filter((goal) => goal.isCompleted).length;
            console.log(completedGaolsCount)
            progressValue.style.width = `${(completedGaolsCount / 3) * 100}%`
            progressValue.firstElementChild.innerText = `${completedGaolsCount}/3 Completed`;
            progressLabel.innerText = allQuotes[completedGaolsCount]
            localStorage.setItem('goalsData', JSON.stringify(allgroupData))

        } else {
            // errorlable.style.display='block';
            progressbar.classList.add('show-error')
        }
    })
})

inputFields.forEach((input) => {
    if (allgroupData[input.id]) {
        input.value = allgroupData[input.id].name;
        if (allgroupData[input.id].isCompleted) {
            input.parentElement.classList.add('completed')
        }
    }

    input.addEventListener('focus', () => {
        progressbar.classList.remove('show-error')
    })

    input.addEventListener('input', (e) => {
        if (allgroupData[input.id] && allgroupData[input.id].isCompleted) {
            e.target.value = allgroupData[input.id].name
            return
        }

        allgroupData[input.id] = {
            name: input.value,
            isCompleted: false
        };
        localStorage.setItem('goalsData', JSON.stringify(allgroupData))
        console.log('allgroupData', allgroupData);
    })
})
