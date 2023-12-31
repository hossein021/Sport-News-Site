// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});


const slider = document.getElementById('slider');
  const slides = document.querySelector('.slides');
  const slideWidth = document.querySelector('.slide').offsetWidth;
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.children.length;
    slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

    // Reset to the first slide after reaching the duplicate of the first slide
    if (currentIndex === slides.children.length - 1) {
      setTimeout(() => {
        currentIndex = 0;
        slides.style.transition = 'none';
        slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
        setTimeout(() => {
          slides.style.transition = 'transform 0.5s ease-in-out';
        });
      }, 500);
    }
  }

  setInterval(nextSlide, 2000);