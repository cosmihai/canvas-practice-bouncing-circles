var canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var context = canvas.getContext("2d");

// --------------------- BOUNCING CIRCLES----------------------------

// --------------create mouse object-------------------

var mouse = {
  x: undefined,
  y: undefined
}
var maxRadius = 200;
// var minRadius = 10;
var colorArray = [
  "rgba(0, 255, 85, .5)",
  "rgba(0, 255, 237, .5)",
  "rgba(0, 161, 255, .5)",
  "rgba(212, 0, 255, .5)"
];


// ------------add the eventListener-----------------------

window.addEventListener('mousemove', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener('resize', function(){
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  init();
});

// --------------------- the circle constructor--------------------------

function Circle(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = color;
  this.fillColor = colorArray[Math.floor(Math.random() * colorArray.length)];

  // this.draw = function() {
  //   context.beginPath();
  //   context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  //   context.strokeStyle = this.color;
  //   context.fillStyle = this.fillColor;
  //   context.fill();
  //   context.stroke();
  // };

  // this.update = function() {
  //   if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
  //     this.dx = -this.dx;
  //   }
  //   if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
  //     this.dy = -this.dy;
  //   }
  //   this.x += this.dx;
  //   this.y += this.dy;

  //   // ---interactivity----
  //   if (mouse.x-this.x<50 && mouse.x-this.x >-50 && mouse.y-this.y< 50 && mouse.y-this.y>-50) {
  //     if (this.radius<maxRadius){
  //       this.radius += 1;
  //     }
  //   }else if(this.radius>minRadius) {
  //     this.radius -= 1;
  //   }
    

  //   this.draw();
  // };
}

Circle.prototype.draw = function() {
  context.beginPath();
  context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  context.strokeStyle = this.color;
  context.fillStyle = this.fillColor;
  context.fill();
  context.stroke();
};

Circle.prototype.update = function() {
  if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
    this.dx = -this.dx;
  }
  if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
    this.dy = -this.dy;
  }
  this.x += this.dx;
  this.y += this.dy;

  // ---interactivity----
  if (mouse.x-this.x<100 && mouse.x-this.x >-100 && mouse.y-this.y< 100 && mouse.y-this.y>-100) {
    if (this.radius<maxRadius){
      this.radius += 1;
    }
  }else if(this.radius>this.minRadius) {
    this.radius -= 1;
  }
  

  this.draw();
};

var circleArray = [];

function init () {
  circleArray = [];
  var numberOfCircle = 1500;
  for (var i = 0; i < numberOfCircle; i++) {
    var radius = Math.floor(Math.random()*20+1);
    var x = Math.floor(Math.random() * (canvas.width - radius * 2) + radius);
    var y = Math.floor(Math.random() * (canvas.height - radius * 2) + radius);
    var dx = Math.random() - 0.5 * 2;
    var dy = Math.random() - 0.5 * 1.5 ;
    var color = "#" + Math.floor(Math.random() * 999999);
    circleArray.push(new Circle(x, y, dx, dy, radius, color));
  }
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();
init();








// var r = 30;
// var x = 200;
// var y = 200;
// var speedx = 6;
// var speedy = 4;

// function animate () {
//   requestAnimationFrame(animate);
//   context.clearRect(100, 100, canvas.width-200, canvas.height-200);

//   context.beginPath();
//   context.arc(x, y, r, 0, Math.PI * 2, false);
//   context.strokeStyle = '2px solid blue';
//   context.stroke();
//   if (x + r > canvas.width || x - r < 0) {
//     speedx = -speedx;
//   }
//   if (y + r > canvas.height || y - r < 0) {
//     speedy = -speedy;
//   }
//   x+=speedx;
//   y+= speedy;
// }

// animate ();
