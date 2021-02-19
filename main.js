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

var num = 0;
function moveCar() {
  num += 5;
  $car.style.left = num + 'px';
}

function ignite(event) {
  if (!carIsOn && event.key === ' ') {
    intervalID = setInterval(moveCar, 16);
    carIsOn = true;
  } else {
    clearInterval(intervalID);
    carIsOn = false;
  }
}

addEventListener('keydown', changeDirection);
addEventListener('keydown', ignite);
