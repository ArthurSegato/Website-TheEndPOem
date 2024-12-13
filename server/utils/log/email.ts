// Send the email to a discord chat through discord webhooks
export default function (name: String) {
  return fetch(useRuntimeConfig().webhooks.discordEmail, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: `${name}` }),
  });
}
