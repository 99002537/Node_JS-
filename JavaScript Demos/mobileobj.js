var mobile=[{
    brand:'vivo',
    price:'20000',
    features:['4GB','64GB','20px'],
    number:1234
},
{
    brand:'vivo7',
    price:'25000',
    features:['4GB','64GB','20px'],
    number:1234
},
{
    brand:'vivo8',
    price:'10000',
    features:['4GB','64GB','20px'],
    number:1234
}]
mobile.forEach(m=>{
    for(const prop in m){
        var mob=m[prop];
        if(mob instanceof Array){
            for(const i in mob)
                console.log('feature:'+ mob[i]);
        }
        else
            console.log(mob);
        }
});
