let canvas = document.getElementById('chart');
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'lightblue';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let data = [200, 370, 410, 300, 300, 200, 400, 480, 320, 200];
ctx.fillStyle = 'teal';

data.forEach((item, index) => {
  ctx.beginPath();
  ctx.moveTo(4 + index * 80, 500);
  ctx.lineTo(42 + index * 80, 500 - item);
  ctx.lineTo(80 + index * 80, 500);
  ctx.fill();
  // ctx.stroke();
});
