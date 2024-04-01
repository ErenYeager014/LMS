import { MenuIcon } from "lucide-react";

const NavBar = () => {
  return (
    <div className="flex  h-full justify-between items-center w-full shadow-lg shadow-gray-100 p-3">
      <div>DashBoard</div>
      {/* <div>

      </div> */}
      <div>
        <MenuIcon className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default NavBar;
