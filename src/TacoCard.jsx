import PropTypes from "prop-types";

import Card from "./Card";

const TacoCard = (props) => {
  const { name } = props;
  const { image } = props;

  return (
    <Card>
      <img className="h-full object-contain" src={image} alt="Delicious taco" />

      <a href="/" className="mt-3 text-lg text-black underline">
        {name}
      </a>
    </Card>
  );
};

TacoCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TacoCard;
