document.addEventListener("DOMContentLoaded", function () {
  // menu width-1024px

  let category = document.querySelector(".header__category");
  const toggleBtn = document.getElementById("toggleList");

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

  // burger-menu width-768px

  let menuOpen = false;

  const menuBtn = document.querySelector(".menu-btn");
  const burgerPopup = document.getElementById("popup");
  const categoryItems = document.getElementById("category-item");

  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuOpen = true;
      category.classList.toggle("active-burger");
      menuBtn.classList.toggle("active");
      burgerPopup.classList.toggle("active");
      categoryItems.classList.toggle("active");
      categoryItems.classList.remove("hidden");
    } else {
      menuOpen = false;
      category.classList.remove("active-burger");
      menuBtn.classList.remove("active");
      burgerPopup.classList.remove("active");
      categoryItems.classList.remove("active");
    }
  });

  function checkWindowSizeForBurgerBtn() {
    if (window.innerWidth > 768) {
      category.classList.remove("active-burger");
      menuBtn.classList.remove("active");
      burgerPopup.classList.remove("active");
      categoryItems.classList.remove("active");
    } else {
    }
  }
  window.addEventListener("resize", checkWindowSizeForBurgerBtn);
  checkWindowSizeForBurgerBtn();

  // swiper
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
