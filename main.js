import "./style.css";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  modules: [Navigation, Autoplay],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  loop: true,
});


const words = ["NFTS", "STABLECOINS", "GAMES", "DEXS"];
let index = 0;

function changeWord() {
  const wordElement = document.getElementById("word");
  wordElement.classList.remove("show", `${words[index - 1]}`)

  setTimeout(() => {
    wordElement.textContent = words[index];
    wordElement.classList.add("show"); // Добавляем класс для анимации
    index = (index + 1) % words.length; // Обновляем индекс
  }, 800);
}

setInterval(changeWord, 2500);

