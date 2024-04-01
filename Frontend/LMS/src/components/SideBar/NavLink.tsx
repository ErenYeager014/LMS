import { LucideIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type links = {
  id: number;
  name: string;
  route: string;
  icon: LucideIcon;
};

const NavLink: React.FC<links> = (item) => {
  const { pathname } = useLocation();
  return (
    <Link to={"/dashboard" + item.route}>
      <div
        className={`${pathname === "/dashboard" + item.route && "bg-gray-100"} flex items-center gap-4 px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer mb-2`}
      >
        <item.icon className="text-md" />
        <p className="text-md font-semibold text-pretty">{item.name}</p>
      </div>
    </Link>
  );
};

export default NavLink;
