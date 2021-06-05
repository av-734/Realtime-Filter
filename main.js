var noseX="";
var noseY="";
function preload(){
    clown_filter=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
    }
}

function draw(){
    image(video,0,0,300,300);
    console.log("noseX="+noseX+" , noseY="+noseY);
    image(clown_filter,noseX,noseY,30,30);
    //image(clown_filter,10,10,30,30);
}

function takesnapshot(){
    save('dhruv.png');
}

function modelloaded(){
    console.log("poseNet is loaded");
}