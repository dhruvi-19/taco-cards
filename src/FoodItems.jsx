const FoodItems = ({ items, component: Component }) => {
  return items.map(({ id, name, image }) => {
    return <Component key={id} name={name} image={image} />;
  });
};

export default FoodItems;
