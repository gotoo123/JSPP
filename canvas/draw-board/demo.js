const oCan = document.querySelector('canvas');

const ctx = oCan.getContext('2d');

const clientWidth = document.documentElement.clientWidth;
const clientHeight = document.documentElement.clientHeight;


oCan.width = clientWidth;
oCan.height = clientHeight;

// 画线条: stroke
// 填充颜色：fill
ctx.strokeStyle = 'red';
ctx.fillStyle = 'green';

// 线段头的样式：lineCap 
ctx.lineCap = 'round';

// 线段连接交叉头的样式：lineJoin
ctx.lineJoin = 'round';

// 线段的宽度：lineWidth
ctx.lineWidth = 2;


// before draw => 开启一个绘制的路径
ctx.beginPath();

// 1. 将画笔移动到起点的像素坐标上
ctx.moveTo(100, 100);

// 2. 给出指令，要把画笔移动到哪个像素坐标上
ctx.lineTo(300, 300);
ctx.lineTo(500, 200);
ctx.lineTo(100, 100)

// 3. 按照1、2步的指令开始画
ctx.stroke();


// 重新开始画一个圆
ctx.beginPath();
// 画弧规则
// arg: x y r startDeg endDeg 顺逆时针绘制（false: 顺时针）
ctx.arc(700, 700, 50, 0, 2 * Math.PI, false);
// 绘制
ctx.stroke();
ctx.fill();


ctx.beginPath();
ctx.arc(500, 500, 50, 0, Math.PI, false);
ctx.lineTo(500, 500);
ctx.stroke();
ctx.fill();