const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'lightblue';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const data = [
  400, 370, 410, 300, 300, 200, 400, 480, 320, 200, 150, 140, 400, 320, 360,
];

const padding = 8;

data.forEach((item, index) => {
  console.log(index, item);

  ctx.fillStyle = 'teal';
  // void ctx.fillRect(x, y, width, height);
  ctx.fillRect(padding + index * 80, canvas.height - padding - item, 72, item);
});
