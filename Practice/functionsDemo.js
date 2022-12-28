
window.onload = firstFunction;
function firstFunction(){
    var a = 10;
    console.log("firstFunction a = ", a ,":");
    secondFunction();
}

function secondFunction(){
    console.log("secondFunction(before declaration) ", a);
   
    var  a = 24;
    console.log("secondFunction(after declaration) ",a);
}
