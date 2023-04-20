import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealForm from "./MealForm";
import classes from "./MealItem.module.css";

const MealItem = ({ id, name, description, price, image }) => {
  const { addItem } = useContext(CartContext);

  const formatedPrice = `$${price.toFixed(2)}`;

  const addItemHandler = (amount) => {
    addItem({
      id,
      name,
      price,
      amount,
      image,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formatedPrice}</div>
      </div>
      <div>
        <MealForm id={id} onAddToCart={addItemHandler} />
      </div>
    </li>
  );
};

export default MealItem;
