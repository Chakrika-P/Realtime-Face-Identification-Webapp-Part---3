function preload(){
    
}

function setup(){
    canvas=createCanvas(400, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Gu-XxnIjh/model.json", modelLoaded);
}

function draw(){
    image(video, 0, 0, 500, 500);
    classifier.classify(video, gotResults);
}

function modelLoaded(){
    console.log("modelLoaded");
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_name").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}