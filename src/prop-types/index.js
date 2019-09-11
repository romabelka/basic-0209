import PropTypes from "prop-types";

const productType = {
  name: PropTypes.string,
  price: PropTypes.number,
  ingredients: PropTypes.array.isRequired
};

const menuType = PropTypes.arrayOf(PropTypes.shape(productType));

const reviewType = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number
};

const reviewsType = PropTypes.arrayOf(PropTypes.shape(reviewType));

const restaurantType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }),
  image: PropTypes.string.isRequire,
  menu: menuType,
  reviews: reviewsType
};

export { menuType, productType, reviewType, reviewsType, restaurantType };
export default PropTypes;
