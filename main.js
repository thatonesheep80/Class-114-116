noseX = 0;
noseY = 0;

function takeSnap()
{
  save("picture.png");  
}

function draw()
{
  image(video, 0, 0, 300, 300);
  /*
  fill(255,0,0,);
  stroke(255,0,0);
  circle(noseX, noseY, 30);
  */
  image(noose, noseX, noseY, 40, 40);
}

function preload()
{
 noose = loadImage("https://i.postimg.cc/25v9Y5LT/clownnose-removebg-preview-1.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x - 20;
    noseY = results[0].pose.nose.y - 20;
    console.log("nose x =" + noseX);
    console.log("nose y =" + noseY);
  }
}