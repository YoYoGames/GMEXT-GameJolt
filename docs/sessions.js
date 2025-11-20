/**
 * @func GameJolt_Session_Check
 * @desc This function checks to see if there is an open session for the user. Can be used to see if a particular user account is active in the game.
 * 
 * [[Note: This function calls ${event.callback_failed} when no open session exists. This behavior is different from other functions which use the callback to indicate an error state.]]
 * 
 * @param {function} [callback_success] The callback function executed when the request succeeds
 * @param {function} [callback_failed] The callback function executed if no session is open
 * 
 * @event callback_success
 * @desc Triggered when the request succeeds
 * @event_end
 * 
 * @event callback_failed
 * @desc Triggered when no open session exists
 * @event_end
 * 
 * @example
 * ```gml
 * GameJolt_Session_Check(
 *     function()
 *     {
 *         show_message_async("Session is open");
 *     },
 *     function()
 *     {
 *         GameJolt_Session_Open();
 *     }
 * );
 * ```
 * The code sample above will check if there is a currently open session and if there is shows the message `"Session Connected"`, otherwise attemps to open a new session (using the method ${function.GameJolt_Session_Open}).
 * @func_end
 */


/**
 * @func GameJolt_Session_Close
 * @desc This function closes the active session.
 * 
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
 * GameJolt_Session_Close(undefined, function() { show_debug_message("Session Close Failed"); });
 * ```
 * The code sample above tries to close a session and provides a debug message if the session fails to close.
 * @func_end
 */


/**
 * @func GameJolt_Session_Open
 * @desc This function opens a game session for a particular user and allows you to tell Game Jolt that a user is playing your game. You must ping the session (using the functions ${function.GameJolt_Session_Ping_Active} or ${function.GameJolt_Session_Ping_Idle}) to keep it active and you must close it (using the ${function.GameJolt_Session_Close}) when you're done with it.
 * 
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
 * GameJolt_Session_Open(
 *     function()
 *     {
 *         show_message_async("Session Opened!!");
 *     },
 *     function(message)
 *     {
 *         show_message_async(message);
 *     }
 * );
 * ```
 * The code sample above tries to open a new session and provides a message with the regarding its success.
 * @func_end
 */


/**
 * @func GameJolt_Session_Ping_Active
 * @desc This function pings an open session to tell the system that the session is still being used (**Active**). If the session hasn't been pinged within 120 seconds, the system will close the session and you will have to open another one. It's recommended that you ping about every 30 seconds or so to keep the system from clearing out your session.
 * 
 * [[Tip: You can also let the system know the player is idled, using ${function.GameJolt_Session_Ping_Idle}.]]
 * 
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
 * GameJolt_Session_Ping_Active(undefined,
 *     function(message)
 *     {
 *         show_message_async("Unable to ping");
 *     }
 * );
 * ```
 * The code sample above tries to ping to the current session with an **active** user state and shows a message if unable to ping.
 * @func_end
 */


/**
 * @func GameJolt_Session_Ping_Idle
 * @desc This function pings an open session to tell the system that the session is still being used (*Idle**). If the session hasn't been pinged within 120 seconds, the system will close the session and you will have to open another one. It's recommended that you ping about every 30 seconds or so to keep the system from clearing out your session.
 * 
 * [[Tip: You can also let the system know the player is active, using ${function.GameJolt_Session_Ping_Active}.]]
 * 
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
 * GameJolt_Session_Ping_Idle(undefined,
 *     function(message)
 *     {
 *         show_message_async("Unable to ping");
 *     }
 * );
 * ```
 * The code sample above tries to ping to the current session with an **idle** user state and shows a message if unable to ping.
 * @func_end
 */

/**
 * @module sessions
 * @title Sessions
 * @desc Track when and how long each player is active in your game. You can then view stats such as average play time per session, total time played across users, and even see how many people are playing your game in real time.
 * 
 * @section_func Functions
 * @desc The following functions are provided for working with sessions:
 * @ref GameJolt_Session_*
 * @section_end
 * 
 * @module_end
 */