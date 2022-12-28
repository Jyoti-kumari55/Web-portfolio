
    function mphTokmph(mph){
        console.log("MPH value entered :",mph);
        return 1.61*mph;
    }
    let speedLimit = mphTokmph(65);
    console.log("Speed limit in mph :",speedLimit);

    let mphTokmphArrow = mph => {
        console.log("MPH value entered :",mph);
        return 1.61*mph;
    }
     speedLimit = mphTokmph(65);
     console.log("Speed limit in mph :",speedLimit);

    let mphTokmphArrowImplicit = mph => 1.61 * mph;
        speedLimit = mphTokmph(65);
     console.log("Speed limit in km/h (implicit return) :",speedLimit);

    let triangleArea = (base,height) => 0.5 * base * height;
    console.log("Area of triangle with base of 5 and height of 4 :",triangleArea(4,5));

    let functionCopy = triangleArea;
    console.log("Area of triangle with base 8 and height of 14 :",functionCopy(8,14));

    var x = function(f){
        return 5 * (f-32)/9};
        console.log("50f in celsius is:",x(50));
    