import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import cheeseSet from "../../assets/cheese-set.jpg";
import grilledMeat from "../../assets/grilled-meat.jpg";
import khashSet from "../../assets/khash-set.jpg";
import gata from "../../assets/gata.jpg";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Armenian Cheese Set",
    description: "8 types of farm cheeses with vegetable slices",
    price: 15,
    image: cheeseSet,
  },
  {
    id: "m2",
    name: "Meet on grill",
    description:
      "2 servings each of chicken kebab and pork Xorovats, topped with grilled vegetables",
    price: 30,
    image: grilledMeat,
  },
  {
    id: "m3",
    name: "Set of traditional khash",
    description: "4 servings of broth, dried lavash, garlic, vegetables",
    price: 40,
    image: khashSet,
  },
  {
    id: "m4",
    name: "Armenian sweets",
    description:
      "4 servings of traditional Gerard gata baked by Grandma Gayane",
    price: 18.99,
    image: gata,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
