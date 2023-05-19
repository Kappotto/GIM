let posX
let posY
let velX
let velY

let posT
let posT2
let velR
let velR2

function setup(){
	createCanvas(800, 400)
	
	posX = width/2
	posY = height/2
	velX = 10
	velY = 10
	posT = height/2
	posT2 = height/2
	

	background(255, 255, 255)
}

function draw(){
	background(255, 255, 255)
noStroke()
fill(0, 0, 0)
rect(30, 20, 20, 70)
rect(750, 20, 20, 70)





ellipse(posX, posY, 25, 25)
posX = posX + velX
posY = posY + velY

if (posX >= width) velX = -velX
if (posX <= 0) velX = -velX

if (posY >= height) velY = -velY
if (posY <= 0) velY = -velY
}

