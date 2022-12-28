let A= 13;
let B = 27;
if(A>=12 && B<=27)
console.log("A + B =",A+B);

let a = 15, b=30;
if(a>20 || b <=40)
console.log("a + b = ",a+b);

var result = !(a==b)
console.log("result !(a==b) ",result);

let condition;
console.log("condition = ", condition = (100>10)?true:false);
console.log("condition = ", condition = (100<10)?true:false); 

/---------type Casting----------/

let num=24;
let str = "678";
let boolean= true;
let date = new Date('26-09-2022');
console.log("Type of num : ", typeof(num));
console.log("Type of str : ", typeof(str));
console.log("Type of boolean : ",typeof(boolean));
console.log("Type of Date : ",typeof(date));
console.log("Print the the value of str:",str);
let num_str = String(num);
console.log("Type of num cast to string : ",typeof(num_str));
console.log("Value of num cste to string : ",num_str);