// hero carousel
const sliderOne = document.querySelector('.glide');
if (sliderOne){
    new Glide('.glide',{
        // type: carousel,
        startAt: 0,
        autoplay: 3000,
        gap: 0,
        hoverpause:true,
        perView: 1,
        animationDuration: 800,
        AnimationTimingfunc:  "linear",
    }).mount()
}
// new Glide('.glide',{
    
//     startAt: 0,
//     autoplay: 3000,
//     gap: 0,
//     hoverpause:true,
//     perView: 1,
//     animationDuration: 800,
//     AnimationTimingfunc:  "linear",
// }).mount()