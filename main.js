



/* var
    myName = "mina magdy mouris ",
    myAge = "31";


document.getElementById("test").innerHTML =
    "<span class='two'>my Name is: </span>" + "<span style='color:green'>" + myName + "</span>" + "<br>" +
    "my age is: " + myAge;

document.getElementById("test").innerHTML =
    "<span class='two'>my Name is</span>: <span style='color:blue'>" + myName + "</span>" + "<br>" +
    "my age is: " + myAge;
    

document.getElementById("test").innerHTML =
    "<span class='two'>my Name is</span>: <span style='color:blue'>" + myName + "</span><br>" +
    "my age is: " + myAge;


/*var myticket = 1500;

if (myticket !== 1500) {
    
    alert("good");
} else {
    
    alert("bad");
    
}*/



/* function sayHi() {
    
    "use strict";
    
    var myName = "Mina";
    
    if (myName === "Mina") {
   
        alert("say hello " + myName + " from javaScript");
    
    } else {
        
        alert("say hello " + myName + " out javaScript");
    }

    
} */
 
// var myfunction = sayHi();


function calccurrency() {

    "use strict";

    var amount = document.getElementById("Dollars").value,
        result = amount * 5;
        document.getElementById("message").innerHTML = amount + " Dollar is worth " + result + " ryal";
        

if (result == 5) {
    document.getElementById("message").innerHTML = amount + " Dollar is worth " + result + " ryal";

} else {
    document.getElementById("message").innerHTML = amount + " Dollar is worth " + result + " ryals";
}


}












