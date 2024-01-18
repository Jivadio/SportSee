import PropTypes from "prop-types";

const Card = ({ amount, unit, subtitle, className, icon }) => (
  <div className="card ">
    <div className={"card-icon " + className}>
      <img src={icon} alt="" className="card-img center" />
    </div>
    <div className="card-data">
      <p className="card-title">
        {amount} 
        {unit}
      </p>
      <p className="card-subtitle">{subtitle}</p>
    </div>
  </div>
);

Card.propTypes = {
  amount: PropTypes.number,
  unit: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
};

export default Card;
