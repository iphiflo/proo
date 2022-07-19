function setup()
{
    canvas= createCanvas(600, 500);
    canvas.center;
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

song = "";

function preload()
{
  song=loadSound("Ruth-B-Dandelions-vmlboxcom.mp3");
}
function play()
{
  song.play();
  song.sound(1);
  song.rate(1);
}