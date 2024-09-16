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
    <div className="menuCard">
      <h1>{name}</h1>

      {categories.map((c) => (
        <div key={c.id} className="category">
          <h2>{c.name}</h2>
          <ul>
            {c.products.map((p) => (
              <li key={p.id}>
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
