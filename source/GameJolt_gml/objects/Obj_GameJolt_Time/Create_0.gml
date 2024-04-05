
event_inherited();

request = noone

text = "Refresh Time"

server_time = ""

func_success = function(struct)
	{
		server_time = "====== Server Time ======\n"
		server_time += "timestamp: " + string(struct.timestamp) + "\n"
		server_time += "timezone: " + struct.timezone + "\n"
		server_time += "YYYY/MM/DD: " + struct.year + "/" + struct.month + "/" + struct.day + "\n"
		server_time += "hour:min:sec: " + struct.hour + ":" + struct.minute + ":" + struct.second
	}
	
func_failed = function(message)
	{
		server_time = ""
		show_debug_message(message)
	}

GameJolt_Time(func_success,func_failed)
