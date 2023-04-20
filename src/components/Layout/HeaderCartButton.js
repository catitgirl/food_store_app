import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onCartShow }) => {
	const { items } = useContext(CartContext);

	const [isHighlited, setIsHighlited] = useState(false);

	const numberOfCartItems = items.reduceRight((acc, item) => {
		acc += item.amount;
		return acc;
	}, 0);

	const btnClasses = `${classes.button} ${isHighlited ? classes.bump : ''}`;

	useEffect(() => {
		if (!items.length) {
			return;
		}

		setIsHighlited(true);

		const timer = setTimeout(() => setIsHighlited(false), 300);

		return () => clearTimeout(timer);
	}, [items])

	return (
		<button className={btnClasses} onClick={onCartShow}>
			<span className={classes.icon}><CartIcon /></span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	)
};

export default HeaderCartButton;