
if(sprite_exists(spr))
	draw_sprite_stretched(spr,0,x-100,y-100,200,200)


draw_set_halign(fa_left)
draw_set_font(Font_YoYo_30)
draw_set_valign(fa_bottom)
draw_text(x-100,y-100,my_username)
draw_set_valign(fa_top)
draw_set_font(Font_YoYo_20)
draw_text(x-100,y+110,my_developer_description)
draw_text(x-100,y+140,my_last_logged_in)
