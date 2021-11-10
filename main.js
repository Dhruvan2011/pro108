function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-t4N2vrxW/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResult);
}

var dog=0;
var cat=0;
var lion=0;

function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);
        document.getElementById("result_count").innerHTML = "Detected Dog-"+dog+      "Detected cat-"+cat+      "Detected lion-"+lion;
        document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        

        document.getElementById("result_label").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        

        img = document.getElementById("animal_image");

        if(results[0].label == "Barking"){
            img.src = "bark.gif";
            dog = dog+1;
            
        }
        else if(results[0].label == "meowing"){
            img.src = "meow.gif";
            cat = cat+1;
            
        }
        else if(results[0].label == "Roaring"){
            img.src = "roar.gif";
            lion = lion+1;
        }
    
        
        else {
            img.src = "listen.gif";
        }
    }
}