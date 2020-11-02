var printVal = function (val) {
    if (typeof (val) == 'string') {
        console.log('welcome ' + val);
    }
    if (typeof (val) == 'number') {
        console.log('your score is ' + val);
    }
};
printVal('Kumaran');
printVal(10);
var printValue = function (val) {
    if (Array.isArray(val)) {
        console.log('print array ' + val);
        console.log(val);
        console.log.apply(console, val);
    }
    else if (typeof (val) == 'object') {
        console.log(val);
    }
};
printValue(['Raj', 'Ram']);
printValue({ name: 'kumu' });
