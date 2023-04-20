import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealForm.module.css';

const MealForm = ({ id, onAddToCart }) => {
  const [isInputValid, setIsInputValid] = useState(true);
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const amount = inputRef.current.value;
    const numberedAmount = Number(amount);

    if (!amount.trim() || numberedAmount < 1 || numberedAmount > 5) {
      setIsInputValid(false);
      return;
    }

    onAddToCart(numberedAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input ref={inputRef} label='Amount' input={{
        id: 'amount_' + id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
      }} />
      <button>+ Add</button>
      {!isInputValid && <p>'Please enter valid value (1-5)'</p>}
    </form>
  )
};

export default MealForm;