const FoodItems = ({ items }) => {
  return items.map(({ id, name, image, component: Component }) => {
    return <Component key={id} name={name} image={image} />;
  });
};

export default FoodItems;
