
event_inherited();

request = noone
text = "LogIn"

if(GameJolt_User_LogIn_FromCache())
	instance_create_depth(200,250,0,Obj_GameJolt_User_Me)

