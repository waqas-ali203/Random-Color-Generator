const getColor = () => {
  // Hexadecimal Code me hota ha colors
  const randomColor = Math.floor(Math.random() * 16777215);
  const randomCode = '#' + randomColor.toString(16);
//   console.log(randomColor,randomCode);
  document.body.style.backgroundColor = randomCode;
  document.getElementById('color-generator').innerText = randomCode;
  navigator.clipboard.writeText(randomCode) // for copy text on Clipboard
};
document.getElementById("btn").addEventListener("click", getColor);

// initial call
getColor();