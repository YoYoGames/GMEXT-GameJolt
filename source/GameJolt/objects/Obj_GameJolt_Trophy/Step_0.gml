
if(mouse_check_button_pressed(mb_left))
if(point_in_rectangle(mouse_x,mouse_y,x-50,y-50,x+50,y+50))
{
	if(achieved == "false")
		GameJolt_Trophies_Update(ID,function(){achieved = "just now"})
	else
		GameJolt_Trophies_Remove(ID,function(){achieved = "false"})
}
