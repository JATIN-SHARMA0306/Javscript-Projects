function countWords(){
let nextLine=0;//value initialisation 
let input=document.getElementById("WordsInput").value;
let output=document.getElementById("output");
let result=input.split(" ").length;// tracking spaces
try{
nextLine=input.split(" ").join("").match(/\n/g).length;//tracking nextline
}
catch(err){
nextLine=0;    
}
output.innerHTML=`Total words :- ${result+nextLine}`;
console.log(result);
console.log(input.split(" "));
}
