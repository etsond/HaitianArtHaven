
      let slideIndex = 0;
      showSlides();

      function plusSlides(n) {
        showSlides((slideIndex += n));
      }

      function showSlides() {
        let i;
        const slides = document.getElementsByClassName("carousel-slide");
        if (slideIndex >= slides.length) {
          slideIndex = 0;
        }
        if (slideIndex < 0) {
          slideIndex = slides.length - 1;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
        setTimeout(showSlides, 5000); // Change slide every 5 seconds
      }
  