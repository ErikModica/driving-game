var $car = document.querySelector('.car');
var intervalID = null;
var carIsOn = false;

function changeDirection(event) {
  switch (event.key) {
    case 'ArrowUp':
      $car.className = 'car up';
      break;
    case 'ArrowLeft':
      $car.className = 'car left';
      break;
    case 'ArrowDown':
      $car.className = 'car down';
      break;
    case 'ArrowRight':
      $car.className = 'car right';
      break;
  }
}

var x = 0;
var y = 0;
function moveCar() {
  switch ($car.className) {
    case 'car right':
      x += 5;
      $car.style.left = x + 'px';
      break;
    case 'car down':
      y += 5;
      $car.style.top = y + 'px';
      break;
    case 'car left':
      x -= 5;
      $car.style.left = x + 'px';
      break;
    case 'car up':
      y -= 5;
      $car.style.top = y + 'px';
      break;
  }
}

function ignite(event) {
  if (!carIsOn && event.key === ' ') {
    intervalID = setInterval(moveCar, 16);
    carIsOn = true;
  } else if (carIsOn && event.key === ' ') {
    clearInterval(intervalID);
    carIsOn = false;
  }
}

addEventListener('keydown', changeDirection);
addEventListener('keydown', ignite);
