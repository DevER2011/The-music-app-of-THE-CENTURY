song = "";
function preload(){
    song = loadSound("megalovania.mp3");
}
function play(){
song.play();

}

function setup(){
canvas = createCanvas(600,700);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}
function draw(){
image(video, 0,0,600,700);
}