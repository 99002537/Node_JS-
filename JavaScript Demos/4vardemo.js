// fun=function(a,b,...args){
//     console.log
// }
var sum=function(...args){
    var s=0;
    var len=args.length;
    // for (const i in args) {
    //     if (args.length() {
    //         const element = args;
            
    //     }
    // }
     for(var i=0;i<len;i++){
         s=s+args[i];
     }
     console.log("sum is",s);
}
sum(10,20);
sum(10,20,30);
sum(10,20,40);

fun=function(a,b,...args){
    console.log("a",a);
    console.log("b",b);
    console.log("args",args);

}
fun(1,2,"hello",900);
fun(1);
fun(1,2);