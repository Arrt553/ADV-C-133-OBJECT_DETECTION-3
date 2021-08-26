var status = "";
var img = "";
var objects = [];
function preload(){
    img = loadImage("dog_cat.jpg");
}
function setup(){
    canvas = createCanvas(650,450);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status :  Detecting Objects" ;
}

function modelLoaded(){
    console.log("Model is Loaded!");
    status = true;
    objectDetector.detect(img,gotResults);
    }
    
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else(results)
        console.log(results);
        objects = results;

    
    }
    
function draw(){
    image(img,0,0,650,450);

    if(status != ""){

        for(i = 0; i < objects.length; i++ ){
            document.getElementById("status").innerHTML = "Status : Object(s) detected";
            fill("#eb1c09");
            var percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "  " + percent + "% ",objects[i].x + 15,objects[i].y + 15);
            noFill();
            stroke("#eb1c09");
            rect(object[i].x,objects[i].y,objects[i].width,objects[i].height);
            
        }
    }




}
