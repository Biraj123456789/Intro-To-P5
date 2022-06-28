function preload()
{

}
function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}
function draw()
{
    image(video,0,0,640,480);
    tint(tint_color);
    fill(0, 128, 0);
     stroke(0, 128, 0); 
     circle(80, 50, 70);
     circle(80, 400, 70);
     circle(550, 400, 70);
     circle(550, 50, 70);
}
function take_snapshot()
{
    save('Your Bad mouth photo');
}
function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}