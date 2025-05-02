const text = document.getElementById("text");
const valueLabel = document.getElementById("value");

document.addEventListener("mousemove", e => {
  const percent = e.clientX / window.innerWidth;
  const cstmValue = Math.round(percent * 100);

  text.style.fontVariationSettings = `'CSTM' ${cstmValue}`;
  valueLabel.textContent = cstmValue;
});
