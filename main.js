function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/4T-V1hm5m/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

animal = " ";
dog = 0;
cat = 0;
pig = 0;
hen = 0;
background_noise = 0;

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {

        console.log(results);

        red = Math.floor(Math.random() * 255) + 1;
        blue = Math.floor(Math.random() * 255) + 1;
        green = Math.floor(Math.random() * 255) + 1;

        document.getElementById("which_animal").innerHTML = 'Detected dog - ' + dog + ' Detected Cat - ' + cat + ' Detected pig - ' + pig + ' Detected Hen - ' + hen + '<br> Detected voice of - ' + animal + ' ';

        document.getElementById("which_animal").style.color = "rgb("+red+","+green+","+blue+")";

        img = document.getElementById("gif");

        if(results[0].label == "Pig"){
            pig = pig + 1;
            animal = "Oinking";
            img.src = "Pig.gif";
        }
        else if(results[0].label == "Dog"){
            dog = dog + 1;
            animal = "Barking";
            img.src = "Dog.gif";
        }
        else if(results[0].label == "Cat"){
            cat = cat + 1;
            animal = "Meowing";
            img.src = "Cat.gif";
        }
        else if(results[0].label == "Chicken"){
            hen = hen + 1;
            animal = "chicken";
            img.src = "hen.gif";
        }
        else{
            background_noise ==  background_noise+ 1;
            animal = "Background Noise";
            img.src = "listening.gif";
        }
    }
}
