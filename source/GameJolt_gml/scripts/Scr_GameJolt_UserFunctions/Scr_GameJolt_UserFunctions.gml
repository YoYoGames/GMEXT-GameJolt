
global.GameJolt_Auth_Confirmed = false;
global.GameJolt_Username = "";
global.GameJolt_GameToken = "";

#macro GameJolt_API_URL "https://api.gamejolt.com/api/game/v1_2/"
#macro GameJolt_File_LogIn "GameJolt_File_LogIn.dat"

function GameJolt_User_IsLogged()
{
	return global.GameJolt_Auth_Confirmed
}

function GameJolt_User_LogIn_FromCache()
{
	if(file_exists(GameJolt_File_LogIn))
	{
		var map = ds_map_secure_load(GameJolt_File_LogIn)
		global.GameJolt_Username = map[?"username"]
		global.GameJolt_GameToken = map[?"gametoken"]
		global.GameJolt_Auth_Confirmed = true
		ds_map_destroy(map)
		return true
	}
	else
		return false
}

function GameJolt_User_LogIn(user_name,game_token,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "users/auth/"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"username",user_name,
									"user_token",game_token)
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	var request = Scr_GameJolt_Request("GameJolt_User_LogIn",url,"GET",callback_success,callback_failed)
	request.user_name = user_name
	request.game_token = game_token
	
	return request
}

function GameJolt_User_LogOut()
{
	global.GameJolt_Auth_Confirmed = false
	global.GameJolt_Username = ""
	global.GameJolt_GameToken = ""
	if(file_exists(GameJolt_File_LogIn))
		file_delete(GameJolt_File_LogIn)
}

function GameJolt_User_FetchMe(callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "users/"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"username",global.GameJolt_Username,
									)
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_User_FetchMe",url,"GET",callback_success,callback_failed)
}

function GameJolt_User_FetchWithUserID(user_id,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "users/"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"user_id",string(user_id))
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_User_FetchWithUserID",url,"GET",callback_success,callback_failed)
}

function GameJolt_User_FetchWithUserName(username,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "users/"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"username",username)
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_User_FetchWithUserName",url,"GET",callback_success,callback_failed)
}

function GameJolt_Session_Open(callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "sessions/open"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"username",global.GameJolt_Username,
									"user_token",global.GameJolt_GameToken)
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_Session_Open",url,"GET",callback_success,callback_failed)
}

function GameJolt_Session_Ping_Active(callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "sessions/ping"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"username",global.GameJolt_Username,
									"user_token",global.GameJolt_GameToken,
									"status","active")
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_Session_Ping_Active",url,"GET",callback_success,callback_failed)
}

function GameJolt_Session_Ping_IDLE(callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "sessions/ping"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"username",global.GameJolt_Username,
									"user_token",global.GameJolt_GameToken,
									"status","idle")
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_Session_Ping_IDLE",url,"GET",callback_success,callback_failed)
}

function GameJolt_Session_Check(callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "sessions/check"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"username",global.GameJolt_Username,
									"user_token",global.GameJolt_GameToken)
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_Session_Check",url,"GET",callback_success,callback_failed)
}

function GameJolt_Session_Close(callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "sessions/close"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"username",global.GameJolt_Username,
									"user_token",global.GameJolt_GameToken)
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_Session_Close",url,"GET",callback_success,callback_failed)
}

function GameJolt_Scores_Add(table_id,_score,sort,extra_data,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "scores/add"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"username",global.GameJolt_Username,
									"user_token",global.GameJolt_GameToken,
									"table_id",string(table_id),
									"score",_score,
									"sort",string(sort))
	
	if(extra_data != "")
		url = Scr_GameJolt_Parameters(url,"extra_data",extra_data)
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_Scores_Add",url,"GET",callback_success,callback_failed)
}

function GameJolt_Scores_Add_Guest(guest,table_id,_score,sort,extra_data,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "scores/add"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"guest",guest,
									"table_id",string(table_id),
									"score",_score,
									"sort",string(sort))
	if(extra_data != "")
		url = Scr_GameJolt_Parameters(url,"extra_data",extra_data)
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_Scores_Add_Guest",url,"GET",callback_success,callback_failed)
}

function GameJolt_Scores_Fetch_Me(table_id,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "scores/fetch"
	url = Scr_GameJolt_Parameters(url,
									"game_id", extension_get_option_value("GameJolt","GameID"),
									"username", global.GameJolt_Username,
									"user_token", global.GameJolt_GameToken,
									"table_id", string(table_id))
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_Scores_Fetch_Me",url,"GET",callback_success,callback_failed)
}

function GameJolt_Scores_Fetch_Guest(table_id,guest,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "scores/fetch"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"table_id",string(table_id),
									"guest",guest)
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_Scores_Fetch_Guest",url,"GET",callback_success,callback_failed)
}

function GameJolt_Scores_Fetch(table_id,limit,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "scores/fetch"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"table_id",string(table_id),
									"limit",string(limit))
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_Scores_Fetch",url,"GET",callback_success,callback_failed)
}

function GameJolt_Scores_Fetch_BetterThan(table_id,better_than,limit,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "scores/fetch"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"table_id",string(table_id),
									"better_than",string(better_than),
									"limit",string(limit))
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_Scores_Fetch_BetterThan",url,"GET",callback_success,callback_failed)
}

function GameJolt_Scores_Fetch_WorseThan(table_id,worse_than,limit,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "scores/fetch"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"table_id",string(table_id),
									"worse_than",string(worse_than),
									"limit",string(limit))
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_Scores_Fetch_WorseThan",url,"GET",callback_success,callback_failed)
}

function GameJolt_Scores_Tables(callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "scores/tables"
	url = Scr_GameJolt_Parameters(url,"game_id",extension_get_option_value("GameJolt","GameID"))
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_Scores_Tables",url,"GET",callback_success,callback_failed)
}

function GameJolt_Scores_Rank(table_id,sort,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "scores/get-rank"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"table_id",string(table_id),
									"sort",string(sort))
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_Scores_Rank",url,"GET",callback_success,callback_failed)
}

function GameJolt_Trophies_Fetch_All(achieved, callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "trophies/"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"username",global.GameJolt_Username,
									"user_token",global.GameJolt_GameToken,
									"achieved",string(achieved))
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_Trophies_Fetch_All",url,"GET",callback_success,callback_failed)
}

function GameJolt_Trophies_Fetch(trophy_id,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "trophies/"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"username",global.GameJolt_Username,
									"user_token",global.GameJolt_GameToken,
									"trophy_id",trophy_id)
									
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_Trophies_Fetch",url,"GET",callback_success,callback_failed)
}

function GameJolt_Trophies_Update(trophy_id,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "trophies/add-achieved"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"username",global.GameJolt_Username,
									"user_token",global.GameJolt_GameToken,
									"trophy_id",trophy_id)
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_Trophies_Update",url,"GET",callback_success,callback_failed)
}

function GameJolt_Trophies_Remove(trophy_id,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "trophies/remove-achieved"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"username",global.GameJolt_Username,
									"user_token",global.GameJolt_GameToken,
									"trophy_id",trophy_id)
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_Trophies_Remove",url,"GET",callback_success,callback_failed)
}

function GameJolt_DataStorage_Fetch(key,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "data-store/"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"username",global.GameJolt_Username,
									"user_token",global.GameJolt_GameToken,
									"key",key)
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_DataStorage_Fetch",url,"GET",callback_success,callback_failed)
}

function GameJolt_DataStorage_Fetch_Global(key,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "data-store/"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"key",key)
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_DataStorage_Fetch_Global",url,"GET",callback_success,callback_failed)
}

function GameJolt_DataStorage_Set(key,data,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "data-store/set/"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"username",global.GameJolt_Username,
									"user_token",global.GameJolt_GameToken,
									"key",key,
									"data",data)
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_DataStorage_Set",url,"GET",callback_success,callback_failed)
}

function GameJolt_DataStorage_Set_Global(key,data,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "data-store/set/"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"key",key,
									"data",data)
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_DataStorage_Set_Global",url,"GET",callback_success,callback_failed)
}

function GameJolt_DataStorage_Remove(key,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "data-store/remove"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"username",global.GameJolt_Username,
									"user_token",global.GameJolt_GameToken,
									"key",key)
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_DataStorage_Remove",url,"GET",callback_success,callback_failed)
}

function GameJolt_DataStorage_Remove_Global(key,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "data-store/remove"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"key",key)
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_DataStorage_Remove_Global",url,"GET",callback_success,callback_failed)
}

function GameJolt_DataStorage_Update(key,data,operation,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "data-store/set/"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"username",global.GameJolt_Username,
									"user_token",global.GameJolt_GameToken,
									"key",key,
									"data",data,
									"operation",operation)
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_DataStorage_Update",url,"GET",callback_success,callback_failed)
}

function GameJolt_DataStorage_Update_Global(key,data,operation,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "data-store/set/"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"key",key,
									"data",data,
									"operation",operation)
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_DataStorage_Update_Global",url,"GET",callback_success,callback_failed)
}

function GameJolt_DataStorage_GetKeys(pattern,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "data-store/get-keys/"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"username",global.GameJolt_Username,
									"user_token",global.GameJolt_GameToken)
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_DataStorage_GetKeys",url,"GET",callback_success,callback_failed)
}

function GameJolt_DataStorage_GetKeys_Global(pattern,callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "data-store/get-keys/"
	url = Scr_GameJolt_Parameters(url,"game_id",extension_get_option_value("GameJolt","GameID"))
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_DataStorage_GetKeys_Global",url,"GET",callback_success,callback_failed)
}

function GameJolt_Friends(callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "friends/"
	url = Scr_GameJolt_Parameters(url,
									"game_id",extension_get_option_value("GameJolt","GameID"),
									"username",global.GameJolt_Username,
									"user_token",global.GameJolt_GameToken)
	
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	
	return Scr_GameJolt_Request("GameJolt_Friends",url,"GET",callback_success,callback_failed)
}

function GameJolt_Time(callback_success = undefined,callback_failed = undefined)
{
	var url = GameJolt_API_URL + "time/"
	url = Scr_GameJolt_Parameters(url,"game_id",extension_get_option_value("GameJolt","GameID"))
	url = Scr_GameJolt_Parameters(url,"signature",md5_string_utf8(url+extension_get_option_value("GameJolt","PrivateKey")))
	return Scr_GameJolt_Request("GameJolt_Time",url,"GET",callback_success,callback_failed)
}

