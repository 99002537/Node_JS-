// function addNumber(...nums:number[]){
//     var sum=0;
//     for(var i=0;i<nums.length;i++){
//         sum+=nums[i];
//     }
//     console.log(sum);
// }
// addNumber();
// addNumber(10,20,30);
// addNumber(10,20,30,40,50);

// function userDetails(name:string,city='Bangalore'){
//     console.log('name'+name);
//     console.log('city'+city);
// }
// userDetails('raju');
// userDetails('Raju','Ooty');
var greet=function(msg:string){
    return msg;
}
console.log(greet('Have a great day'));
greet=(msg:string)=>{
    return 'welcome'+msg;
}
console.log(greet('Hello'));
var show=()=>console.log('Hi');
show();
var checkType=(a,b)=>{
    console.log(a+b);
}
checkType(10,20);
checkType(10,'Ram');
checkType('Ram','Tom');