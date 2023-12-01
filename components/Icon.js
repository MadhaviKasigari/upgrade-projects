// Icon Component
import React from "react";
// Load Images
import poultry from "./icons/poultry.png";
import vegetarian from "./icons/vegetarian.png";
import vegan from "./icons/vegan.png";
import meat from "./icons/meat.png";
import seafood from "./icons/seafood.png";
import PropTypes from "prop-types";

const icons = { poultry, meat, seafood, vegetarian, vegan };
const Icon = ({ type }) => {
  return (
    <>
      <div className="icon">
        <img src={icons[type.toLowerCase()]} alt={type} />
        <p>{type.toUpperCase()}</p>
      </div>
    </>
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Icon;
