
GameJolt_DataStorage_GetKeys("*",
	function(keysArray)
	{
		show_message_async(keysArray)
	},
	function(message)
	{
		show_message_async(message)
	}
)
