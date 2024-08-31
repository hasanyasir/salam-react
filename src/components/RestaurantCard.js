const cardStyle = { marginTop: 5, marginBottom: 5 };

const RestaurantCard = (props) => {
  const { restData } = props;
  const { name, image, servesCuisine, address, telephone } = restData?.item;

  return (
    <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="rest-logo" alt="rest-log" src={image}></img>
      <h3 style={cardStyle}>{name}</h3>
      <h5 style={cardStyle}>{servesCuisine.join(", ")}</h5>
      <h5 style={cardStyle}>{address.streetAddress}</h5>
      <h5 style={cardStyle}>{"Ph: " + telephone}</h5>
    </div>
  );
};

export default RestaurantCard;
