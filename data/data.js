 const cartAdd = document.querySelectorAll('.cartaddbtn');
//  console.log(cartAdd);
//  const cartRemove = document.getElementsByClassName('remove-btn');
//   console.log(cartRemove);
 
 const products = [
    {
        images:"images/images (1).jpg" ,
        name:'MEN`S clothes',
        price:17000,
        tag:'MEN`S clothes',
        incart:0

    },
    {
        images:"images/images (3).jpg" ,
        name:'womens jackect',
        price:17000,
        tag:'womens jackect',
        incart:0

    },
    {
        images:"images/images (4).jpg" ,
        name:'black jacket',
        price:17000,
        tag:'black jacket',
        incart:0

    },
    {
        images:"images/images (6).jpg" ,
        name:'orange shoes',
        price:17000,
        tag:'orange shoes',
        incart:0

    },
    {
        images:"images/images (7).jpg" ,
        name:'black boots',
        price:17000,
        tag:'black boots',
        incart:0

    },
    {
        images:"images/images (2).jpg" ,
        name:'men jackets',
        price:17000,
        tag:'men jackets',
        incart:0

    },
    {
        images:"images/download (2).jpg" ,
        name:'black men`s jacket',
        price:17000,
        tag:'black men`s jacket',
        incart:0

    },
    {
        images:"images/download (5).jpg" ,
        name:'branded shoe',
        price:17000,
        tag:'branded shoe',
        incart:0

    }
];
for(let i = 0; i < cartAdd.length; i++){
    cartAdd[i].addEventListener('click',(e)=>{
        e.preventDefault();
        cartNumber(products[i]);
        totalCost(products[i]);
    })
    
}
// delete
const removeCartItem = document.getElementsByClassName('remove-btn');
console.log(removeCartItem);
 for (var i = 0; i < removeCartItem.length; i++){
    var button = removeCartItem[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        console.log(button)
        buttonClicked.parentElement.parentElement.remove()
        totalCost(products[i]);
        
    })
    console.log(buttonClicked)
 }
// mmmmmmmmmmmmmmmmmmmmm...............
const loadCartNumber=()=>{
    let productNumbers = localStorage.getItem('cartNumber');
    if(productNumbers){
        document.querySelector('#cart-value').innerHTML = productNumbers
    }
}
// adding products to cart using local storage
const cartNumber = (product)=>{
    let productNumbers = localStorage.getItem('cartNumber');
    productNumbers=parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumber',productNumbers +1);
        document.querySelector('#cart-value').innerHTML= productNumbers +1
    }
    else{
        localStorage.setItem('cartNumber', 1);
        document.querySelector('#cart-value').innerHTML = 1;
    }
    setItem(product)
}
let setItem =(product)=>{
    let cartItem = localStorage.getItem('productInCart');
    cartItem= JSON.parse(cartItem);
    if(cartItem!=null){
        if(cartItem[product.tag]==undefined){
            cartItem={
                ...cartItem,
                [product.tag]:product
            }
        }
        cartItem[product.tag].incart +=1;
    }else{
        product.incart=1;
        cartItem={
            [product.tag]:product
        }
    }
    localStorage.setItem('productInCart',JSON.stringify(cartItem))
}
 
 
 
// cart total cost
const totalCost=(productCost)=>{
    let cartCost = localStorage.getItem('totalCost');
    if(cartCost!= null){
        cartCost=parseInt(cartCost);
        localStorage.setItem('totalCost',cartCost + productCost.price)
    }
    else{
        localStorage.setItem('totalCost', productCost.price)
    }
}
// display product in the cart page
const displayCartItems = ()=>{
    let cartItem = localStorage.getItem('productInCart');

    cartItem = JSON.parse(cartItem);
    let productContainer = document.querySelector('.product-container');
    let cartCost = localStorage.getItem('totalCost');
    if(cartItem && productContainer){
        productContainer.innerHTML=`
    <div class="product-header">
        <h5 class="product-title">product</h5> 
        <h5 class="product-price">price</h5>
        <h5 class="quantity-number">quantity</h5>
        <h5 class="total">sub-total</h5>
        <h5 class="Delbtn">Delete item</h5>
    </div>`;
        Object.values(cartItem).map(item =>{
            productContainer.innerHTML+=`
    
            <div class="cart-product-item">
            <div class="cart-product">
                <p class="deletebtn" id="delete" >&times</p>
                <img src="./${item.images}" alt="">
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price}</div>
            <div class="quantity">
                <p>+</p>
                <span>${item.incart}</span>
                <p>-</p>
            </div>
            <div class="total">$ ${item.incart * item.price}./-</div>
            <div class="remove-btn" id="remove-btn-id">Remove</div>
        </div>
        `;
       
        })
        productContainer.innerHTML +=`
        <div class="basketTotalContainer">
            <h4 class="basket-total-title">Cart Total Price</h4>
            <h4 class="nasket-total">$ ${cartCost}.00/-</h4>
        </div>
     `
    }

}

// cartRemove.addEventListener('click', () =>{
//     // productContainer.innerHTML = '';
//     console.log(productContainer.innerHTML);
// })
loadCartNumber();
displayCartItems();
// cartRemovebtn();
 