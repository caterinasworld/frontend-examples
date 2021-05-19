let canvas = document.getElementById('chart');
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'lightblue';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let data = [400, 370, 410, 300, 300, 200, 400, 480, 320, 200];

data.forEach((item, index) => {
  console.log(index, item);
  ctx.fillStyle = 'teal';
  // void ctx.fillRect(x, y, width, height);
  ctx.fillRect(9 + index * 80, canvas.height - 6 - item, 72, item);
});
