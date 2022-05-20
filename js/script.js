document.getElementById('header__burger').onclick = function() {
  document.getElementById('header__burger').classList.toggle('active');
  document.getElementById('header__menu').classList.toggle('active');
  document.getElementById('body').classList.toggle('lock');
}

// ↓ ibg ↓ //
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();
// ↑ ibg ↑ //


// add class on scroll 
let scrollpos = window.scrollY

const header = document.getElementById("header__body")
const scrollChange = 20

const add_class_on_scroll = () => header.classList.add("header-min")
const remove_class_on_scroll = () => header.classList.remove("header-min")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
})
// add class on scroll 