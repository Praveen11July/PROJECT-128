song1 = ""
song2 = ""
rightWristX = 0
leftWristX = 0
rightWristY = 0
rightWristX = 0

function preload() {
    song1 = loadSound("Humpty_Dumpty.mp3");
    song2 = loadSound("Wheels_on_the_bus.mp3");
}
function setup() {
    canvas = createCanvas(600,600);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);


}
function modelLoaded() {
    console.log("Project is Intialized");

}
function gotPoses(results) {
if(results.length >0) {
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX + "leftWristY" + leftWristY);
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX + "rightWristY" + rightWristY);
}



}

function draw() {
    image(video,0,0,600,600);

}



