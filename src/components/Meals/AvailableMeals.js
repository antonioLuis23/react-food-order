import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Salmão e Vegetais.",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "Uma especialidade Alemã!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "Hamburger delicioso estilo norte-americano.",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Salada Verde",
    description: "Saudável e Saborosa.",
    price: 18.99,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;