
const fullNumbers = document.getElementById("numbers");

let boxNumber= document.getElementById("box-small");
let content =document.getElementById("content");
let singleNumber= "";

for(let i = 1;i<=100;i++){
    singleNumber +=  `  ${i}`;
    console.log(singleNumber);
    if (i % 5 === 0 && i % 3 === 0){
        singleNumber = singleNumber.replace(i , "BUZZFIZZ");
    }
    if(i % 3 === 0){
        singleNumber = singleNumber.replace(i , "FIZZ");  
    }
    else if (i % 5 === 0){
        singleNumber = singleNumber.replace(i , "BUZZ");
    }
    console.log(fullNumbers)
    fullNumbers.innerHTML = singleNumber;
}