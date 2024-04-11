import { useDispatch, useSelector } from "react-redux";
import { routes } from "../../utils/Menu_item";
import { initialstate } from "../../Global/Slice";
import NavLink from "./NavLink";
import { Button } from "../../../@/components/ui/button";
import { LogOut } from "lucide-react";
import { logout as Setlogout } from "../../Global/Slice";

const SideBar = () => {
  const { role } = useSelector((state: initialstate) => state);
  const route = role === "admin" ? routes.admin : routes.user;
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-3xl font-bold text-center my-2">
        <img
          src="/src/assets/evoke.jpeg"
          alt="*logo"
          className="w-full h-16 object-cover"
        />
      </div>
      <div className="my-6 flex flex-col h-full justify-between">
        <div>
          {route.map((item) => (
            <NavLink key={item.id} {...item} />
          ))}
        </div>

        <Button
          className="w-full justify-self-end"
          onClick={() => {
            dispatch(Setlogout());
            localStorage.removeItem("token");
          }}
        >
          Logout <LogOut className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </>
  );
};

export default SideBar;
