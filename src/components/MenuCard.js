import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const MenuCard = () => {
  const [menu, setMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    console.log(json);
    setMenu(json?.data);
  };

  if (menu === null) return <Shimmer />;

  //console.log(menu.menus);
  const { name, menus } = menu;
  const itemCard = menus[0];
  const categories = itemCard.menu_categories;

  return (
    <div className="menuCard">
      <h1>{name}</h1>

      {categories.map((c) => (
        <div className="category">
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
