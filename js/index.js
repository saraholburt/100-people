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

if (navList[0].classList.contains('nav-current')) {
  gender();
}

navList[0].onclick = function() {
  for (var i = 0; i<navList.length; i++) {
      removeNavItem(navList[i]);
      navList[0].classList.add('nav-current');
  }
      gender();
}

navList[1].onclick = function() {
  for (var i = 0; i<navList.length; i++) {
      removeNavItem(navList[i]);
      navList[1].classList.add('nav-current');
  }
  language();
}

navList[2].onclick = function() {
  for (var i = 0; i<navList.length; i++) {
      removeNavItem(navList[i]);
      navList[2].classList.add('nav-current');
  }
}

navList[3].onclick = function() {
  for (var i = 0; i<navList.length; i++) {
      removeNavItem(navList[i]);
      navList[3].classList.add('nav-current');
  }
}
navList[4].onclick = function() {
  for (var i = 0; i<navList.length; i++) {
      removeNavItem(navList[i]);
      navList[4].classList.add('nav-current');
  }
}

navList[5].onclick = function() {
  for (var i = 0; i<navList.length; i++) {
      removeNavItem(navList[i]);
      navList[5].classList.add('nav-current');
  }
}

navList[6].onclick = function() {
  for (var i = 0; i<navList.length; i++) {
      removeNavItem(navList[i]);
      navList[6].classList.add('nav-current');
  }
}

navList[7].onclick = function() {
  for (var i = 0; i<navList.length; i++) {
      removeNavItem(navList[i]);
      navList[7].classList.add('nav-current');
  }
}

navList[8].onclick = function() {
  for (var i = 0; i<navList.length; i++) {
      removeNavItem(navList[i]);
      navList[8].classList.add('nav-current');
  }
}

function removeNavItem(currentNavItem) {
  if (currentNavItem.classList.contains('nav-current')) {
    currentNavItem.classList.remove('nav-current');
  }
}

//INFOGRAPHIC


function gender() {
  var canvas = document.getElementById('infographic-canvas');
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var genderFem = new Image();
  var genderMale = new Image();

  ctx.save();

  genderFem.addEventListener('load', function() {
    ctx.drawImage(genderFem, 0, 0);
  }, false);

  genderFem.src = "images/gender-female.svg";
  genderMale.src = "images/gender-male.svg";
}

function language() {
  var canvas = document.getElementById('infographic-canvas');
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i<=50; i++) {
    ctx.beginPath();
    ctx.arc((i*i), (10+i), 15, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
  }
}
