import { connect } from "react-redux";
import { decrement, increment } from "../../redux/ac";
import { productAmountSelector, productSelector } from "../../redux/selectors";
import ProductComponent from "./product.component";

const mapStateToProps = (storeState, ownProps) => ({
  amount: productAmountSelector(storeState, ownProps),
  product: productSelector(storeState, ownProps)
});

const mapDispatchToProps = {
  handleDecrement: decrement, //handleDecrement = (...args) => dispatch(decrement(...args))
  handleIncrement: increment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductComponent);
