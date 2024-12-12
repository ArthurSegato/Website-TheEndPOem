/**
 **********************************************
 *  LOG EMAIL UTIL                            *
 **********************************************
 *  Send the email to another discord chat,   *
 *  through discord webhooks                  *
 * ********************************************
 */
export default function (name: String) {
  return fetch(useRuntimeConfig().webhooks.discordEmail, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: `${name}` }),
  });
}
