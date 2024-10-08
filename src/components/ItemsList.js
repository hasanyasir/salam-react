import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.id}
          className="flex justify-between"
        >
          <div className="text-left p-2 m-2">
            <div className="font-bold my-2">{item.name}</div>
            <p className="text-sm">{item.description}</p>
          </div>
          <div className="m-2 ">
            <button
              className="absolute p-2 bg-black text-white rounded-md"
              onClick={() => {
                handleAddItem(item);
              }}
            >
              Add +
            </button>
            <img className="w-40" src={item?.images[0]?.image_url} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
