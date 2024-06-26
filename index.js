// init Swiper:
const swiper = new Swiper("#swiper", {
   spaceBetween: 20,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

const swiperBlock = document.querySelector("#swiper");
const greetBlock = document.querySelector("#greeting");
const greetBtn = document.querySelector("#greeting button");

greetBtn.addEventListener("click", () => {
   greetBlock.classList.add("_hidden");
   swiperBlock.classList.add("_active");
});
