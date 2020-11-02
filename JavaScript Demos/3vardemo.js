// function fun(){
//     var fun1=function(){
//         console.log("Inside function");
//     }
// };
// fun();
// var calcAvg=(num1,num2,num3)=>{
//     return(function(){
//         return ((num1+num2+num3)*(.75));
//     });
// }
// var persent=calcAvg(3,5,7);
// console.log(persent());
var fun=(a,b=10)=>console.log(a+b);
fun();
fun(400);
fun(23,45);