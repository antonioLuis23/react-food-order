import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Comida Deliciosa, Entregue Para Você</h2>
      <p>
        Escolha sua comida favorita da nossa grande seleção de comidas
        disponíveis e curta um almoço ou jantar delicioso da sua casa.
      </p>
      <p>
        Todas as nossas refeições são preparadas com ingredientes de alta
        qualidade na hora e, claro, por chefes experientes!
      </p>
    </section>
  );
};

export default MealsSummary;
