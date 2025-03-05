1.Write a Program to reverse a string in JavaScript.(predefined Function)

Answer-->
function reverseString(str) 
{
  return str.split("").reverse().join("");
}
console.log(reverseString("GeeksForGeeks"));

--------------------------------------------------------------------------
2.Write a Program to reverse a string in JavaScript.(without predefined Function)

Answer-->
let str="Nikita";
let res="";
for(let i=str.length-1;i>=0;i--){
    res+=str[i]
}
console.log(res)

-------------------------------------------------------------------------
// Write a Program to check whether a string is a palindrome string.(predefined Function)

let str="nikiikin";


const res=str.split('').reverse().join('')

if(res===str){
    console.log("It is palindrome")
}else{
    console.log("It is not palindrome")
}

------------------------------------------------------------------------
// Write a Program to check whether a string is a palindrome string.(without predefined Function)


let str="nikiikin";

let reverse=""

for(let i=str.length-1;i>=0;i--){
    reverse+=str[i]
}

console.log("reverse",reverse)

if(str===reverse){
    console.log("It is palindrome")
}else{
    console.log("It is not palindrome")
}

----------------------------------------------------------------------------------
//  Find the largest number in an array in JavaScript. (without predefined Function)

let arr=[56,34,827,23,98,123,44]

var largest=0;
 largest=arr[0];
for(let i=0; i<arr.length;i++){
  if(arr[i]>largest){
      largest=arr[i];
  }
}

console.log(largest)

-------------------------------------------------------------------------------------
//  Find the largest number in an array in JavaScript. (with predefined Function)

let arr=[56,34,827,23,98,123,44]

console.log(Math.max(...arr));

-------------------------------------------------------------------------------------

// How Remove the first element from an array in JavaScript (with predefined Function)

let arr=[45,56,7,43,5465,23];
// arr.shift()   //1st way

arr=arr.slice(1);  //2nd way
console.log(arr);

-----------------------------------------------------------------------------------------
// How Remove the first element from an array in JavaScript (without predefined Function)

let arr=[45,56,7,43,5465,23];

for(let i=1;i<arr.length;i++){
     arr[i - 1] = arr[i];
}
arr.length = arr.length - 1; 
console.log(arr);

-------------------------------------------------------------------------------------------
//  Write a Program to use a callback function?

function myFun(value,callback){
    callback(`Hello, ${value}!`);
}

let res=myFun('geeks',message=>console.log(message));

--------------------------------------------------------------------------------------------
// Write a Program to find a sum of an array?  (without predefined Function)

let arr=[34,5,6,32,5,77]
let result=0;
for(let i=0; i<arr.length;i++){
    result+=arr[i];
}
console.log(result);

------------------------------------------------------------------------------------------
// Write a Program to find a sum of an array? (with predefined Function)

let arr=[34,5,6,32,5,77]
let res=arr.reduce((a,b)=>a+b);
console.log(res)
------------------------------------------------------------------------------------------
// Write a Program to check if a number is prime or not?
let num=24;

let isPrime=true;

for(let i=2;i<num;i++){
    if(num%i==0){
        isPrime=false;
    }
}

if(isPrime==true){
    console.log("Its prime")
}else{
    console.log("Its not prime")
}
---------------------------------------------------------------------------------------------
// Write a Program print all prime numbers till the given number.
let num = 50;

function isPrime(num){
    if (num < 2) return false;
    
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0) return false;
    }
    return true;
}

for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
------------------------------------------------------------------------------------------------
//Write a Program to print Fibonacci sequence up to n terms?

let num=7;

let num1 = 0, num2 = 1, nextNum;

for(let i=1;i<=num;i++){
    console.log(num1);
    nextNum=num1+num2;
    num1=num2;
    num2=nextNum;
}

----------------------------------------------------------------------------------------------------
//Write a Program to find factorial of a number?

let num=7;

let result=1;
for(let i=2; i<=num; i++){
    result*=i
}
console.log(result);

-----------------------------------------------------------------------------------------------------
//Calculate the Power of a Number in JavaScript?

let num1=3;
let num2=4;

console.log(num1 ** num2);

----------------------------------------------------------------------------------------------------	

// Write a Program to print the frequency of elements in an array?

let arr=[34,56,4,4,32,34,2,2,2,5]
let freq={};
for(let i=0;i<arr.length;i++){
    if(freq[arr[i]]){
        freq[arr[i]]+=1
    }else{
        freq[arr[i]]=1
    }
}
console.log(freq)

----------------------------------------------------------------------------------------------------
//  Write a Program to count the occurrences of a character in a string in JavaScript?(predefined)

function FirstOcc(str,char){
    return str.split(char).length-1;
}
console.log(FirstOcc("NikitaKarande","a"))

-------------------------------------------------------------------------------------------------------
// Write a Program to count the occurrences of a character in a string in JavaScript? (without predefined)
let count=0;
function FirstOcc(str,char){
    for(let i=0;i<str.length;i++){
        if(str[i]==char){
            count++;
        }
    }
    return count;
}
console.log(FirstOcc("NikitaKarande","a"))

------------------------------------------------------------------------------------------------
Write a Program to sort an array in Ascending Order in JavaScript?

function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                // swap the elements
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(sortArray([5, 3, 8, 1]));

--------------------------------------------------------------------------------------------------------
let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 5, 10, 25, 40, 100]
-------------------------------------------------------------------------------------------------------
numbers.sort((a, b) => b - a);
console.log(numbers); // [100, 40, 25, 10, 5, 1]
-------------------------------------------------------------------------------------------------------
//Write a Program to merge two arrays in JavaScript? (Predefined)
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(mergeArrays([5, 6], [7, 8]));
---------------------------------------------------------------------------------------------------------
//Write a Program to merge two arrays in JavaScript?(without predefined)
let arr1=[1,3,4,5];
let arr2=[8,6,9];

let concat=[];

for(let i=0;i<arr1.length;i++){
    concat[i]=arr1[i]
}

for(let i=0;i<arr2.length;i++){
    concat[arr1.length+i]=arr2[i]
}

console.log(concat);

-------------------------------------------------------------------------------------------------------------
//Find the Intersection of Two Arrays in JavaScript? 

let arr1 = [2, 2, 3, 5, 6, 7];
let arr2 = [9, 3, 2, 1];

let copy = new Set(arr2);
let result = [...new Set(arr1.filter(val => copy.has(val)))];

console.log(result); // Output: [2, 3]
--------------------------------------------------------------------------------------------------------------
// Find the Intersection of Two Arrays in JavaScript?

let arr1=[2,2,3,5,6,7];

let arr2=[9,3,2,1];

let common=[];

for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
            common.push(arr1[i])
			 //common[k]=arr1[i];
             //k++
        }
    }
}
console.log("common",[...new Set(common)]);

--------------------------------------------------------------------------------------------------------------
//Find the Union of Two Arrays in JavaScript?

// Find the Union of Two Arrays in JavaScript?

let arr1 = [2, 2, 3, 5, 6, 7];
let arr2 = [9, 3, 2, 1];

let result=[...new Set([...arr1,...arr2])]

console.log(result)

--------------------------------------------------------------------------------------------------------------

// Find the Union of Two Arrays in JavaScript?

let arr1 = [2, 2, 3, 5, 6, 7];
let arr2 = [9, 3, 2, 1];

let result = [];

// Insert elements from arr1
for (let i = 0; i < arr1.length; i++) {
    let isPresent = false;
    for (let j = 0; j < result.length; j++) {
        if (arr1[i] === result[j]) {
            isPresent = true;
            break;
        }
    }
    if (!isPresent) {
        result.push(arr1[i]);
    }
}

// Insert elements from arr2 if not already present
for (let i = 0; i < arr2.length; i++) {
    let isPresent = false;
    for (let j = 0; j < result.length; j++) {
        if (arr2[i] === result[j]) {
            isPresent = true;
            break;
        }
    }
    if (!isPresent) {
        result.push(arr2[i]);
    }
}

console.log(result); // Output: [2, 3, 5, 6, 7, 9, 1]

--------------------------------------------------------------------------------------------------------
// Check if a Number is Even or Odd in JavaScript?

let num=10;

if(num%2==0){
    console.log("Your number is even")
}else{
    console.log("Your number is odd")
}
--------------------------------------------------------------------------------------------------------
// Write a Program to find the minimum value in an array in JavaScript?

let arr=[34,2,45,3,778,33];

let min=arr[0];
for(let i=0;i<arr.length;i++){
    if(min>arr[i]){
        min=arr[i];
    }
}
console.log(min)

----------------------------------------------------------------------------------------------------------
// Write a Program to find the minimum value in an array in JavaScript?

let arr=[34,2,45,3,778,33];

let min=Math.min(...arr)
console.log(min)
---------------------------------------------------------------------------------------------------------
// Check if a String Contains Another String in JavaScript?


function containsSubstring(str,word){
    return str.indexOf(word)!==-1;
}
console.log(containsSubstring('GeeksForGeeks', 'For')); 
---------------------------------------------------------------------------------------------------------
// Check if a String Contains Another String in JavaScript?
function containsSubstring(str, word) {
    let strLen = str.length;
    let wordLen = word.length;

    for (let i = 0; i <= strLen - wordLen; i++) {
        let found = true;

        for (let j = 0; j < wordLen; j++) {
            if (str[i + j] !== word[j]) {
                found = false;
                break;
            }
        }

        if (found) return true;
    }

    return false;
}

console.log(containsSubstring('GeeksForGeeks', 'For'));  // true
console.log(containsSubstring('GeeksForGeeks', 'Hello')); // false

----------------------------------------------------------------------------------------------

// Find the First Non-Repeated Character in a String in JavaScript?

let str="nikinksantosh"

let obj={};

for(let char of str){
    obj[char]=(obj[char] || 0)+1
}

for(let i in obj){
    if(obj[i]==1){
        console.log(i);
        break;
    }
}

------------------------------------------------------------------------------------------------
//Find the Longest Word in a String in JavaScript?

function longestWord(str){
    let codesplit=str.split(' ');
    let longest = '';
    
    for(let i of codesplit){
        if(i.length>longest.length){
            longest=i;
        }
    }
    return longest;
}

console.log(longestWord('GeeksForGeeks is great'));

--------------------------------------------------------------------------------------------------
function makeFirstLetterCap(str){
  let mystr=str.split(' ')
  
  for(let i=0;i<mystr.length;i++){
      mystr[i]=mystr[i].charAt(0).toUpperCase() + mystr[i].slice(1);
  }
  return mystr.join(' ');
    
}


console.log(makeFirstLetterCap("nikita karande santosh"))
-------------------------------------------------------------------------------------------------
// Convert an Array of Strings to Uppercase in JavaScript?


function toUpperCaseArray(arr){
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].toUpperCase();
    }
    return arr;
}

console.log(toUpperCaseArray(['g', 'f', 'g']));//[ 'G', 'F', 'G' ]

---------------------------------------------------------------------------------------------------
// Write a Program to reverse an array in JavaScript?
function reverseArray(arr){
    let result=[]
    for(let i=arr.length-1;i>=0;i--){
        result.push(arr[i])
    }
    return result;
}


console.log(reverseArray([5, 6, 7, 8]));
-----------------------------------------------------------------------------------------------------
//  Get the last element of an array in JavaScript?

function lastElement(arr){
    return arr[arr.length-1]
}

console.log(lastElement([6, 2, 9, 5]));
---------------------------------------------------------------------------------------------------
// Remove falsy Values from an array in JavaScript?

function removeFalsyValues(arr){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]){
            newArr[newArr.length]=arr[i];
        }
    }
    return newArr;
}


console.log(removeFalsyValues([0, 5, false, 6, '', 7]));

-------------------------------------------------------------------------------------------------------
// Calculate the factorial of a number using recursion in JavaScript?

function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    
    return n* factorial(n-1)
}

console.log(factorial(4)); 

--------------------------------------------------------------------------------------------------------
//  Create an object and print the property?

let person = { name: "GFG", age: 25 };
console.log(person.name);

--------------------------------------------------------------------------------------------------------
// Use the map function on an array in JavaScript?


let numbers = [5, 6, 7];
let res= numbers.map((item)=>item*2);

console.log(res)

-----------------------------------------------------------------------------------------------------------
let numbers = [5, 6, 7];
let ans = numbers.map(function (num) {
    return num * 2;
});
console.log(ans);

------------------------------------------------------------------------------------------------------------
// Write a Program to create a simple class in JavaScript?

class Demo{
    constructor(name){
        this.name=name;
    }
    speak(){
         console.log(`${this.name} makes a noise`);
    }
}

let obj=new Demo("Nikita");

obj.speak()

-----------------------------------------------------------------------------------------------------------

// Use JSON to parse and stringify data in JavaScript?

let data='{"name":"Nikita"}'

console.log(JSON.parse(data))

let res=JSON.parse(data);
console.log(res.name);
----------------------------------------------------------------------------------------------------------
// Convert a string to an array of words in JavaScript?

let sentence = "Geeks For Geeks";
let res=sentence.split(' ');

console.log(res)

---------------------------------------------------------------------------------------------------------
// Write a switch statement code in JavaScript?

let course="javascript";

switch(course){
    case "java":
        console.log("java");
        break;
    case "javascript":
         console.log("javascript");
         break;
    default:
        console.log("None");
}

-----------------------------------------------------------------------------------------------------------
//Check if Two Strings are Anagrams or not in JavaScript?

function areAnagrams(arr1,arr2){
    let str1=arr1.split('');
    let str2=arr2.split('');
    
    let count=0;
    for(let i=0;i<str1.length;i++){
         for(let j=0;j<str2.length;j++){
            if(str1[i]==str2[j]){
                count++;
            }
        }
    }

    console.log(arr1.length)
    if(arr1.length==count){
        return "Its anagram"
    }else{
        return "Its not anagram"
    }
}


console.log(areAnagrams("listen", "silent")); 

-----------------------------------------------------------------------------------------------------------------
// Remove Duplicates from an Array in JavaScript?

function removeDuplicates(arr){
    return [...new Set(arr)]
}

console.log(removeDuplicates([5, 2, 5, 6, 6, 7])); 

-----------------------------------------------------------------------------------------------------------------
// Remove Duplicates from an Array in JavaScript?

function removeDuplicates(arr){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(removeDuplicates([5, 2, 5, 6, 6, 7])); 

----------------------------------------------------------------------------------------------------------------
//  Count Vowels in a String in JavaScript?

function countVowels(str) {
  const vowels = 'aeiouAEIOU'; 
  let count=0;
  for(let i=0;i<str.length;i++){
      if(vowels.includes(str[i])){
          count++;
      }
  }
  return count;
}

console.log(countVowels("hello geek")); 

--------------------------------------------------------------------------------------------------------------------
//  Get Unique Characters from a String in JavaScript?

function countVowels(str) {
  let count=[];
  for(let i=0;i<str.length;i++){
      if(!count.includes(str[i])){
          count.push(str[i])
      }
  }
  return count.join('');
}

console.log(countVowels("hello geek")); 

---------------------------------------------------------------------------------------------------------------------
