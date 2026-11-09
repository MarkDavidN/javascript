const laptop=[{ brand: 'Dell', model: 'XPS 13', price: 999 },
              { brand: 'Apple', model: 'MacBook Pro', price: 1999 },
              { brand: 'HP', model: 'Spectre x360', price: 1299 }, 
              { brand: 'Lenovo', model: 'ThinkPad X1 Carbon', price: 1499 },
]
let discount=laptop.map((item)=>{
    item.price=item.price*0.9;
    return item;
})
console.log(discount);

let discounts=laptop.map((item)=>{
    
    return{
        ...item,
        price:item.price*0.9
    }
})
console.log(discount);