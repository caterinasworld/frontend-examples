const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'lightblue';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const data = [
  400, 370, 410, 300, 300, 200, 400, 480, 320, 200, 150, 140, 400, 320, 360,
];

const padding = 8;
const y = canvas.height - padding;

ctx.fillStyle = 'teal';

data.forEach((item, index) => {
  ctx.beginPath();
  ctx.moveTo(4 + index * 80, y);
  ctx.lineTo(42 + index * 80, y - item);
  ctx.lineTo(80 + index * 80, y);
  ctx.fill();
  // ctx.stroke();
});
