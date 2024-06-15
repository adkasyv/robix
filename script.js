  document.addEventListener("DOMContentLoaded", function () {
    let category = document.querySelector(".header__category");
    let menuOpen = false;

    const categoryItemByID = document.getElementById("category-item");
    const categoryItems = document.querySelectorAll(".header__category-item");
    const toggleBtn = document.getElementById("toggleBtn");
    const menuBtn = document.querySelector(".menu-btn");
    const burgerPopup = document.getElementById("popup");

    toggleBtn.addEventListener("click", () => {
      for (let i = 1; i < categoryItems.length; i++) {
        categoryItems[i].classList.toggle("hidden");
      }

      if (category.style.display === "none") {
        category.classList.remove("active");
      } else {
        category.classList.toggle("active");
      }
    });

    menuBtn.addEventListener("click", () => {
      if (!menuOpen) {
        menuOpen = true;
        category.style.display = "block";
        category.classList.toggle("active-burger");
        menuBtn.classList.toggle("active");
        burgerPopup.classList.toggle("active");
        categoryItemByID.classList.toggle("active");
        categoryItemByID.classList.remove("hidden");
      } else {
        menuOpen = false;
        category.style.display = "none";
        category.classList.remove("active-burger");
        menuBtn.classList.remove("active");
        burgerPopup.classList.remove("active");
        categoryItemByID.classList.remove("active");
      }
    });

    function checkWindowSizeForBurgerBtn() {
      if (window.innerWidth > 968) {
        category.classList.remove("active-burger");
        menuBtn.classList.remove("active");
        burgerPopup.classList.remove("active");
        categoryItemByID.classList.remove("active");
      }
    }
    window.addEventListener("resize", checkWindowSizeForBurgerBtn);
    checkWindowSizeForBurgerBtn();

    let promotionSwiper = new Swiper(".promotion__swiper", {
      slidesPerView: 1,
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    let coursesSwiper = new Swiper(".courses__swiper-container", {
      slidesPerView: 1,
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
  });



const swiperEl = document.querySelector('swiper-container')
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        868:{
          slidesPerView: 2,
          spaceBetween: 45,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });
    swiperEl.initialize();