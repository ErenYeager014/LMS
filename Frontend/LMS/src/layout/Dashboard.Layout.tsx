import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import SideBar from "../components/SideBar/SideBar"
const DashboardLayout = () => {
    return (
        <div className="min-h-screen flex gap-2">
            <div className="hidden sticky  md:flex flex-col min-w-[300px] h-screen shadow-sm shadow-gray-300 p-3 top-0 ">
                <SideBar />
            </div>
            <div className="w-full p-3 flex-1">
                <div className="w-full h-13 border-gray-200 border-2 rounded-md my-4">
                    <NavBar />
                </div>
                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout