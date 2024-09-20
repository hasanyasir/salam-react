import ItemsList from "./ItemsList";

const MenuCategory = ({ data, showItem, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-100 p-2">
      <div
        className="flex justify-between border-gray-400 shadow-md"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data.name} ({data.products.length})
        </span>
        {showItem ? <span>⬆️</span> : <span>⬇️</span>}
      </div>
      {showItem && <ItemsList items={data.products} />}
    </div>
  );
};
export default MenuCategory;
