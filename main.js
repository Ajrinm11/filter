function preload(){

}

function setup(){
canvas = createCanvas(640, 480);
canvas.position(100, 260)
video=createCapture(VIDEO);
video.hide();

tint_color="";
}

function draw(){
tint(tint_color);
image(video, 0, 0, 640, 480);
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;

}

function take_snapshot(){
    save("pic.png");
}