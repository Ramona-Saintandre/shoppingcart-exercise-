const items =[
    {item:"milk",price:2.50,id:0},
    {item:"bread",price:1.50,id:0},
    {item:"eggs",price:1.99,id:0,},
    {item:"rice",price:4.50,id:0},
    {item:"beans",price:1.75,id:0},
    {item:"sugar",price:5.50,id:0},
];

items.forEach(function(ele){
    // console.log(ele);
    let div = document.createElement('div');
    div.innerHTML=`<h3>${ele.item}</h3>$${ele.price}`;
    div.style.border=
    document.body.appendChild(div);
})