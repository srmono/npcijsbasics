let product = {
    brand: "MI",
    cat: "electronics",
    price: 47778,
    color: "Black",
    addr: {
        city: "bangalore",
        getCity: function(){
            console.log(this.addr.city);
        }
    },
    getBrand: function(){
        console.log("Brand is : ",this.brand)
    }
}
product.brand = "Samsung"
product.ram = "16GB"
product.getBrand()
