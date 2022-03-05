noseX = 0;
nosey = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(160, 210);

    canvas = createCanvas(550, 510);
    canvas.position(760,210);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialized")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);  
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x; 
        difference = floor(leftWristX - rightWristX);

    }
}
function draw(){
    background('#ff4500')
    textsize(difference)
    fill('#00ffff')
    text('AIRPLANES', 50, 400)
}