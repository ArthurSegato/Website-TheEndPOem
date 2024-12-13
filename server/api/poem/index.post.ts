import { email, pipe, string, parse, object, minLength, is } from "valibot";

import logName from "~/server/utils/log/name";
import logEmail from "~/server/utils/log/email";
import updatePlaceholder from "~/server/utils/placeholder";

import poem from "~/assets/poem.json";
import easterEggs from "~/assets/easterEggs.json";

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
    const { name } = await readValidatedBody(event, (body) =>
      parse(bodySchema, body)
    );

    const requestCountry =
      getHeader(event, "x-vercel-ip-country") ?? "DEV MODE";

    return poem;

    if (is(emailSchema, name)) {
      logEmail(`${email} - ${requestCountry}`);
      return updatePlaceholder(name, easterEggs.email);
    }

    logName(`${name} - ${requestCountry}`);

    return updatePlaceholder(name, poem);
  } catch (error: any) {
    // If an error occurs during execution, return it
    return error;
  }
});
