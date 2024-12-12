import { email, pipe, string, parse, object, minLength, is } from "valibot";
import logName from "~/server/utils/log/name";
import logEmail from "~/server/utils/log/email";

const poem = require("~/assets/poem.json");
const easterEggs = require("~/assets/easterEggs.json");

const emailSchema = pipe(string(), email());

const bodySchema = object(
  {
    name: pipe(
      string(
        "You must return to the beginning, where words are born and thoughts are formed. It is not yet time for you to play the game. The game is for those who speak the language of the universe, and you... are not yet one of them."
      ),
      minLength(
        1,
        "No. This is not the player. It is empty. A void. A place where words have not yet found their way. The screen shows nothing, for it holds no meaning. It cannot dream, because it is not filled with thought. It cannot be the player."
      )
    ),
  },
  "A requisition was made, but the silence speaks louder than the words. For your plea lacks the core that binds it to purpose. Empty, barren, the void remains unfilled. What is needed to give form to your message, to breathe life into your request? Return once more, and bring with you the vessel that will carry your intent."
);

export default eventHandler(async (event) => {
  try {
    // Extract body after validation
    const { name } = await readValidatedBody(event, (body) =>
      parse(bodySchema, body)
    );

    // Get the country where the request was made
    const requestCountry =
      getHeader(event, "x-vercel-ip-country") ?? "DEV MODE";

    // Log on discord chat
    is(emailSchema, name)
      ? logEmail(`${name} - ${requestCountry}`)
      : logName(`${name} - ${requestCountry}`);

    // Create a copy of the poem to be modified
    let response = poem;

    if (is(emailSchema, name)) response = easterEggs.email;

    // Check if a easter egg was triggered and replace the email
    for (const [key, value] of Object.entries(easterEggs)) {
      if (key != "email" && name.toLowerCase() == key) response = value;
    }

    // Insert the name into the poem
    for (let i = 0; i < response.length; i++) {
      response[i].phrase = response[i].phrase.replace("<player_name>", name);
    }

    // Return the poem
    return response;
  } catch (error: any) {
    // If an error occurs during execution, return it
    return error;
  }
});
