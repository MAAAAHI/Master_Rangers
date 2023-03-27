var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;
	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({top:player_y,left:player_x});
	canvas.add(player_object);
	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({top:player_y,left:player_x});
	canvas.add(block_image_object);
	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(e.shiftKey == true && keyPressed == '80')


	{
	console.log("p and shift pressed together");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width	
    document.getElementById("current_height").innerHTML = block_image_height	
}
{

{
	console.log("p and shift pressed together");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width
    document.getElementById("current_height").innerHTML = block_image_height	
}
}


	// Check if the key value is equal to the LEFT arrow key value 37
	




	// Check if the key value is equal to the RIGHT arrow key value 39
	




	// Check if the key value is equal to the 'W' key value 87
	




	// Check if the key value is equal to the 'G' key value 71
	




	// Check if the key value is equal to the 'L' key value 76
	




	// Check if the key value is equal to the 'T' key value 84
	




	// Check if the key value is equal to the 'R' key value 82
	




	// Check if the key value is equal to the 'Y' key value 89
	




	// Check if the key value is equal to the 'D' key value 68
	




	// Check if the key value is equal to the 'U' key value 85
	




	// Check if the key value is equal to the 'C' key value 67
	



	}
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
// Function to move the player down when DOWN arrow key is pressed
function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
// Function to move the player left when LEFT arrow key is pressed
function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
// Function to move the player right when RIGHT arrow key is pressed
function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
