import anime from 'animejs/lib/anime.es.js';

document.querySelector('a').addEventListener('click', function() {
  openDialog();
});

document.querySelector('p').addEventListener('click', function() {
  closeDialog();
});

let item = document.getElementById("item");
item.addEventListener("mouseenter", onMouseEnter);
item.addEventListener("mouseleave", onMouseLeave);

function onMouseEnter() {
  console.log("mouse enter");
  item.textContent = "↓click!";
}
function onMouseLeave() {
  console.log("mouse leave");
  item.textContent = "";
}

let dialogBase = document.getElementsByClassName("dialog-base")[0];
    console.log(dialogBase)

    function openDialog() {
      dialogBase.removeAttribute("hidden");
    }
    function closeDialog() {
      dialogBase.setAttribute("hidden", "hidden");

    }

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });