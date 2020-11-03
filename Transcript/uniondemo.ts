var printVal=(val:string|number)=>{
    if(typeof(val)=='string'){
        console.log('welcome '+val);
    }
    if(typeof(val)=='number'){
        console.log('your score is '+val);
    }
    
}
printVal('Kumaran');
printVal(10);
let printValue=(val:string[]|number|object)=>{
    if(Array.isArray(val)){
        console.log('print array '+val);
        console.log(val);
        console.log(...val);

    }else
    if(typeof(val)=='object'){
        console.log(val);
    }
}
printValue(['Raj','Ram']);
printValue({name:'kumu'});