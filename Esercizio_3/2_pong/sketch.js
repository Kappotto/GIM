let posX
let posY
let velX
let velY

function setup(){
	createCanvas(800, 400)
	posX = width/2
	posY = height/2
	velX = random(-10, 10)
	velY = random(-10, 10)

	background(random(150), random(150), random(230, 255))
}

function draw(){
noStroke()
fill(random(150), random(150), random(230, 255))

rect(posX, posY, 150, 150)
posX = posX + velX
posY = posY + velY

if (posX >= width) velX = -velX
if (posX <= 0) velX = -velX

if (posY >= height) velY = -velY
if (posY <= 0) velY = -velY
}

