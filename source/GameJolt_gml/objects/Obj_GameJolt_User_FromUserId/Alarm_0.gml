
GameJolt_User_FetchWithUserID(user_id,
				function(struct)
				{
					my_id = struct.id
					my_type = struct.type
					my_username = struct.username
					my_avatar_url = struct.avatar_url
					my_signed_up = struct.signed_up
					my_signed_up_timestamp = struct.signed_up_timestamp
					my_last_logged_in = struct.last_logged_in
					my_last_logged_in_timestamp = struct.last_logged_in_timestamp
					my_status = struct.status
					my_developer_name = struct.developer_name
					my_developer_website = struct.developer_website
					my_developer_description = struct.developer_description
					
					spr = sprite_add(my_avatar_url,0,0,0,0,0)
				},
				function(message)
				{
					show_message_async(message)
				}
			)
