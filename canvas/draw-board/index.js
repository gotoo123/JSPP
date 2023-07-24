const oCan = document.querySelector('#canvas');
const ctx = oCan.getContext('2d');

const oColorInput = document.querySelector('#colorInput');
const oLineWidthRange = document.querySelector('#lineWidthRange');
const oLineWidthValue = document.querySelector('#lineWidthValue');
const oClearAllBtn = document.querySelector('#clearAllBtn')

const clientWidth = document.documentElement.clientWidth;
const clientHeight = document.documentElement.clientHeight;

oCan.width = clientWidth;
oCan.height = clientHeight;


const CANVAS_VALUES = {
  DEFAULT_COLOR: '#000',
  DEFAULT_LINE_WIDTH: 1,
  DEFAULT_LINE_STYLE: 'round'
}

const state = {
  initPos: null
}

ctx.setColor = function(color) {
  this.strokeStyle = color;
  this.fillStyle = color;
}

ctx.setLineStyle = function(style) {
  this.lineCap = style;
  this.lineJoin = style;
}

ctx.setLineWidth = function(width) {
  this.lineWidth = width;
}


function drawPoint(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, ctx.lineWidth / 2, 0, 2 * Math.PI, false);
  ctx.fill();
}

function drawLine({x1, y1, x2, y2}) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function clearAll() {
  ctx.clearRect(0, 0, oCan.offsetWidth, oCan.offsetHeight);
}

function handleCanvasMouseDown(e) {
  const x1 = e.clientX;
  const y1 = e.clientY;
  state.initPos = {
    x1, y1
  }

  // 这里娿考虑到只有mousedown， 没有move的情况，应该画一个点出来
  drawPoint(x1, y1);

  oCan.addEventListener('mousemove', handleCanvasMouseMove, false);
  oCan.addEventListener('mouseup', handleCanvasMouseUp, false);
}


function handleCanvasMouseMove(e) {
  const x2 = e.clientX;
  const y2 = e.clientY;

  drawLine({...state.initPos, x2, y2});
  state.initPos = {x1: x2, y1: y2}
}

function handleCanvasMouseUp(e) {
  oCan.removeEventListener('mousemove', handleCanvasMouseMove, false);
  oCan.removeEventListener('mouseup', handleCanvasMouseUp, false);
}

function bindEvent() {
  oCan.addEventListener('mousedown', handleCanvasMouseDown, false);
  oColorInput.addEventListener('click', handleColorInput, false);
  oColorInput.addEventListener('input', handleColorInput, false);
  oLineWidthRange.addEventListener('input', handleLineWidthRangeInput, false);
  oClearAllBtn.addEventListener('click', handleClearAllBtnClick, false);
}

function handleColorInput() {
  const color = this.value;
  ctx.setColor(color);
}

function handleLineWidthRangeInput() {
  const lineWidth = this.value;
  oLineWidthValue.textContent = lineWidth;
  ctx.setLineWidth(lineWidth);
}

function handleClearAllBtnClick() {
  clearAll();
}

function initStyle() {
  ctx.setColor(CANVAS_VALUES.DEFAULT_COLOR);
  ctx.setLineStyle(CANVAS_VALUES.DEFAULT_LINE_STYLE);
  ctx.setLineWidth(CANVAS_VALUES.DEFAULT_LINE_WIDTH);
}

const init = () => {
  initStyle();
  bindEvent();
}

 
init();