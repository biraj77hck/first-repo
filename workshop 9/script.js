//console.log("Hello,I am learning javascript")
/*let a=6;
console.log(typeof(a));
let b=7;
let sum=a+b;
console.log(sum);*/

/*var a=5;
console.log(typeof(a));
var b=2;
console.log(typeof(b));
var multiplication=a*b;
console.log("The multiplication of two number is "+multiplication);*/

/*const PI=3.14;
let  radius=window.prompt("Enter radius of circle :");
let circumference=2*PI*radius
console.log("The circumference of circle is :"+circumference);*/

/*let age=window.prompt("Enter the age od dog: ")

function bark(){
    
    if(age>=10){
        console.log("The dog is very old")
    }else{
        console.log("The dog is still young");
    }
}
function sleep(){
    
    if(age>=10){
        console.log(age);
        console.log("The dog is very old")
    }else{
        console.log("The dog is still young");
    }
}


bark();
sleep(); */

/*if we put let age variable inside a function it is local variable,
if we put let age variable on top then it is global variable*/

document.getElementById("myBtn").onclick=function(){
    let radius=document.getElementById("myNumber").value;
    console.log(radius);
    const PI=3.14;
    let circumference=2*PI*radius;
   //document.getElementById("circumference").innerHTML=circumference;//
   document.getElementById("circumference").append(circumference);
}

//make a form of username (hello,username)//
  



