import TacoCard from "./TacoCard";

const Tacos = ({ items }) => {
  return items.map(({ id, name, image }) => {
    return <TacoCard key={id} name={name} image={image} />;
  });
};

export default Tacos;
