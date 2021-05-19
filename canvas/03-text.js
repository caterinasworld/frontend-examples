let canvas = document.getElementById('chart');
let ctx = canvas.getContext('2d');

ctx.font = '36px sans-serif';
ctx.fillText('Canvas Text', 10, 100);
ctx.font = 'italic 36px serif';
ctx.textBaseline = 'top';
ctx.fillText('Canvas Text', 200, 120);
ctx.font = 'bold 36px serif';
ctx.textBaseline = 'middle';
ctx.strokeText('Canvas Text', 400, 120);
ctx.font = 'small-caps 36px serif';
ctx.textBaseline = 'bottom';
ctx.fillText('Canvas Text', 604, 120);
