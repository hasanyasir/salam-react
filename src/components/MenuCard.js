import useMenuCard from "../utils/useMenuCard";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenuCard from "../utils/useMenuCard";
import MenuCategory from "./MenuCategory";
import { useState } from "react";

const MenuCard = () => {
  const { resId } = useParams();

  const menu = useMenuCard(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (menu === null) return <Shimmer />;

  //console.log(menu.menus);
  const { name, menus } = menu;
  const itemCard = menus[0];
  const categories = itemCard?.menu_categories;

  return (
    <div className="text-center">
      <h1 className="p-4 font-bold text-3xl">{name}</h1>

      {categories.map((c, index) => (
        <MenuCategory
          key={c.id}
          className="category p-2"
          data={c}
          showItem={index === showIndex ? true : false}
          setShowIndex={() =>
            index === showIndex ? setShowIndex(null) : setShowIndex(index)
          }
        />
      ))}
    </div>
  );
};

export default MenuCard;
