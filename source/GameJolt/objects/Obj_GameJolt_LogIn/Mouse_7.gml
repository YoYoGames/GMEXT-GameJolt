
if(GameJolt_User_IsLogged())
{
	GameJolt_User_LogOut()
	with(Obj_GameJolt_User_Me)
		instance_destroy()
}
else
	request = get_login_async("","")

