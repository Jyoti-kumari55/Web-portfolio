try{
   // document.write("Welcome JYOTI !!");
    document.write(Null);
    console.log("No Error");
}
catch(err){
    console.log(err.message);
}

function isEven(){
    var a;
    a = document.getElementById("num").value;
    try {
        if((a%2)==0){
            console.log("The entered number is even.");
        }
        else{
            throw "Not an even number.";
        }
    } catch (error) {
        console.log("The enetered value is " + error);
        
    }
    finally{
        console.log("I get executed regardless of the try/catch block result");
    }
}