document.addEventListener("DOMContentLoaded", function () {
  // menu width-1024px

  let category = document.querySelector(".header__category");
  const categoryItems = document.querySelectorAll(".header__category-item");
  const toggleBtn = document.getElementById("toggleList");

  toggleBtn.addEventListener("click", () => {
    for (let i = 1; i < categoryItems.length; i++) {
      categoryItems[i].classList.toggle("hidden");
    }

    if (category.style.display === "none") {
      category.classList.remove("active-list");
    } else {
      category.classList.toggle("active-list");
    }
  });

  // burger-menu width-768px

  let menuOpen = false;

  const menuBtn = document.querySelector(".menu-btn");
  const burgerPopup = document.getElementById("popup");

  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuOpen = true;
      category.classList.toggle("active");
      menuBtn.classList.toggle("active");
      burgerPopup.classList.toggle("active");
    } else {
      menuOpen = false;
      category.classList.remove("active");
      menuBtn.classList.remove("active");
      burgerPopup.classList.remove("active");
    }
  });

  // swiper
  let promotionSwiper = new Swiper(".promotion-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let coursesSwiper = new Swiper(".courses__swiper-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
