/// @description Simple example of how fetch a single trophy

GameJolt_Trophies_Fetch("151442",
						function(trophyData)
						{
							var ins = instance_create_depth(x,y,0,Obj_GameJolt_Trophy);
							ins.ID = trophyData.id;
							ins.title = trophyData.title;
							ins.description = trophyData.description;
							ins.difficulty = trophyData.difficulty;
							ins.image_url = trophyData.image_url;
							ins.achieved = trophyData.achieved;
						})
