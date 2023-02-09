// import ./data/data.js;

const humburger = document.querySelector('.humburger');
const navList = document.querySelector('.nav-list');

if (humburger){
    humburger.addEventListener('click',()=>{
        navList.classList.toggle('open');
    })
}

// popup section
const popup = document. querySelector('.popup');
const closePopup = document.querySelector('.popup-close')
if(popup){
    closePopup.addEventListener('click',()=>{
        popup.classList.add('hide-popup');
    });
    window.addEventListener('load',()=>{
        setTimeout(() => {
            popup.classList.remove('hide-popup');
        }, 10000);
    })
}
// // cart 
// const cart = document.querySelector('.cart')
// const cartAdd =document.querySelector('.bx bx-cart')

// cartAdd.addEventListener('click',()=>{
//     cart.classList.add('cart-active')
// });
// btnCart.addEventListener('click',()=>{
//     cart.classList.remove('cart-active')
// });

// const cartValue =document.getElementById('cart-value');
// const productId =document.getElementById('product-id');
//     productId.addEventListener('click', ()=>{
//     cartValue.textContent = parseInt(cartValue.textContent) + 1;
    
    

// })


//  removing from cart
// const removeProduct = document.querySelector('.removebtn');
// console.log(removeProduct);


// cart section 
const heartBtn = document.querySelector("#likebtn");

function likeBtn(){
     var spanLike = document.querySelector('#heart-like').innerHTML;
     spanLike++;
     document.querySelector('#heart-like').innerHTML = spanLike;


}