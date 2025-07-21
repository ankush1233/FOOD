document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".home", {
      slidesPerView: 1,
      spaceBetween: 1,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        520 : {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        50: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
      },
    });
  });
  let menu=document.querySelector('#menu-icon');
    let navbar=document.querySelector('.navbar');
    menu.onclick = ()=>
      {
        menu.classList.toggle('bx-x');
       navbar.classList.toggle('active');
      }
      window.onscroll =() =>
        {
          menu.classList.remove('bx-x');
          navbar.classList.remove('active');
        }