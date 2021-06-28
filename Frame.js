function preload(){
    var synth = window.speechSynthesis;
    speak_data4 = "Thanks for Visiting LPDDR Mustache Filter! data Loaded!";
    var utterThis = new SpeechSynthesisUtterance(speak_data4);
    synth.speak(utterThis);
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNET = ml5.poseNet(video,modelLoaded);
poseNET.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is intilized");
}

function draw(){
image(video,0,0,300,300);

}

function gotPoses(results){
     if(results.length > 0){
          console.log(results);
           console.log("nose x = " + results[0].pose.nose.x);
            console.log("nose y = " + results[0].pose.nose.y); 
        }
         }

function takesnapshot(){
    save("Filter.png");
    var synth = window.speechSynthesis;
    speak_data2 = "Your Image has been successfully downlouded! Thanks for Visiting LPDDR filter! Hope we meet again! Have a wonderfull day!";
    var utterThis = new SpeechSynthesisUtterance(speak_data2);
    synth.speak(utterThis)
}



