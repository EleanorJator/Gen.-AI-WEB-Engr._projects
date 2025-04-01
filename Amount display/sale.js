let products = new Map()

products.set(
    1, 
    {
        name: "Original blend 200g 500yen",
        price: 500
    }
)

products.set(
    2, {
        name:"Original blend 500g 900yen",
        price: 900
    }
)

products.set(
    3, {
        name: "Special Blend 200g 700yen", 
        price: 700
    }
)
products.set(
    4, {
        name: "Special Blend 500g 1200yen",
        price: 1200
    }
)

let cart = new Map()

function add (){
    let productId = parseInt(document.getElementById("product").value)
    let quantity = parseInt(document.getElementById("quantity").value)

    let product = products.get(productId)
    let amount= quantity * product.price 
    cart.set(
        product.name,{price:product.price, quantity:quantity,amount:amount

        }
    )

    alert(`Product: ${product.name} \n\r Price: ¥${product.price} \n\rquantity ${quantity}\n\ramount:¥${amount}`) 
}


let calc = ()=>{
    let output = "";
    let subtotal = 0;
    cart.keys().forEach(key => {
        let info = cart.get(key)
        output += `${key} \t\t ${info.quantity} \t\t ¥${info.price} \t\t ¥${info.amount} \n\r`
        subtotal+= info.amount
    });

    let shippinCost;

    if(subtotal < 2000){
        shippinCost = 500
    }else if (subtotal > 3000){
        shippinCost = 0
    }else{
        shippinCost = 250
    }
    output += `Shipping Cost: ¥${shippinCost}\n\r`
    let totalAmount = subtotal + shippinCost

     output += `Total: ¥${totalAmount}`

    alert(output)
}