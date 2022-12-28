var myArray = []
for(var i = 0;i<=4;i+=1){
    var y = i
    myArray.push(function(){
        console.log(y)
    }
    )
}
myArray.forEach(function(func){
    func()
});