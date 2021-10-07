canvas=document.getElementById('mycanvas');
ctx=canvas.getContext("2d");
car_width="100";
car_height="90";
background_image="parkingLot.jpg";
car_image="car2.png";
car_x=5;
car_y=225;

 
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
 
function add() {
	background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;
    rover_imgtag=new Image();
    rover_imgtag.onload=uploadcar;
    rover_imgtag.src=car_image;

}
 
function uploadBackground() {
	ctx.drawImage(background_imgtag,0,0, canvas.width, canvas.height);
 
}
 
function uploadgreencar() {
    ctx.drawImage(car_imgtag, car_x,car_y,car_width, car_height);
 
    
}
 
 
window.addEventListener("keydown", my_keydown);
 
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("up");
        }
    
        if(keyPressed == '40')
        {
            down();
            console.log("down");
        }
        
        if(keyPressed == '37')
        {
            left();
            console.log("left");
        }
    
        if(keyPressed == '39')
        {
            right();
            console.log("right");
        }
        
        
}
 
function up()
{
    if (rover_y>=0){
		rover_y=rover_y-10;
		console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();
		 
			}
		
}
 
function down()
{
	if(rover_y<=500){
        
		rover_y=rover_y+10;
		console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();
			}
		
}
 
function left()
{
	if(rover_x>=0){
		rover_x=rover_x-10;
		uploadBackground();
		uploadrover();
			}
		
}
 
function right()
{
	if(rover_x<=700){
		rover_x=rover_x+10;
		uploadBackground();
		uploadrover();
			}
		
}
