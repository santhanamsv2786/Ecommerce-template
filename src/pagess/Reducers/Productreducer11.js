const Products =[
    {
        id:1,
        image:"product/product1.png",
        category:"Accessories",
        name:"Quartz Belt Watch",
        price:150.00,
    },
    {
        id:2,
        image:"product/product2.png",
        category:"Beauty",
        name:"Women Facewash",
        price:150.00,
    },
    {
        id:3,
        image:"product/product3.png",
        category:"Decor",
        name:"Room Flash Light",
        price:150.00,
    },
    {
        id:4,
        image:"product/product4.png",
        category:"Decor",
        name:"Room Flash Light",
        price:150.00,
    },
    {
        id:5,
        image:"product/product5.png",
        category:"Accessories",
        name:"Man Office Bag",
        price:150.00,
    },
    {
        id:6,
        image:"product/product6.png",
        category:"Kids Toy",
        name:"Charging Car",
        price:150.00,
    },
    {
        id:7,
        image:"product/product7.png",
        category:"Accessories",
        name:"Bluetooth",
        price:150.000,
    },
    {
        id:8,
        image:"product/product8.png",
        category:"Accessories",
        name:"Magsafe Charger",
        price:150.00,
    },
    {
        id:9,
        image:"product/product1.png",
        category:"Accessories",
        name:"Quartz Belt Watch",
        price:150.00,
    },

]

const ProReducer11 = ( state=Products, action) =>{
    switch(action.type){
        case "PRODUCT_LIST":
            return state;
        default:
            return state;   
    }
}

export default ProReducer11;