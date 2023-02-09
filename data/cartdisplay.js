const Products = [
    {
        id: 0,
        images:"images/images (1).jpg" ,
        name:'MEN`S clothes',
        price:17000,
        tag:'MEN`S clothes',
        instock:6

    },
    {
        id: 1,
        images:"images/images (3).jpg" ,
        name:'womens jackect',
        price:17000,
        tag:'womens jackect',
        instock:6

    },
    {
        id: 2,
        images:"images/images (4).jpg" ,
        name:'black jacket',
        price:17000,
        tag:'black jacket',
        instock:6

    },
    {
        id: 3,
        images:"images/images (6).jpg" ,
        name:'orange shoes',
        price:17000,
        tag:'orange shoes',
        instock:6

    },
    {
        id: 4,
        images:"images/images (7).jpg" ,
        name:'black boots',
        price:17000,
        tag:'black boots',
        instock:6

    },
    {
        id: 5,
        images:"images/images (2).jpg" ,
        name:'men jackets',
        price:17000,
        tag:'men jackets',
        instock:6

    },
    {
        id: 6,
        images:"images/download (2).jpg" ,
        name:'black men`s jacket',
        price:17000,
        tag:'black men`s jacket',
        instock:6

    },
    {
        id: 8,
        images:"images/download (5).jpg" ,
        name:'branded shoe',
        price:17000,
        tag:'branded shoe',
        instock:6

    }];

const productElement = document.querySelector('.product-center');

const cartElement = document.querySelector('.cart-products');
const cartNumber = document.querySelector('#cart-value');
const subTotalPrice = document.querySelector('.subtotalprice');
// checkout btn 
const checkOutBtn = document.querySelector('.checkoutbtn');
// console.log(cartNumber)

function renderItem(){
    Products.forEach((product)=>{
        productElement.innerHTML +=`
        <div class="product-item">
        <div class="overlay">
           <a href="productDetails.html" class="product-thumb">
            <img src="${product.images}" alt="">
           </a> 
        </div>
        <div class="product-info">
            <span>${product.name}</span>
            <a href="productDetails.html">
                ${product.tag}
            </a>
            <h4>17000</h4>
        </div>
        <ul class="icons">
            <li><i class="bx bx-heart" id="likebtn" onclick="likeBtn()"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart cartaddbtn" onclick="addToCart(${product.id})"></i></li>
         </ul>
    </div>
        `
        
    });
    
}
renderItem()
// cart array
let cart =JSON.parse(localStorage.getItem("CART"));
updateCart();
// add to cart
function addToCart(id){
    if (cart.some((item)=> item.id === id)){
         changeIncart("plus", id)
    }else{
        const item =  Products.find((product)=> product.id === id);
        cart.push({
            ...item,
            numberOfUnits: 1
        });
        console.log(cart);
    }
  
    updateCart();
}
// update cart
function updateCart(){
    renderCartItem();
    renderSubTotal();
    // save cart to local storage
    localStorage.setItem("CART", JSON.stringify(cart))

}
// render cart item
function renderCartItem(){
    cartElement.innerHTML='';
    cart.forEach((item)=>{
        cartElement.innerHTML +=`
        <div class="cart-product-item">
            <div class="cart-product">
            <p class="deletebtn" id="delete" >&times</p>
            <img src="${item.images}" alt="">
            <span>${item.name}</span>
            </div>
            <div class="price">${item.price}</div>
            <div class="quantity">
                <div class="btn minus" onclick="changeIncart('plus', ${item.id})">+</div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeIncart('minus', ${item.id})">-</div>
            </div>
             <div class="total">$ ${item.numberOfUnits * item.price}.</div>
            <div class="remove-btn" onclick="removeCartItem(${item.id})">Remove</div>
    </div>
        `
    });
}
// removing from cart
function removeCartItem(id){
    cart = cart.filter((item)=> item.id !==id);

    updateCart();
}
// calculate renderSubTotal
function renderSubTotal(){
    let totalPrice = 0, totalItem = 0;

    cart.forEach((item)=>{
        totalPrice +=item.price* item.numberOfUnits;
        totalItem+=item.numberOfUnits;
    });
    subTotalPrice.innerHTML =   `subtotal(${totalItem} items): $${totalPrice}`;
    cartNumber.innerHTML = totalItem;
    checkOutBtn.innerHTML=`<button class="checkbtn">CHECKOUT($${totalPrice})</button>`
}

 
// change incart
function changeIncart(action, id){
    cart = cart.map((item)=>{
        let numberOfUnits = item.numberOfUnits;
        if (item.id === id){
            if(action === "minus" && numberOfUnits > 1 ){
                numberOfUnits--;
            }else if(action === "plus" && numberOfUnits < item.instock){
                numberOfUnits++
            }
        }
        return {
            ...item,
            numberOfUnits,
        };
    });
    updateCart();
}
 
