/**
 * @func GameJolt_User_FetchMe
 * @desc This function fetches the logged user data (see ${struct.UserData}).
 * 
 * @param {function} [callback_success] The callback function executed if the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @member {struct.UserData} user_data The user data
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * ```gml
 * GameJolt_User_FetchMe(
 *     function(_userData)
 *     {
 *         var _id = _userData.id;
 *         var _type = _userData.type;
 *         var _username = _userData.username;
 *         var _avatar_url = _userData.avatar_url;
 *         var _signed_up = _userData.signed_up;
 *         var _signed_up_timestamp = _userData.signed_up_timestamp;
 *         var _last_logged_in = _userData.last_logged_in;
 *         var _last_logged_in_timestamp = _userData.last_logged_in_timestamp;
 *         var _status = _userData.status;
 *         var _developer_name = _userData.developer_name;
 *         var _developer_website = _userData.developer_website;
 *         var _developer_description = _userData.developer_description;
 *         sprite = sprite_add(_avatar_url, 0, 0, 0, 0, 0);
 *     },
 *     function(message)
 *     {
 *         show_message_async(message);
 *     }
 * );
 * ```
 * The code above will fetch the current logged user data (see ${struct.UserData}) and after successfully retrieving it it starts loading the `avatar_url` of the user (using the function ${function.sprite_add}). If it fails, it prints an asynchronous message with the error.
 * @func_end
 */

/**
 * @func GameJolt_User_FetchWithUserID
 * @desc This function fetches the user data of a specific user ID (see ${struct.UserData}).
 * 
 * [[Tip: This function is helpful for retrieving information from friends' `user_id`, ${function.GameJolt_Friends}.]]
 * 
 * @param {string} user_id The player's user ID
 * @param {function} [callback_success] The callback function executed if the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @member {struct.UserData} user_data The user data
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * ```gml
 * GameJolt_User_FetchWithUserID(32323,
 *     function(_userData)
 *     {
 *         var _id = _userData.id;
 *         var _type = _userData.type;
 *         var _username = _userData.username;
 *         var _avatar_url = _userData.avatar_url;
 *         var _signed_up = _userData.signed_up;
 *         var _signed_up_timestamp = _userData.signed_up_timestamp;
 *         var _last_logged_in = _userData.last_logged_in;
 *         var _last_logged_in_timestamp = _userData.last_logged_in_timestamp;
 *         var _status = _userData.status;
 *         var _developer_name = _userData.developer_name;
 *         var _developer_website = _userData.developer_website;
 *         var _developer_description = _userData.developer_description;
 *         sprite = sprite_add(_avatar_url, 0, 0, 0, 0, 0);
 *     },
 *     function(message)
 *     {
 *         show_message_async(message);
 *     });
 * ```
 * The code above will fetch the user data (see ${struct.UserData}) of a given user ID (you can get the user IDs of friends using the ${function.GameJolt_Friends} function) and after successfully retrieving it it starts loading the `avatar_url` of the user (using the function ${function.sprite_add}). If it fails, it prints an asynchronous message with the error.
 * @func_end
 */

/**
 * @func GameJolt_User_FetchWithUserName
 * @desc This function fetches the user data of a specific username (see ${struct.UserData}).
 * 
 * @param {string} username The player's username
 * @param {function} [callback_success] The callback function executed if the request succeeds
 * @param {function} [callback_failed] The callback function executed if the request fails
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @member {struct.UserData} user_data The user data
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when the request fails
 * @member {string} error_message The error message
 * @event_end
 * 
 * @example
 * ```gml
 * GameJolt_User_FetchWithUserName("gameMaster",
 *     function(_userData)
 *     {
 *         var _id = _userData.id;
 *         var _type = _userData.type;
 *         var _username = _userData.username;
 *         var _avatar_url = _userData.avatar_url;
 *         var _signed_up = _userData.signed_up;
 *         var _signed_up_timestamp = _userData.signed_up_timestamp;
 *         var _last_logged_in = _userData.last_logged_in;
 *         var _last_logged_in_timestamp = _userData.last_logged_in_timestamp;
 *         var _status = _userData.status;
 *         var _developer_name = _userData.developer_name;
 *         var _developer_website = _userData.developer_website;
 *         var _developer_description = _userData.developer_description;
 *         sprite = sprite_add(_avatar_url, 0, 0, 0, 0, 0);
 *     },
 *     function(message)
 *     {
 *         show_message_async(message);
 *     });
 * ```
 * The code above will fetch the user data (see ${struct.UserData}) of a given `username` and, after successfully retrieving it, it starts loading the `avatar_url` of the user (using the function ${function.sprite_add}). If it fails, it prints an asynchronous message with the error.
 * @func_end
 */

/**
 * @func GameJolt_User_IsLogged
 * @desc This function checks if the user is currently logged in.
 * 
 * @returns {bool}
 * 
 * @example
 * ```gml
 * if (GameJolt_User_IsLogged())
 * {
 *     GameJolt_User_LogOut();
 * }
 * else
 * {
 *     GameJolt_User_LogIn_FromCache();
 * }
 * ```
 * The code sample above will check if the user is currently logged in and, if so, logs the user out (using the function ${function.GameJolt_User_LogOut}), otherwise it will log the user in with the information stored in the cache (using the function ${function.GameJolt_User_LogIn_FromCache}).
 * @func_end
 */

/**
 * @func GameJolt_User_LogIn
 * @desc This function authenticates the user's information. This should be done before you make any calls for the user, to make sure the user's credentials (username and token) are valid.
 * 
 * [[Note: You can use ${function.GameJolt_User_LogIn_FromCache} to login with cached data over the next sessions.]]
 * 
 * @param {string} user_name The user's username
 * @param {string} game_token The user's token
 * @param {string} [callback_success] The callback function executed when the request succeeds
 * @param {string} [callback_failed] The callback function executed if the request fails
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
 * GameJolt_User_LogIn(user, token,
 *     function()
 *     {
 *         instance_create_depth(200, 250, 0, objPlayer);
 *     },
 *     function(message)
 *     {
 *         show_message_async("Error: " + message);
 *     }
 * );
 * ```
 * The code sample above will log in a user to a specific game using the game token for that game. After a successful login it creates an instance of `objPlayer` in the room (using the ${function.instance_create_depth} function), otherwise it will display an error message.
 * @func_end
 */

/**
 * @func GameJolt_User_LogIn_FromCache
 * @desc This function logs in using the cached data from previous sessions (see ${function.GameJolt_User_LogIn}).
 * 
 * @returns {bool}
 * 
 * @example
 * ```gml
 * if (GameJolt_User_LogIn_FromCache())
 * {
 *     instance_create_depth(200, 250, 0, objPlayer);
 * }
 * ```
 * The code sample above will try to log in a user to a specific game using data cached from a previous session. If the login is successful, it creates an instance of `objPlayer` inside the room (using the ${function.instance_create_depth} function).
 * @func_end
 */

/**
 * @func GameJolt_User_LogOut
 * @desc This function closes a session and clears its cache.
 * 
 * @example
 * ```gml
 * if (GameJolt_User_IsLogged())
 * {
 *     GameJolt_User_LogOut();
 * }
 * ```
 * The code sample above will check if the user is currently logged in (using the ${function.GameJolt_User_IsLogged} function) and, if so, it logs out the user.
 * @func_end
 */


/**
 * @struct UserData
 * @desc This struct contains details that describe a user.
 * 
 * @member {real} id The ID of the user
 * @member {string} type The type of user. Can be `"User"`, `"Developer"`, `"Moderator"`, or `"Administrator"`.
 * @member {string} username The user's username
 * @member {string} avatar_url The URL of the user's avatar
 * @member {string} signed_up How long ago the user signed up (example: `"1 year ago"`)
 * @member {real} signed_up_timestamp The timestamp (in seconds) of when the user signed up
 * @member {string} last_logged_in How long ago the user was last logged in. Will be `"Online Now"` if the user is currently online. (example: `"2 minutes ago"`)
 * @member {real} last_logged_in_timestamp The timestamp (in seconds) of when the user was last logged in
 * @member {string} status `"Active"` if the user is still a member of the site. `"Banned"` if they've been banned.
 * @member {string} developer_name The user's display name
 * @member {string} developer_website The user's website (or an empty string `""` if not specified)
 * @member {string} developer_description The user's profile markdown description
 * @struct_end
 */

/**
 * @module users
 * @title Users
 * @desc Log in, log out and log in from previously cached user data. Access user's account information to customise your game to your target audience.
 * 
 * @section_func Functions
 * @desc The following functions are provided for working with user and accounts:
 * @ref GameJolt_User_*
 * @section_end
 * 
 * @section_struct Structs
 * @desc Extra details on structs that are returned as user fetching results:
 * @ref UserData
 * @section_end
 * 
 * @module_end
 */