/**
 ************************************************
 *  VALIDATE REQUEST HEADERS                    *
 ************************************************
 *  The API only handle data in JSON,           *
 *  all requests must have content-type header  *
 *  and must be set to "application/json"       *
 * **********************************************
 */

export default eventHandler((event) => {
  if (
    getHeader(event, "Content-Type") != "application/json" &&
    event.path === "/api/poem"
  )
    throw createError({
      statusCode: 400,
      statusMessage: "Content-Type must be 'application/json",
      message:
        "The request you have made echoes through the digital realm. But there is a key that is missing. Without it, the data is adrift, unseen and unheard, lost in the void. The world you seek to connect with waits, but your offering is incomplete. Return, set the correct key, and your journey will continue.",
    });
});
