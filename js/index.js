// window.onload = () => {

//   let canvas = document.querySelector('canvas')
//   let ctx = canvas.getContext('2d');

//   let img = new Image();
//   img.src = 'images/road.png';

//   img.onload = () => {
//     ctx.drawImage(img, 0, 0, 500, 700);
//   }

//   let car = {
//     posX: 230,
//     posY: 400,
//     image: 'images/car.png'
//   }
//   let carimage = new Image();
//   carimage.src = car.image;

//   carimage.onload = () => {
//     ctx.drawImage(carimage, car.posX, car.posY, 50, 100);
//   }


//   document.getElementById('start-button').onclick = () => {

//     startGame();
//   };

//   function startGame() {
//     console.log("hello")
//     document.addEventListener('keydown', e => {
//       console.log(e.keyCode)
//       if (e.keyCode === 37) {
//         ctx.clearRect(0, 0, 500, 700)
//         console.log("car", car)
//         ctx.drawImage(img, 0, 0, 500, 700);
//         ctx.drawImage(carimage, car.posX -= 10, car.posY, 50, 100);


//       } else if (e.keyCode === 39) {
//         ctx.clearRect(0, 0, 500, 700)
//         ctx.drawImage(img, 0, 0, 500, 700);
//         ctx.drawImage(carimage, car.posX += 10, car.posY, 50, 100);


//       }
//     })


//   }
// };



window.onload = () => {
  let background = new Image();
  background.src = "images/road.png";
  let car = new Image();
  car.src = "images/car.png";
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
    let speedX = 225
    let rectPosY = 0
    let canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")

    let draw = () => {

      rectPosY += 1

      ctx.clearRect(0, 0, 500, 700)
      ctx.drawImage(background, 0, 0, 500, 700)
      ctx.drawImage(car, speedX, 500, 50, 100)

      ctx.fillRect(0, rectPosY, 200, 50)

    }

    setInterval(draw, 1000 / 60)
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 39:
          speedX += 10;
          break;
        case 37: // left arrow
          speedX -= 10;
          break;
      }

    })


  }
}