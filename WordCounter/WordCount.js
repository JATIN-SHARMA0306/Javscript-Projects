function countWords(){
let nextLine=0;
let input=document.getElementById("WordsInput").value;
let output=document.getElementById("output");
let result=input.split(" ").length;
try{
nextLine=input.split(" ").join("").match(/\n/g).length;
}
catch(err){
nextLine=0;    
console.log(nextLine);
}
console.log(nextLine);
output.innerHTML=`Total words :- ${result+nextLine}`;
console.log(result);
console.log(input.split(" "));
}
