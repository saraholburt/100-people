$(document).ready(function() {
});

//About Modal
var modal = document.getElementById('about-modal');
document.getElementById('btn-about').onclick = function() {
  modal.style.display = 'block';
}

document.getElementById('back-btn').onclick = function() {
  modal.style.display = 'none';
}
