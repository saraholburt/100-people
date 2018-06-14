$(document).ready(function() {
});

//ABOUT MODAL
var modal = document.getElementById('about-modal');
document.getElementById('btn-about').onclick = function() {
  modal.style.display = 'block';
}

document.getElementById('back-btn').onclick = function() {
  modal.style.display = 'none';
}

//NAVIGATION

var navGender = document.getElementById('nav-gender');
var navLanguage = document.getElementById('nav-language');
var navGeo = document.getElementById('nav-geo');
var navAge = document.getElementById('nav-age');
var navReligion = document.getElementById('nav-religion');
var navLiteracy = document.getElementById('nav-literacy');
var navEdu = document.getElementById('nav-edu');
var navPoverty = document.getElementById('nav-poverty');
var navNutrition = document.getElementById('nav-nutrition');

navLanguage.onclick = function() {
  changeNav(navGeo, navLanguage);
}

function changeNav(currentNavItem, newNavItem) {
  if (currentNavItem.classList.contains('nav-current')) {
    currentNavItem.classList.remove('nav-current');
    newNavItem.classList.add('nav-current');
  }
}
