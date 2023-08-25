function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/o1zdH2FYQ/model.json', modelReady);
}


function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' +
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r  + ","+random_number_g + "," + random_number_r + ")";

        img = document.getElementById('Cat');
        img1 = document.getElementById('Cow');
        img2 = document.getElementById('Dog');
        img3 = document.getElementById('Lion');

        if (results[0].label == "Clap") {
            img.src = 'cat.gif';
            img1.src = 'Cow.png';
            img2.src = 'Dog.png';
            img3.src = 'Lion.png';
        } else if (results[0].label == "Bell") {
            img.src = 'Cat.png';
            img1.src = 'cow.gif';
            img2.src = 'Dog.png';
            img3.src = 'Lion.png';
        } else if (results[0].label == "Snapping") {
            img.src = 'Cat.png';
            img1.src = 'Cow.png';
            img2.src = 'dog.gif';
            img3.src = 'Lion.png';
        } else if (results[0].label == "noises") {
            img.src = 'Cat.png';
            img1.src = 'Cow.png';
            img2.src = 'Dog.png';
            img3.src = 'lion.gif';
        }
    }
}