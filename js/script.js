
const fullNumbers = document.getElementById("numbers");
let boxNumber= document.getElementById("box-small");
let content =document.getElementById("content");

let singleNumber= "";


for(let i = 1;i<=100;i++){
     singleNumber += ` ${i}`;
     console.log(singleNumber);
    if(100 % singleNumber == 3){
        let singleNumber = "fizz";
        console.log(singleNumber)
    }
    else if(100 % singleNumber == 5){
        let singleNumber = "buzz";
        console.log(singleNumber);
    }
    fullNumbers.innerHTML = singleNumber;
}