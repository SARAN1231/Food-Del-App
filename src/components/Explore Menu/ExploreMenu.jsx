import "./Exploremenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ category, setcategory }) => {
  return (
    <div className="Exploremenu" id="exploremenu">
      <h1>Explore Our Menu</h1>
      <p className="exploremenu-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam
        laborum itaque omnis, exercitationem non earum vero tempora{" "}
      </p>
      <div className="exploremenu-list">
        {menu_list.map((item, index) => {
          return (
            // prev => prev === item.menu_name ? "All" : item.menu_name
            // This line of code means:
            // If the current category (prev = All) is the same as the clicked item’s name (item.menu_name), it sets the category to "All".
            // Otherwise, it sets the category to the name of the clicked item (item.menu_name).
            <div
              onClick={() =>
                setcategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              className="exploremenu-item"
              key={index}
            >
              <img
                className={category === item.menu_name ? "active" : " "}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
