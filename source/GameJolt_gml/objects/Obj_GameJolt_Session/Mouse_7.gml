
if(text == "Paused")
{
	text = "Active"
	GameJolt_Session_Open(
						function()
						{
							alarm[0] = 1
						},
						function(message)
						{
							text = "Pause"
							alarm[0] = -1
							show_message_async(message)
						}
					)
}
else
{
	GameJolt_Session_Close()
	text = "Paused"
	alarm[0] = -1
}
