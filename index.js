
const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});

var i = 0;
var txt = 'LAMEUTE';
var speed = 400;

function typeLam() {
  if (i < txt.length) {
    document.querySelector(".big-title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeLam, speed);
  }
}
typeLam();


