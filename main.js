Webcam.set(
    {
        width: 330,
        height: 270,
        image_format: 'png',
        png_quality:100
    });
    camera=document.getElementById("camera");
    Webcam.attach(camera);
    function take_snapshot()
    {
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML='<img id="captured" src="'+data_uri+'">';
});    
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xcg70yj1S/model.json',modelLoaded);
function modelLoaded()
{
    console.log("modelLoaded");
}
function check()
{
    img=document.getElementById("captured");
    classifier.classify(img,gotResult);
}
function gotResult(error,result)
{
    if (error){
        console.error(error);
    }
    else
    {
        console.log(result);
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(2);
    }
}