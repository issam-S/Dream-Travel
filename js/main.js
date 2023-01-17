// Animations initialization
new WOW().init();

//   carsoul In Site

if (window.matchMedia("(max-width: 768px)").matches) {
  var swiper = new Swiper(".swiperatneen", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    // loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
} else if (window.matchMedia("(max-width: 1000px)").matches) {
  var swiper = new Swiper(".swiperatneen", {
    slidesPerView: 2,
    spaceBetween: 0,
    freeMode: true,
    // loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
} else {
  var swiper = new Swiper(".swiperatneen", {
    slidesPerView: 4,
    spaceBetween: 0,
    freeMode: true,
    // loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}

var swiper = new Swiper(".packges .swiper-container", {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 30,
  // loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

var swiper = new Swiper(".packges2 .swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

// Scroll Up Button

let goUp = document.getElementById("goUp");
window.onscroll = () => {
  if (window.pageYOffset >= 1000) {
    goUp.style.display = "block";
  } else {
    goUp.style.display = "none";
  }
};

goUp.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Preloader

$(window).on("load", function() {
  $("body").css("overflow", "auto");
  $(".loader-page").fadeOut(1000);
});

window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});
