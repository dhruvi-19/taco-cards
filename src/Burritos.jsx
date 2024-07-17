import BurritoCard from "./BurritoCard";

const Burritos = ({ items }) => {
  return items.map(({ id, name, image }) => {
    return <BurritoCard key={id} name={name} image={image} />;
  });
};

export default Burritos;
