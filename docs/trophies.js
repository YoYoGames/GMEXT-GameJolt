/**
 * @func GameJolt_Trophies_Fetch
 * @desc This function fetches a trophy data (see ${struct.TrophyData}).
 * 
 * @param {real} trophy_id The trophy identifier
 * @param {function} [callback_success] The callback function executed if the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @member {struct.TrophyData} trophy_data The trophy data
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * ```gml
 * GameJolt_Trophies_Fetch(myTropyID,
 *     function(_trophyData)
 *     {
 *         var _id = _trophyData.id;
 *         var _title = _trophyData.title;
 *         var _description = _trophyData.description;
 *         var _difficulty = _trophyData.difficulty;
 *         var _image_url = _trophyData.image_url;
 *         var _achieved = _trophyData.achieved;
 * 
 *         show_debug_message("Trophy info: " + string(_trophyData));
 *     }
 * );
 * ```
 * The code sample above will fetch a single trophy data (see ${struct.TrophyData}) and print it to the debugger if the task succeeds.
 * @func_end
 */


/**
 * @func GameJolt_Trophies_Fetch_All
 * @desc This function fetches an array of trophy data (see ${struct.TrophyData}).
 * 
 * @param {boolean} achieved Whether or not to fetch only achieved trophies
 * @param {function} [callback_success] The callback function executed if the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @member {array[struct.TrophyData]} trophy_data An array holding all trophy data
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * ```gml
 * GameJolt_Trophies_Fetch_All(true,
 *     function(trophiesArray)
 *     {
 *         var _trophyData = trophiesArray[0];
 * 
 *         var _id = _trophyData.id;
 *         var _title = _trophyData.title;
 *         var _description = _trophyData.description;
 *         var _difficulty = _trophyData.difficulty;
 *         var _image_url = _trophyData.image_url;
 *         var _achieved = _trophyData.achieved;
 * 
 *         show_debug_message("Trophy info: " + string(trophiesArray));
 *     }
 * );
 * ```
 * The code sample above will fetch all achieved trophies (see ${struct.TrophyData}) and print it to the debugger if the task succeeds.
 * @func_end
 */


/**
 * @func GameJolt_Trophies_Remove
 * @desc This function removes a previously achieved trophy for a particular user.
 * 
 * @param {string} trophy_id The trophy identifier
 * @param {function} [callback_success] The callback function executed when the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * ```gml
 * if (cheating == true)
 *     GameJolt_Trophies_Remove(trophyID, function() { show_message_async("You were caught cheating!"); });
 * ```
 * The code sample above checks if the variable cheating is `true` and if so it removes the current trophy from the user and prints a message that he was caught cheating.
 * @func_end
 */


/**
 * @func GameJolt_Trophies_Update
 * @desc This function sets a trophy as achieved for a particular user.
 * 
 * @param {string} trophy_id The trophy identifier
 * @param {function} [callback_success] The callback function executed when the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * ```gml
 * if (completeGame == true)
 *     GameJolt_Trophies_Update(trophyID, function() { show_message_async("You reached the end of the game!"); });
 * ```
 * The code sample above checks if the user completed the game, it updates the current trophy and prints a congratulations message.
 * @func_end
 */


/**
 * @struct TrophyData
 * @desc This struct contains details that describe a trophy.
 * 
 * @member {real} id The ID of the trophy
 * @member {string} title The title of the trophy on the site
 * @member {string} description The trophy description text
 * @member {string} difficulty Either `"Bronze"`, `"Silver"`, `"Gold"` or `"Platinum"`
 * @member {string} image_url The URL of the trophy's thumbnail image
 * @member {boolean|string} achieved Date/time when the trophy was achieved by the user, or `false` if they haven't achieved it yet
 * 
 * @struct_end
 */

/**
 * @module trophies
 * @title Trophies
 * @desc Feed into your player base's hunger for trophy hunting. Trophies will sync to their Game Jolt profile for all to see as badges of honor.
 * 
 * @section_func Functions
 * @desc The following functions are provided for working with trophies:
 * @ref GameJolt_Trophies_Fetch
 * @ref GameJolt_Trophies_Fetch_All
 * @section_end
 * 
 * @section_struct Structs
 * @desc Extra details on structs that are returned as trophy fetching results:
 * @ref TrophyData
 * @section_end
 * @module_end
 */