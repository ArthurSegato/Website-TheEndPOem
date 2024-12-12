/**
 ************************************************
 *  LOG NAME UTIL                               *
 ************************************************
 *  Send the name to my private discord chat,   *
 *  through discord webhooks                    *
 * **********************************************
 */
export default function (name: String) {
  return fetch(useRuntimeConfig().webhooks.discordName, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: `${name}` }),
  });
}
