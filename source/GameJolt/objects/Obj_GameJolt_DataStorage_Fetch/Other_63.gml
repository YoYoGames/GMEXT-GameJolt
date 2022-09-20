

if(request == async_load[?"id"])
if(async_load[?"status"])
if(async_load[?"result"] != "")
	GameJolt_DataStorage_Fetch(async_load[?"result"],
							function(data)
							{
								show_message_async(data)
							},
							function(message)
							{
								show_message_async(message)
							}
						)
