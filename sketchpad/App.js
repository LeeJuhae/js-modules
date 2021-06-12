const App = () => {
  const canvas = document.getElementById('canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const rangeInput = document.getElementById('range');
    const colors = document.getElementById('colors');
    const modeBtn = document.getElementById('mode');
    const saveBtn = document.getElementById('save');

    let isdrawing = false;
    let drawMode = true;

    // canvas.width = 300;
    // canvas.height = 300;
    canvas.width = 600;
    canvas.height = 600;

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#2c2c2c';
    ctx.lineWidth = 2.5;

    // startPainting = () => {
    // 	isdrawing = true;
    //   }
    function startPainting() {
      isdrawing = true;
    }
    function stopPainting() {
      isdrawing = false;
    }
    function handleMouseMove(event) {
      const x = event.offsetX;
      const y = event.offsetY;
      if (!isdrawing) {
        ctx.beginPath();
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
        ctx.stroke();
        // ctx.closePath();
      }
    }
    function handleCanvasClick() {
      if (!drawMode) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
    function handleContextMenu(event) {
      event.preventDefault();
    }
    function handleRangeChange(event) {
      ctx.lineWidth = event.target.value;
    }
    function handleColorClick(event) {
      const clickColor = event.target.style.backgroundColor;
      ctx.strokeStyle = clickColor;
      ctx.fillStyle = clickColor;
    }
    function handleModeBtnClick() {
      modeBtn.textContent = drawMode ? 'Draw' : 'Fill';
      drawMode = !drawMode;
    }
    function handleSaveBtnClick() {
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'painting';
      link.click();
    }

    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('contextmenu', handleContextMenu);

    if (rangeInput) {
      rangeInput.addEventListener('change', handleRangeChange);
    }
    if (colors) {
      colors.addEventListener('click', handleColorClick);
    }
    if (modeBtn) {
      modeBtn.addEventListener('click', handleModeBtnClick);
    }
    if (saveBtn) {
      saveBtn.addEventListener('click', handleSaveBtnClick);
    }
  }
};

App();
