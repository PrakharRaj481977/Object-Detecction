img="";
status="";
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status : Detecting objects";
}

function preload(){
    img=loadImage('Bedroom.jpg');
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Bed",170,180);
    noFill();
    stroke("#FF0000");
    rect(150,164,250,150);
}

function modelLoaded(){
    console.log("Model Loaded!!");
    status= true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,result){
if(error){
    console.log(error);
}
console.log(results);
}