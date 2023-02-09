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
        }, 1000);
    })
}
// cart section 
const heartBtn = document.querySelector("#likebtn");

function likeBtn(){
     var spanLike = document.querySelector('#heart-like').innerHTML;
     spanLike++;
     document.querySelector('#heart-like').innerHTML = spanLike;


}