export default function isReviewTextValid(text) {
  return /^[a-zA-Z]{2,150}$/.test(text);
}

// I know this is not the right way to check review. It's just an example
