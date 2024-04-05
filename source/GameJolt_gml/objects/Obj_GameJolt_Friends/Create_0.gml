
GameJolt_Friends(
			function(friendsArray)
			{
				for(var a = 0 ; a < array_length(friendsArray) ; a++)
				{
					var ins = instance_create_depth(200+300*a,350,0,Obj_GameJolt_User_FromUserId)
					ins.user_id = friendsArray[a]
				}
			})
