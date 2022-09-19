
function Scr_GameJolt_Success(struct_response)
{
	if(type == "GameJolt_User_LogIn")
	{
		global.GameJolt_Auth_Confirmed = true
		global.GameJolt_GameToken = game_token
		global.GameJolt_Username = user_name
		
		var map = ds_map_create()
		map[?"username"] = global.GameJolt_Username
		map[?"gametoken"] = global.GameJolt_GameToken
		ds_map_secure_save(map,GameJolt_File_LogIn)
		ds_map_destroy(map)
	}
		
	if(is_undefined(callback_success)) exit;
	
	var array, arrayReturn;
	
	switch(type)
	{
		default:
			callback_success()
		break
		
		//case "GameJolt_User_LogIn":
		
		case "GameJolt_User_FetchMe":
		case "GameJolt_User_FetchWithUserID":
		case "GameJolt_User_FetchWithUserName":
		
			/*
			id,
			type,
			username,
			avatar_url,
			signed_up,
			signed_up_timestamp,
			last_logged_in,
			last_logged_in_timestamp,
			status,
			developer_name,
			developer_website,
			developer_description
			*/
			callback_success(struct_response.users[0]);
			
		break

		//case "GameJolt_Scores_Add":
		//case "GameJolt_Scores_Add_Guest":
		case "GameJolt_Scores_Fetch_Me":
		case "GameJolt_Scores_Fetch_Guest":
			
			var array_score = struct_response.scores
			if(!is_undefined(array_score))
			if(array_length(array_score))
			{		
				/*
				score
				sort
				extra_data
				user
				user_id
				guest
				stored
				stored_timestamp
				*/
				callback_success(array_score[0])
				return
			}
			callback_success(undefined)
			
		break
		
		case "GameJolt_Scores_Fetch":
		case "GameJolt_Scores_Fetch_BetterThan":
		case "GameJolt_Scores_Fetch_WorseThan":
			/*
			score,
			sort,
			extra_data,
			user,
			user_id,
			guest,
			stored,
			stored_timestamp
			*/
			
			callback_success(struct_response.scores)
			break
		
		case "GameJolt_Scores_Tables":
			callback_success(struct_response.tables);
			break;
		
		case "GameJolt_Scores_Rank":
			callback_success(struct_response.rank);
			break;
		
		case "GameJolt_Trophies_Fetch":
			
			if(variable_struct_exists(struct_response, "trophies"))
			{
				array = struct_response.trophies
				if(!array_length(array))
				{
					callback_success(undefined)	
					exit
				}
				
				var struct = array[0]
				
				/*
				id
				title
				description
				difficulty
				image_url
				achieved
				*/
				
				callback_success(array[0]);
			}
			break;
		
		case "GameJolt_Trophies_Fetch_All":
			if(variable_struct_exists(struct_response, "trophies"))
				callback_success(struct_response.trophies);
			break;
		
		case "GameJolt_DataStorage_Fetch":
		case "GameJolt_DataStorage_Fetch_Global":
			callback_success(struct_response.data)
			break;
		
		case "GameJolt_DataStorage_GetKeys":
		case "GameJolt_DataStorage_GetKeys_Global":
		
			arrayReturn = []
			
			if(!is_undefined(struct_response.keys))
			{
				array = struct_response.keys;
				for(var a = array_length(array) - 1; a >= 0; a--)
				{
					arrayReturn[a] = array[a].key;
				}
			}
			callback_success(array)
			break;
		
		case "GameJolt_Friends":
			arrayReturn = []
			
			if(!is_undefined(struct_response.friends))
			{
				array = struct_response.friends;
				for(var a = array_length(array) - 1; a >= 0; a--)
				{
					arrayReturn[a] = array[a].friend_id;
				}
			}
			callback_success(arrayReturn)
			break;
		
		case "GameJolt_Time":
		
			/*
			timestamp
			timezone
			year
			month
			day
			hour
			minute
			second
			*/
			
			callback_success(struct_response)
			break;
	}
}
