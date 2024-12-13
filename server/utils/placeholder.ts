// Replace the text placeholder
export default function (value: String, text: any) {
  for (let i = 0; i < text.length; i++) {
    text[i].phrase = text[i].phrase.replace("<player_name>", value);
  }

  return text;
}
