var $car = document.querySelector('.car');

addEventListener('keydown', changeDirection);

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
