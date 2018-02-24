function  calculateArea(radius){ //accepting parameter radius
    return 3.14*radius*radius; //returning the value
    }
    
    var radius = prompt("Enter radius");
    var area = calculateArea(radius); //calling the function and assigning return value to variable called area
    console.log("Area of the Cricle is: "+area);