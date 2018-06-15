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

var navList = [navGender, navLanguage, navGeo, navAge, navReligion, navLiteracy, navEdu, navPoverty, navNutrition];

//var navMenu = document.getElementById('nav-menu');

navList[4].onclick = function() {
  for (var i = 0; i<navList.length; i++) {
      removeNavItem(navList[i]);
      navList[4].classList.add('nav-current');
  }
}

function removeNavItem(currentNavItem) {
  if (currentNavItem.classList.contains('nav-current')) {
    currentNavItem.classList.remove('nav-current');
  }
}
