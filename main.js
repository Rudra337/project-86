var canvas = new fabric.Canvas('myCanvas');

superhero_x = 10;
superhero_y = 10;

super_image_width = 30;
super_image_height = 30;

var super_object= "";
var super_image_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	super_object = Img;

	super_object.scaleToWidth(150);
	super_object.scaleToHeight(140);
	super_object.set({
	top:superhero_y,
	left:superhero_x
	});
	canvas.add(super_object);

	});
}
player_update() ;
