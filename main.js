function capture() {
    Webcam.snap(function (data) {
        document.getElementById("result").innerHTML = "<img src='" + data + "' id='img' >"
    })
}
function identify() {
    img = document.getElementById("img");
    classifier.classify(img, gotResult)
}
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera")
console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9ObuZ5l0_/model.json", modelLoded);
function modelLoded() {
    console.log("model is ready");
}
function gotResult(error,result){
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        document.getElementById("objectName").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(5);
    }
}