
alarm[0] = room_speed * 30

GameJolt_Session_Ping_Active(
								undefined,
								function(message)
								{
									show_message_async(message)
									text = "Paused"
									alarm[0] = -1
								}
							)
