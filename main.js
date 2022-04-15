rightWristX = 0;
leftWristX = 0;
difference = 0;
text = "";

function setup(){

    canvas = createCanvas(500,500);
    video = createCapture(VIDEO);
    video.position(1325,200);
    video.size(550, 550);
    posenet = ml5.poseNet(video, modelLoADED);
    posenet.on('pose', gotposes);

}

function modelLoADED(results){

    console.log(results);

}

function gotposes(results){

    if(results.length > 0){

        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;
        document.getElementById("sausage").innerHTML = "Font size = " + floor(difference);

    }

}

function draw(){

    background("black");
    textSize(difference);
    fill("red");
    text(Aaryan, 50, 300);

}

