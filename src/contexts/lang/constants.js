export const LANG_EN = "EN";
export const LANG_RU = "RU";

export const dictionary = {
  reviews: { [LANG_EN]: "Reviews", [LANG_RU]: "Отзывы" }
};

export const getPhrase = lang => phrase => {
  if (dictionary[phrase] && dictionary[phrase][lang]) {
    return dictionary[phrase][lang];
  } else return phrase;
};
