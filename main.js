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

// function Car() {
//   this.carIsOn = false;
//   this.xAxis = 0;
//   this.intervalID = null;
// }

// var fiesta = new Car();

// Car.prototype.changeDirection = function(event) {
//   switch (event.key) {
//     case 'ArrowUp':
//       $car.className = 'car up';
//       break;
//     case 'ArrowLeft':
//       $car.className = 'car left';
//       break;
//     case 'ArrowDown':
//       $car.className = 'car down';
//       break;
//     case 'ArrowRight':
//       $car.className = 'car right';
//       break;
//   }
// }

// Car.prototype.moveCar = function() {
//   console.log('yo xan')
//   this.xAxis += 5;
//   $car.style.left = this.xAxis + 'px';
// }

// console.log(fiesta.moveCar)

// Car.prototype.ignitionOn = function(event) {
//   if (!this.carIsOn && event.key === ' ') {
//     console.log(this.carIsOn);
//     this.intervalID = setInterval(this.moveCar, 16);
//     this.carIsOn = true;
//   }
// }
