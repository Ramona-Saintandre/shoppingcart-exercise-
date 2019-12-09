const items = [{
        item: "milk",
        price: 2.50,
        id: 0
    },
    {
        item: "bread",
        price: 1.50,
        id: 0
    },
    {
        item: "eggs",
        price: 1.99,
        id: 0,
    },
    {
        item: "rice",
        price: 4.50,
        id: 0
    },
    {
        item: "beans",
        price: 1.75,
        id: 0
    },
    {
        item: "sugar",
        price: 5.50,
        id: 0
    },
];

const cart = {};
const output =document.createElement('div');
document.body.appendChild(output);


items.forEach(function (ele) {
    // console.log(ele);
    let div = document.createElement('div');
    div.innerHTML = `<h3>${ele.item}</h3>$${ele.price}`;
    div.style.border = '1px solid #fff';
    div.style.display = 'inline-block';
    div.style.width = '100px';
    // creating a function inside of function
    div.addEventListener('click',function(){
let name = ele.item.toLocaleLowerCase();
console.log(name);
    // if/else statement to add qty 
    if(!cart[name]){
cart[name]={
    name:ele.item,
    price:ele.price,
    qty:1,
    subtotal:function(){
        return this.price * this.qty
    }
}}else{
    cart[name].qty;
}

relist();

    })

    function relist(){
output.innerHTML="";
console.log(cart);
let total = 0;
for(let prod in cart){
    console.log(cart[prod]);
    let subTotal = cart[prod].subtotal();
    output.innerHTML+=`${cart[prod].name}$${cart[prod].price} x `;
    output.innerHTML+=`${cart[prod].name}$${subTotal}<br>`;
}


    }
    document.body.appendChild(div);
})


// adding the event listner 


