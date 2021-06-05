mustacheX=0;
mustacheY=0;

function preload()
{
mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup()
{
canvas=createCanvas(400,400);
canvas.center();

video=createCapture(VIDEO);
video.size(400,400);
video.hide();

posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotPoses);
}


function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    mustacheX=results[0].pose.nose.x-30;
    mustacheY=results[0].pose.nose.y+9;
}
}


function modelloaded()
{
console.log("posenet loaded!!");
}


function draw()
{
image(video,0,0,400,400);
image(mustache,mustacheX,mustacheY,60,35);
}

function save_screenshot()
{
    save('filter.png');
}
