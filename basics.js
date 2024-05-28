//create a javascript code that defines an object named car with properties like color ,model and make .Assign values to these properties and then access them using dot notation
let car = {
    colour:"colour",
    model:"model",
    make:"make"
};
//*assigning values to the properties
car.colour = "blue"
car.model ="audi"
car.make = "audi a3"

//accessing the properties
console.log("He drives a  "+car.colour + "  "+ car.model +" "+"which is from the"+ " "+ car.make +" "+ "family");
//write a program that calculates the cost of shipping based on the weight of the package .If the weight is less than or equal to 2kg , the cost of is 5$.If the weight is
// greater than two kg but less than or equal to 5kg , the cost is 10$ .For  weights above 5kg , the cost is $15



function shippingCost(weight){
    if(weight<=2){
        return 5
    }
    else if(weight > 2 && weight < 5){
        return 10
    }
    else{
        return 15
    }

}

console.log(shippingCost(40))
//create a javascript  program that takes a base as an exponent as inputs and calculate the exponential values


function calculateExponent(base, exponent){
    return Math.pow(base, exponent)

}
console.log(calculateExponent(6, 2))
//create a program that determines if a student  has passed an exam based on their score .The passisng score is 60
function studentGrade(marks){
    if(marks > 60){
        return "pass"
    }
    else{
        return "fail"
    }
}
console.log(studentGrade(50))
//You are given an array of objects representing books, with each object containing  properties for title , author and pages .Write a javascript function called findshortbook that takes the array of books objects as input and returns the title of the shortest  book
const books = [
    {tittle:"Book A", author:"author A", pages:800},
    {tittle:"BookB", author:"born a crime", pages:400},
    {tittle:"bookc", author:"jamesnor", pages:500}
]
function findshortbook(books){
    let shortestBook = books[0];
    for(let i = 1; i<books.length; i++){
        if(books[i].pages<shortestBook.pages){
            shortestBook = books[i]
        }
    }
    return shortestBook.tittle

}
console.log(findshortbook(books))
//Create a javascript program that takes in a string as input and count the number of vowels in it

function countVowels(str){
    countVowels = 'aeiouAEIOU'
    let count = 0;
    for(let char of str){
        if(countVowels.includes(char)){
            count ++;
        }
    }
    return count;
}
console.log(countVowels("maurennnajgo"))


//Create a javascript program that takes in two sorted lists as inputs and merges them into a single sorted array


function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}
//Write  a javascript program that takes a sentense as input and reverses the order 
// function sentenceReverse(sentence){
//     let b = sentence.split('').reverse().join()
// }

// console.log(sentenceReverse("My name is morin"))


function reverseSentence(sentence) {

    let words = sentence.split(" ");
    

    let reversedWords = words.reverse();
    
    // Join the reversed words back into a sentence
    let reversedSentence = reversedWords.join(" ");
    
    return reversedSentence;
}
console.log(reverseSentence('my name is morin'))


// Create a javascript program that if te user is 18 or older gives feadback that the stating to wait for the number of years to start dating.
function serveDrink(age){
    let limit = 18
    let newAge = limit - age
    if(age >=limit){
        console.log(`your of the right age`)

    }
    else{
        console.log(`wait for  ${newAge} years` )
    }
}
serveDrink(12)