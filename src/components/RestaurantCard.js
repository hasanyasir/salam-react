const RestaurantCard = (props) => {
  const { restData } = props;
  const { name, image, servesCuisine, address, avgRating } = restData?.item;

  return (
    <div
      data-testid="rest-card"
      className="p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img className="rounded-lg" alt="rest-log" src={image}></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h5 className="py-2">{servesCuisine.join(", ")}</h5>
      <h5 className="py-2">{address.streetAddress}</h5>
      <h5 className="py-2 pr-2 text-right">{avgRating}</h5>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
