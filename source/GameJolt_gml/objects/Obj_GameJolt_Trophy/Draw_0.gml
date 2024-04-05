
if(sprite_exists(spr))
{
	if(achieved == "false")
		draw_set_alpha(0.5)
	else
		draw_set_alpha(1.0)
	
	draw_sprite_stretched(spr,0,x-50,y-50,100,100)
	
	draw_set_alpha(1.0)
	
	
	draw_set_halign(fa_center)
	draw_set_valign(fa_bottom)
	draw_set_font(Font_YoYo_30)
	draw_text(x,y-60,title)

	draw_set_valign(fa_top)
	draw_set_font(Font_YoYo_20)
	draw_text_ext_transformed(x,y+60,description,23,200,1,1,0)
}

