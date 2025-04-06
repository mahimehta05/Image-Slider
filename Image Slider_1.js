const images = [
    {
      url: "01.jpg",
      bgColor: "#FF6F61"
    },
    {
      url: "02.jpg",
      bgColor: "#6B5B95"
    },
    {
      url: "03.jpg",
      bgColor: "#88B04B"
    },
    {
      url: "04.jpg",
      bgColor: "#009B77"
    },
    {
      url: "05.jpg",
      bgColor: "#009B75"
    }
  ];
  
  let currentIndex = 0;
  
  const imageElement = document.getElementById("slider-image");
  const sliderContainer = document.getElementById("slider");
  
  function updateSlider() {
    imageElement.src = images[currentIndex].url;
    document.body.style.backgroundColor = images[currentIndex].bgColor;
  }
  
  document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  });
  
  document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
  });
  
  // Initial load
  updateSlider();
  