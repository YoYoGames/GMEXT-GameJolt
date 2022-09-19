
if(async_load[?"id"] == request)
{
		var user = async_load[?"username"]
		var token = async_load[?"password"]
		GameJolt_User_LogIn(user,token,
						function()
						{
							instance_create_depth(200,250,0,Obj_GameJolt_User_Me)
						},
						function(message)
						{
							show_message_async("Error: " + message)
						}
					)
}
