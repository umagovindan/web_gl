const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//var cirle = [ [100. 75], [120,60], [130,80] ];
for (var i=0; i<=6; i++){
  let x = 30 + i * 20;
  let y = 30 + i * 20;
ctx.beginPath();
ctx.arc(x,y, 5, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill();
ctx.lineWidth = '10';
ctx.stroke();
}

