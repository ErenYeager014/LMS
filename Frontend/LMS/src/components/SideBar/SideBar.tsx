import { useSelector } from "react-redux";
import { menu_items, routes } from "../../utils/Menu_item";
import { initialstate } from "../../Global/Slice";
import NavLink from "./NavLink";

const SideBar = () => {
  const { role } = useSelector((state: initialstate) => state);
  const route = role === "admin" ? routes.admin : routes.user;

  return (
    <>
      <div className="text-3xl font-bold text-center my-2">
        <img
          src="/src/assets/evoke.jpeg"
          alt="*logo"
          className="w-full h-16 object-cover"
        />
      </div>
      <div className="my-6">
        {route.map((item) => (
          <NavLink key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default SideBar;
