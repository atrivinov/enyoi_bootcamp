const colorButton = document.getElementById('colorButton');

const colors = ['#FF0000', '#00FF00', '#0000FF'];

colorButton.addEventListener('click', function() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.backgroundColor = randomColor;
})
