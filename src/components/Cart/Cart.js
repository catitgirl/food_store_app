import { useContext, useCallback } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = ({ onCartHide }) => {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);

  const totalAmountFormatted = `$${Math.abs(totalAmount).toFixed(2)}`;
  const hasItems = items.length > 0;

  const addToCartHandler = useCallback(
    (item) => {
      addItem({ ...item, amount: 1 });
    },
    [addItem]
  );

  const removeFromCartHandler = useCallback(
    (id) => {
      removeItem(id);
    },
    [removeItem]
  );

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addToCartHandler.bind(null, item)}
          onRemove={removeFromCartHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onCartHide={onCartHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmountFormatted}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCartHide}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
