let studentGrades = ["A",45,78,"C","D",98];
console.log("Length of the Array :",studentGrades.length);
console.log("Element of the index 3 : ",studentGrades[3]);
console.log("Element at index -3:",studentGrades[-3]);

/* console.log("Iterating over elements with old syntax:");

for(i=0;i<studentGrades.length;i++){
    console.log(studentGrades[i]);
}
console.log("Iterating over elements with ES6 syntax:")
for(i of studentGrades){
    console.log(i)
}
*/
/* var i;
console.log("Elements in vowels : ");
let vowels = new Array("A","E","I","O","U");
for(i of vowels){
    console.log(i);
}
*/

/* let grades = [];
grades[0] = "A";
grades[1] = "B";
grades[2] = "C";
grades[3] = "D";
grades[4] = "E";
grades[7] = "H";

console.log("Length of the array :", grades.length);
console.log("Elements in the grades array:\n");
for(i of grades){
    console.log(i);
}
*/

let testScores = [43,56,78,98,85,58,99];
function flagGoodScore(score){
    if(score>70){
        console.log(`The score of ${score} is good!`);
    }
}
console.log("Iterating the test scores with for each loop:");
testScores.forEach(flagGoodScore);