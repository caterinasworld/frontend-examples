const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');

ctx.font = '36px sans-serif';
ctx.fillText('Text in Canvas 1', 10, 100);

ctx.font = 'italic 36px serif';
ctx.textBaseline = 'top';
ctx.fillText('Text in Canvas 2', 300, 220);

ctx.font = 'bold 36px serif';
ctx.textBaseline = 'middle';
ctx.strokeText('Text in Canvas 3', 600, 120);

ctx.font = 'small-caps 36px serif';
ctx.textBaseline = 'bottom';
ctx.fillText('Text in Canvas 4', 900, 420);
