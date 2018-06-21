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
  geography();
}

navList[3].onclick = function() {
  for (var i = 0; i<navList.length; i++) {
      removeNavItem(navList[i]);
      navList[3].classList.add('nav-current');
  }
  age();
}
navList[4].onclick = function() {
  for (var i = 0; i<navList.length; i++) {
      removeNavItem(navList[i]);
      navList[4].classList.add('nav-current');
  }
  religion();
}

navList[5].onclick = function() {
  for (var i = 0; i<navList.length; i++) {
      removeNavItem(navList[i]);
      navList[5].classList.add('nav-current');
  }
  literacy();
}

navList[6].onclick = function() {
  for (var i = 0; i<navList.length; i++) {
      removeNavItem(navList[i]);
      navList[6].classList.add('nav-current');
  }
  education();
}

navList[7].onclick = function() {
  for (var i = 0; i<navList.length; i++) {
      removeNavItem(navList[i]);
      navList[7].classList.add('nav-current');
  }
  poverty();
}

navList[8].onclick = function() {
  for (var i = 0; i<navList.length; i++) {
      removeNavItem(navList[i]);
      navList[8].classList.add('nav-current');
  }
  nutrition();
}

function removeNavItem(currentNavItem) {
  if (currentNavItem.classList.contains('nav-current')) {
    currentNavItem.classList.remove('nav-current');
  }
}

//INFOGRAPHIC

function multipleRows(xAxis, yAxis, columns, rows) {
  var canvas = document.getElementById('infographic-canvas');
  var ctx = canvas.getContext("2d");
  for (var a = 0; a<rows; a++) {
    for (var i = 0; i<columns; i++) {
        var randomNum = Math.floor(Math.random() * 12)+8;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#ffffff';
        ctx.beginPath();
        ctx.arc((40*i)+xAxis, yAxis, randomNum, 0, 2 * Math.PI);
        ctx.fill();
      }
        yAxis += 50;
    }
}

function singleRow(xAxis, yAxis, columns) {
  var canvas = document.getElementById('infographic-canvas');
  var ctx = canvas.getContext("2d");
  for (var i = 0; i<columns; i++) {
      var randomNum = Math.floor(Math.random() * 12)+8;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#ffffff';
      ctx.beginPath();
      ctx.arc((40*i)+xAxis, yAxis, randomNum, 0, 2 * Math.PI);
      ctx.fill();
    }
}

function gender() {
  var canvas = document.getElementById('infographic-canvas');
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('50 FEMALE', 0, 36);

  multipleRows(20, 70, 10, 5);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('50 MALE', 450, 36);

  multipleRows(460, 70, 10, 5);
}

function language() {
  var canvas = document.getElementById('infographic-canvas');
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('12 CHINESE', 0, 36);
  singleRow(140, 30, 12);

  ctx.shadowBlur = 0;
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('5 SPANISH', 0, 96);
  singleRow(140, 90, 5);

  ctx.shadowBlur = 0;
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('5 ENGLISH', 0, 156);
  singleRow(140, 150, 5);

  ctx.shadowBlur = 0;
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('3 ARABIC', 0, 216);
  singleRow(140, 210, 3);

  ctx.shadowBlur = 0;
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('3 HINDI', 0, 276);
  singleRow(140, 270, 3);

  ctx.shadowBlur = 0;
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('3 BENGALI', 0, 336);
  singleRow(140, 330, 3);

  ctx.shadowBlur = 0;
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('3 PORTUGUESE', 0, 396);
  singleRow(140, 390, 3);

  ctx.shadowBlur = 0;
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('2 RUSSIAN', 0, 456);
  singleRow(140, 450, 2);

  ctx.shadowBlur = 0;
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('2 JAPANESE', 0, 516);
  singleRow(140, 510, 2);

  ctx.shadowBlur = 0;
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('62 OTHER', 310, 216);

  multipleRows(420, 210, 12, 5);
  singleRow(420, 460, 2);
}

function geography() {
  var canvas = document.getElementById('infographic-canvas');
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('11 EUROPE', 0, 36);
  singleRow(180, 30, 11);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('5 NORTH AMERICA', 0, 96);
  singleRow(180, 90, 5);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('9 SOUTH AMERICA', 0, 156);
  singleRow(180, 150, 9);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('15 AFRICA', 0, 216);
  singleRow(180, 210, 9);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('60 ASIA', 0, 276);
  multipleRows(180, 270, 15, 4);
}

function age() {
  var canvas = document.getElementById('infographic-canvas');
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('26 AGED 0-14', 0, 36);
  singleRow(180, 30, 18);
  singleRow(180, 80, 8);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('66 AGED 15-64', 0, 156);
  multipleRows(180, 150, 18, 3);
  singleRow(180, 200, 12);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('8 AGED 64+', 0, 326);
  singleRow(180, 320, 8);
}

function religion() {
  var canvas = document.getElementById('infographic-canvas');
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('33 CHRISTIANS', 0, 36);
  multipleRows(180, 30, 15, 2);
  singleRow(180, 130, 3);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('22 MUSLIMS', 0, 196);
  singleRow(180, 190, 15);
  singleRow(180, 240, 7);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('14 HINDUS', 0, 306);
  singleRow(180, 300, 14);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('7 BUDDHISTS', 0, 366);
  singleRow(180, 360, 7);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('12 OTHER', 0, 416);
  singleRow(180, 410, 12);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('12 NO RELIGION', 0, 466);
  singleRow(180, 460, 12);
}

function literacy() {
  var canvas = document.getElementById('infographic-canvas');
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('83 ABLE TO READ & WRITE', 0, 36);

  multipleRows(20, 70, 15, 5);
  singleRow(20, 320, 8);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('17 UNABLE TO READ & WRITE', 0, 386);

  singleRow(20, 420, 15);
}

function education() {
  var canvas = document.getElementById('infographic-canvas');
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('93 DO NOT HAVE A COLLEGE EDUCATION', 0, 36);

  multipleRows(20, 70, 15, 6);
  singleRow(20, 370, 3);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('7 HAVE A COLLEGE EDUCATION', 0, 430);

  singleRow(20, 460, 7);
}

function poverty() {
  var canvas = document.getElementById('infographic-canvas');
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('48 LIVE ON LESS THAN $2 PER DAY', 0, 36);

  multipleRows(20, 70, 15, 3);
  singleRow(20, 220, 3);
}

function nutrition() {
  var canvas = document.getElementById('infographic-canvas');
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('21 OVERWEIGHT', 0, 36);
  singleRow(180, 30, 15);
  singleRow(180, 80, 6);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('63 ADEQUATE', 0, 146);
  multipleRows(180, 140, 15, 4);
  singleRow(180, 340, 3);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('15 MALNOURISHED', 0, 406);
  singleRow(180, 400, 15);

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '16px IBM Plex Sans, Helvetica, Arial ,sans-serif';
  ctx.fillText('1 STARVING', 0, 456);
  singleRow(180, 450, 1);
}
