function load(){
  setTimeout(() => {
    changeBackground("assets/images/1.jpg");
  }, 100);
  Boxes();
}


function changeBackground(){
  var imageN = document.getElementById("imageselector").value;
  let c=document.getElementById("myCanvas");
  let ctx=c.getContext("2d");
  var img=new Image();
  img.onload = function(){
        ctx.drawImage(img,0,0,954,507);
  };
  img.src="assets/images/" + imageN + ".jpg";
  console.log("Image picked as a Background: " + imageN)
  setTimeout(() => {
    Boxes();
  }, 100);
}


function Boxes(){
  let c = document.getElementById("myCanvas");
  let ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = 'black';
//Epic ID
  ctx.rect(40, 40, 300, 60); 
    ctx.strokeRect(40, 40, 300, 60);
//Nickname
  ctx.rect(40, 140, 300, 60);
    ctx.strokeRect(40, 140, 300, 60);
//Log-in time
  ctx.rect(40, 240, 300, 60);
    ctx.strokeRect(40, 240, 300, 60);
//Platform
  ctx.rect(40, 340, 300, 60);
    ctx.strokeRect(40, 340, 300, 60);
//Main Weapon
  ctx.rect(500, 40, 430, 60); 
    ctx.strokeRect(500, 40, 430, 60);
//Bio
  ctx.rect(500, 140, 430, 300); 
    ctx.strokeRect(500, 140, 430, 300);
  //Style
  ctx.fillStyle = "white";
  ctx.strokeStyle = "red";
  ctx.fill();
    //Weapon Selection
      //Sword
      var imgSword = document.getElementById("Sword");
        ctx.drawImage(imgSword, 510, 45, 50, 50)
      //Axe
      var imgAxe = document.getElementById("Axe");
        ctx.drawImage(imgAxe, 570, 45, 50, 50)
      //Repeaters
      var imgRepeaters = document.getElementById("Repeaters");
        ctx.drawImage(imgRepeaters, 630, 45, 50, 50)
      //War Pike
      var imgWarPike = document.getElementById("War Pike");
        ctx.drawImage(imgWarPike, 690, 45, 50, 50)
      //Chain Blades
      var imgChainBlades = document.getElementById("Chain Blades");
        ctx.drawImage(imgChainBlades, 750, 45, 50, 50)
      //Hammer
      var imgHammer = document.getElementById("Hammer");
        ctx.drawImage(imgHammer, 810, 45, 50, 50)
      //Aether Strikers
      var imgStrikers = document.getElementById("Strikers");
        ctx.drawImage(imgStrikers, 870, 45, 50, 50)
      //Logo
      var imgLogo = document.getElementById("Logo");
        ctx.drawImage(imgLogo, 875, 385, 50, 50);
  //Text
  ctx.fillStyle = "white";
  ctx.strokeStyle = 'black';
  ctx.font = "30px Arial";
  ctx.lineWidth = 2;
    //Epic ID
      ctx.strokeText("Epic ID:", 60, 38);
      ctx.fillText("Epic ID:", 60, 38);
    //Nickname
      ctx.strokeText("Nickname:", 60,138);
      ctx.fillText("Nickname:", 60, 138);
    //Log-in Time
      ctx.strokeText("Log-in Time:", 60,238);
      ctx.fillText("Log-in Time:", 60, 238);
    //Platform
      ctx.strokeText("Platform:", 60,338);
      ctx.fillText("Platform:", 60, 338);
    //Weapon Selection
      ctx.strokeText("Weapon Selection:", 600, 38);
      ctx.fillText("Weapon Selection:", 600, 38);
    //Bio
      ctx.strokeText("Bio:", 700, 138);
      ctx.fillText("Bio:", 700, 138);
  //Input
  ctx.fillStyle = "black";
  ctx.font = "23px Arial";
  ctx.lineWidth = 2;
  //Epic ID Input
  let userEpicID = document.getElementById("EpicID").value;
  ctx.fillText(userEpicID, 50, 78);
  //Nickname Input
  let userNickname = document.getElementById("Nickname").value;
  ctx.fillText(userNickname, 50, 178);
  //Log-in Time
  let userLogiInTime = document.getElementById("LoginTime").value;
  ctx.fillText(userLogiInTime, 50, 278);
  //Platform
  let userPlatform = document.getElementById("Platform").value;
  ctx.fillText(userPlatform, 50, 378);
  let userWeaponSelect = document.getElementById("WSelect").value;
  var userWeaponX = 0;
  if(userWeaponSelect == "Sword"){
    userWeaponX = 534;
  } else if(userWeaponSelect == "Axe"){
    userWeaponX = 595;
  } else if(userWeaponSelect == "Repeaters"){
    userWeaponX = 655;
  } else if(userWeaponSelect == "WarPike"){
    userWeaponX = 715;
  } else if(userWeaponSelect == "ChainBlades"){
    userWeaponX = 775;
  } else if(userWeaponSelect == "Hammer"){
    userWeaponX = 835;
  } else if(userWeaponSelect == "Strikers"){
    userWeaponX = 894;
  }
  ctx.beginPath();
    ctx.arc(userWeaponX, 70, 26, 0, 2 * Math.PI);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.stroke();

    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var maxWidth = 420;
    var lineHeight = 25;
    var x = 505;
    var y = 160;
    var text = document.getElementById('Bio').value;
    
    context.font = '16pt Calibri';
    context.fillStyle = '#333';
    
    wrapText(context, text, x, y, maxWidth, lineHeight);
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
  var words = text.split(' ');
  var line = '';

  for(var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    }
    else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
}