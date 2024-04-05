
GameJolt_Session_Check(
						function()
						{
							show_message_async("Session Connected")
						}
						,
						function(message)
						{
							show_message_async(message)
						}
					)
