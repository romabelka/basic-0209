export default function isReviewNameValid(name) {
  return /^[a-zA-Z]+$/.test(name);
}
