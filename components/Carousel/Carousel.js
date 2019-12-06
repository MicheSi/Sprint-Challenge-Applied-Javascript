/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel() {
// create elements
  const carousel = document.createElement('div'),
    leftBtn = document.createElement('div'),
    image1 = document.createElement('img'),
    image2 = document.createElement('img'),
    image3 = document.createElement('img'),
    image4 = document.createElement('img'),
    rightBtn = document.createElement('div');


// assign classes
  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

// text content & img sources
  leftBtn.textContent = '\u00AB';
  rightBtn.textContent = '\u00BB';
  image1.src = './assets/carousel/mountains.jpeg';
  image2.src = './assets/carousel/computer.jpeg';
  image3.src = './assets/carousel/trees.jpeg';
  image4.src = './assets/carousel/turntable.jpeg';

// append
  carousel.appendChild(leftBtn);
  carousel.appendChild(image1);
  carousel.appendChild(image2);
  carousel.appendChild(image3);
  carousel.appendChild(image4);
  carousel.appendChild(rightBtn);

  // event listeners
  leftBtn.addEventListener('click', event => {

  })
  rightBtn.addEventListener('click', event => {

  })

return carousel;
}

const addCarousel = document.querySelector('.carousel-container');
addCarousel.appendChild(createCarousel());