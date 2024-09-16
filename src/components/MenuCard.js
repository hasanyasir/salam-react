import useMenuCard from "../utils/useMenuCard";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenuCard from "../utils/useMenuCard";

const MenuCard = () => {
  const { resId } = useParams();

  const menu = useMenuCard(resId);

  if (menu === null) return <Shimmer />;

  //console.log(menu.menus);
  const { name, menus } = menu;
  const itemCard = menus[0];
  const categories = itemCard?.menu_categories;

  return (
    <div className="menuCard pl-10">
      <h1 className="p-4 font-bold text-3xl">{name}</h1>

      {categories.map((c) => (
        <div key={c.id} className="category p-2">
          <h2 className="font-bold">{c.name}</h2>
          <ul className="pl-4">
            {c.products.map((p) => (
              <li key={p.id} className="p-1">
                {p.name} - {p.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuCard;
