// ----------------------------ES6---------------------------------------------

// -------------------Default parameter--------------------------------------

Add(5) //7
function Add(a, b = 2) { //default parameter
    return a + b;
}

Add(5, 5) //10
function Add(a, b = 2) { //default parameter
    return a + b;
}

// ------------------------(...spread operator)-------------------------------------

const spreadArr1 = [1, 2, 4, 5, 6]
const spreadArr2 = [7, 8, 9, 10]

//If we need to join two array we can use spread oprator.we can do concat also.
const joinedArr1 = spreadArr1.concat(spreadArr2); //1 way
console.log("joinedArr1", joinedArr1);//[1, 2, 4, 5, 6, 7, 8, 9, 10]


//for array
const myString = "chiu"
const joinedArr2 = [...spreadArr1, ...spreadArr2, "nikita", ...myString];
console.log("joinedArr2", joinedArr2);//[1, 2, 4, 5, 6, 7, 8, 9, 10, 'nikita', 'c', 'h', 'i', 'u']


// for object
const forSpreadObj1 = {
    name: "Nikita",
    company: "Google"
}

const updatedUser = { ...forSpreadObj1, age: 20 }
//{name: 'Nikita', company: 'Google', age: 20}
console.log("updatedUser", updatedUser);


// --------------------------rest parameter--------------------------------

// spread operator - work on spreading
// rest operator- work on combine

function Add(...arr) {  //rest parameter accepted and combined data
    console.log("arr", arr);  //[1, 2, 3, 4, 5, 6]
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

const result = Add(1, 2, 3, 4, 5, 6); //we passing seperate values but add function convert our values in array.
console.log("result", result);

// ..................1....................
const numbers = [1, 2, 3, 4]
function Addition1(num) {
    console.log("num", num)//1
}
Addition1(...numbers)//spred operator

// ...................2.....................

function Addition2(...num) { //rest parameter
    console.log("num", num)//[1, 2, 3, 4]
}
Addition2(...numbers)//spred operator

// ...................3......................

// function Addition3(...arr,a,b){  //rest parameter position is last //error  
// function Addition3(a,...arr,b){  //rest parameter position is last //error 
function Addition3(a, b, ...arr) {

    console.log("a,b", a, b);  //1 2
    console.log("arr", arr);  //[3, 4, 5]
}
Addition3(1, 2, 3, 4, 5)


// -----------------------Destructuring in javascript---------

// with array ..........

const destructArray = ["red", "green", "blue", "voilet"];

console.log(destructArray[0]);
console.log(destructArray[1]);
console.log(destructArray[2]);

const [color1, color2, color3] = destructArray;  //destruct array
const [, , , thirdColor] = destructArray;
const { 0: a, 1: b, 2: c } = destructArray;  //direct accessing perticular element

console.log("thirdColor", thirdColor);//voilet
console.log("c", c); //blue

console.log("color1", color1)  //red
console.log("color2", color2)  //green
console.log("color3", color3)  //blue


//with object...............

const destructingObj = {
    name: "niks",
    aim: "join google company",
    target: {
        react: "see bootcamp",
        datastructure: "solve 400 questions"
    }
}

const { name, aim, target } = destructingObj; //destructering
const { target: { react } } = destructingObj;


console.log("name", name)  //niks
console.log("aim", aim)  //join google company
console.log("target", target)  //{react: 'see bootcamp', datastructure: 'solve 400 questions'}

console.log("react", react)  //react see bootcamp


function AcceptdestructeringObj({name,aim}){ //destructing (same as array only in [])  function AcceptdestructeringObj([name,aim]){
    console.log("name,aim:- ",name,aim); //niks join google company
}
AcceptdestructeringObj(destructingObj)



// -----------------------------BOM(Browser object model)------------


// window-ek asa object jyachi help gheun aapn browser shi interact kru shkto

// location    
// history   (chrome back forword history)
// innerHeight   (chrome height)
// innerWidth    (chrome width)
// open()        (chrome in open new tab)
// close()       (chrome tab close)
// resizeBy()    (chrome tab resize)
// resizeTo()
// moveTo()
// moveBy()
// scrollBy()
// scroll()
// scrollTo()   (chrome tab scroll - scroll(0,50)-its scroll smothly this distance)
// print()      (chome page print with printer)
// document
// localstorage


// -------------------------DOM--------------------------------------------

// window->document (document is only viewport and window is whole browser)
// DOM- document object model
// document  //enter this only on browser console(All html is here)
// html parser(engin) set our all html in DOM
//we can dom manipulation also(modify the elements)

//Enter below commands in browser console
// -window
// -window.document
// -document
// -document.body
// -document.body.children[0]
// -document.body.children[0].innerHTML
//  output- 'Javascript concepts'



// ------------------------------Selecting element--------------------------

// const allImages = document.images  //get all images
// const allImages = document.getElementsByTagName('img')
// const cssImage = document.getElementsByClassName('css-image')[0]
// const cssImage = document.getElementById('css-image')
// const cssImage = document.querySelectorAll('#css-image')
// const cssImage = document.querySelector('.css-image')     //more use
// const jsImage = document.querySelector('[alt="javascript roadmap"]')
// const ul = document.querySelector('ul')

const allImages = document.querySelectorAll('img')

// const imageInsideUl = ul.querySelector('.css-image')

const imagesUrl = [
  'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
  'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
  'https://media.istockphoto.com/id/1181366400/photo/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-on.jpg?s=612x612&w=0&k=20&c=jWUMrHgjMY9zQXsAwZFb1jfM6KxZE16-IXI1bvehjQM=',
]

// allImages[0].src = imagesUrl[0]
// allImages[1].src = imagesUrl[1]
// allImages[2].src = imagesUrl[2]

// for (let i = 0; i < allImages.length; i++) {
//   allImages[i].src = imagesUrl[i]
// }

allImages.forEach((image, i) => {
  image.src = imagesUrl[i]
})



// ----------Difference between innerText and textContent-------------

document.querySelector('.myclass').innerText;//'Javascript concepts'
document.querySelector('.myclass').textContent;//'Javascript               concepts'

// inner text ignore space and textcontnd not ignore


// go to element tab in browser and on element right click and copy the JS path
// ->document.querySelector("body > h1")



// -------------------setAttribute and getAttribute---------------------

document.querySelector('.myclass').getAttribute("class");
{/* <h1 class="myclass">Javascript concepts</h1> */}

document.querySelector('.myclass').setAttribute("class","hello")
{/* <h1 class="hello">Javascript concepts</h1> */}

document.querySelector('.myclass').setAttribute("new","bye")
{/* <h1 class="myclass" new="bye">Javascript concepts</h1> */}




// ------------------------change style----------------------------

const h1 = document.querySelector('h1')
const paragraph = document.querySelector('p')
const allLinks = document.querySelectorAll('a')

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<h4>Hiii</h4>'

h1.style.color = 'hotpink'
h1.style.backgroundColor = 'skyblue'

// for (let i = 0; i < allLinks.length; i++) {
//   allLinks[i].style.color = 'teal'
// }


for (const link of allLinks) {
    //1st way

    // link.style.color = 'teal'
    // link.style.textDecorationLine = 'none'
    // link.style.fontWeight = '700'
    // link.style.fontFamily = 'cursive'
    // link.style.fontSize = '18px'

    //2nd way

    // link.style.cssText = `
    //     color: teal;
    //     text-decoration-line: none;
    //     font-weight: 700;
    //     font-family: cursive;
    //     font-size: 18px;
    // `

    //3rd way

    // link.className = 'green-link'

    //4th way 

    // link.setAttribute('class', 'green-link')

    //5 th and final way

    link.classList.add('green-link')
    link.classList.remove('my-link')
    // link.classList.toggle('my-link') 1.true-> remove class 2.false->add class
}


// --------------append and append child--------------------


const h1 = document.querySelector('h1')
const container3 = document.querySelector(".container")
const card = document.querySelector('.card')

// container3.appendChild(h1)                       //cut paste element
// container3.appendChild(h1.cloneNode(true))       //copy paste element

// for (let i = 2; i <=100; i++) {
//     const newCard = card.cloneNode()
//     newCard.innerText = i
//     container3.append(newCard) //added new card in container3
// }



// --------------------Creating element-------------------------------

const h1 = document.querySelector('h1')
const container2= document.querySelector('.container')
// const firstImage = document.querySelector("img")

const paragraph2 = document.createElement('p')
// paragraph2.innerText = 'Hello'
// paragraph2.classList.add('my-para')

// container2.append(paragraph2)   //append means add element in the last

// container2.appendChild(h1)
// container2.appendChild(h1.cloneNode(true))

for (let i = 1; i <= 100; i++) {
  const newImg = document.createElement('img')
  newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
  container2.append(newImg)
}

// const newImage = document.createElement('img')

// newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`

// container2.append(newImage)


// -----------------------------------------------------------

let container = document.querySelector('.container')

//correct way
for(let i = 1; i <= 100; i++) {
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const newImage = document.createElement('img')
    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    const paragraph = document.createElement('p')
    paragraph.innerText = i

    imgContainer.append(newImage, paragraph)
    container.append(imgContainer)
}


//not use more

// let myHTML = ``

// for (let i = 1; i <= 100; i++) {
//   myHTML += `
//     <div class="img-container">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//         <p>${i}</p>
//     </div>
//     `
// }

// container.innerHTML = myHTML

const myImg = document.querySelector("body > div > div:nth-child(5)")

// -----------------------------------------------------------------------