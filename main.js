
noseX = 0;
noseY = 0;

difference = 0;

rwx = 0;
lwx = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Pose Net is intialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log("Nose X is equal to "+noseX+" Nose Y is eual to "+noseY);

        rwx = results[0].pose.rightWrist.x;
        lwx = results[0].pose.leftWrist.x;

        difference = Math.floor(lwx - rwx);

        console.log("Right Wrist X is equal to "+rwx+" Left Wrist X is equal to"+lwx+" Difference is equal to "+difference);
        }
}

function draw() {
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    square(noseX,noseY,difference);
    document.getElementById("square_side").innerHTML = "The side of the square is "+difference+" px."
}