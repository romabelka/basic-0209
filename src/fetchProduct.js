import { restaurants } from "./fixtures";

export default function fetchProduct(id) {
  let result = {};
  restaurants.forEach(value => {
    const p = value.menu.find(product => product.id == id);
    if (p) {
      result = { restaurant: value.name, ...p };
    }
  });

  return result;
}
