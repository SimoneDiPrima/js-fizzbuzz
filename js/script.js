
const fullNumbers = document.getElementById("numbers");


let boxNumber= document.getElementById("box-small");
let content =document.getElementById("content");

let singleNumber= "";



for(let i = 1;i<=100;i++){
    if (i % 5 === 0 && i % 3 === 0){
        singleNumber += ` buzzfizz `;
    }
    else if(i % 3 === 0){
        singleNumber += ` fizz `; 
    }
    else if (i % 5 === 0){
        singleNumber += ` buzz `;
    }
    else{
        singleNumber +=  `  ${i}`;
        console.log(singleNumber);
    }
}
fullNumbers.innerText = singleNumber;