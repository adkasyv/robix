let svg = (document.createElementNS = "");

document.getElementById("toggleList").addEventListener("click", function () {
  let category = document.getElementById("category");
  let categoryItem = document.getElementById("categoryItems");

  if (category.style.display === "none") {
    category.classList.remove("active-list");
  } else {
    category.classList.toggle("active-list");
  }
});

let promotionSwiper = new Swiper(".promotion-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  //   rewind: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let swiper = new Swiper(".mySwiper", {
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
