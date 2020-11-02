class Vehicle{
    constructor(brand,price){
        this.brand=brand;
        this.price=price;
    }
    set details(Discount){
        this.price=this.price-Discount;
        this.price=(this.price+" Discount is "+Discount);
        this.brand.toUpperCase();
    }
    get details(){
        return this.brand+" "+this.price;
    }
}
veh = new Vehicle('Honda','34000');
console.log(veh);
veh.details="3000";
console.log(veh.details);