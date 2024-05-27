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
