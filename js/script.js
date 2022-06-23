
const fullNumbers = document.getElementById("numbers");
let boxNumber= document.getElementById("box-small");
let content =document.getElementById("content");

let singleNumber= "";
let fizzWord = "FIZZ" ;
let buzzWord = "BUZZ";

for(let i = 1;i<=100;i++){
     singleNumber += ` ${i}`;
     console.log(singleNumber);
    if(100 % singleNumber == 3){
        console.log(fizzWord);
    }
    else if(100 % singleNumber == 5){
        console.log(buzzWord);
    }
}
fullNumbers.innerHTML = singleNumber;