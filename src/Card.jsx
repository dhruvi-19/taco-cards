import PropTypes from "prop-types";
import AddToOrder from "./AddToOrder";

const Card = ({ children }) => {
  return (
    <div className="flex flex-col w-56 bg-white p-4 mx-2">
      {children}
      <AddToOrder />
    </div>
  );
};

Card.prototype = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: null,
};

export default Card;
