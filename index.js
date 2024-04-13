// var curBox=document.getElementById("1");
// function scroll(){
//     curBox.style.transform.translateX(calc(-100% -36));
// }
// let swiperCards = new Swiper('.blog-section', {
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     }
//   });
function loaderAnimation() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
      loader.style.top = "-100%"
  }, 4200)
}
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
loaderAnimation()