Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90
});

Webcam.attach("camera")

//Code for taking snapshot//
function get() {
    Webcam.snap(
        function(img) {
         document.getElementById("result").innerHTML=`<img src=${img} id="capimg">`   
        }
    )
}
