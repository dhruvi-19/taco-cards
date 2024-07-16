import PropTypes from "prop-types";

import Card from "./Card";

const BurritoCard = (props) => {
  const { name } = props;
  const { image } = props;

  return (
    <Card>
      <a href="/" className="mb-3 text-lg text-black underline">
        {name}
      </a>

      <img className="h-full object-contain" src={image} alt="Delicious taco" />
    </Card>
  );
};

BurritoCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default BurritoCard;
