import { restaurants } from "../../fixtures";

export const getOrder = order => {
  const mappedOrder = restaurants.reduce((result, restaurant) => {
    const dishList = restaurant.menu.reduce((result, dish) => {
      if (Object.keys(order).find(id => id === dish.id) && order[dish.id] > 0) {
        return [
          ...result,
          {
            dish: dish.name,
            amount: order[dish.id],
            price: dish.price
          }
        ];
      }
      return result;
    }, []);
    if (dishList.length) {
      return [...result, ...dishList];
    }
    return result;
  }, []);
  const totalPrice = mappedOrder.reduce(
    (sum, dish) => sum + dish.price * dish.amount,
    0
  );
  const totalAmount = mappedOrder.reduce((sum, dish) => sum + dish.amount, 0);

  return {
    order: mappedOrder,
    totalPrice,
    totalAmount
  };
};
