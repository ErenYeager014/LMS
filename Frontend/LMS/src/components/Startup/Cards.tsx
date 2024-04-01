import { LucideIcon } from "lucide-react";

type props = {
  title: string;
  count: number;
  Icon: LucideIcon;
  color: "purple" | "orange" | "green" | "red";
};
const Cards: React.FC<props> = ({ title, count, Icon, color }) => {
  const iconswrapper = `bg-${color}-200 w-[60px] h-[60px] p-3 rounded-[50%] `;
  const icon = `w-full h-full text-${color}-400`
  return (
    <div className="font-sans bg-white p-[28px] flex flex-row rounded-lg gap-8 max-w-[100%] flex-[300px] min-w-[300px] mx-auto items-center border-[1px] border-gray-100 shadow-lg shadow-gray-100">
      <div className={iconswrapper} >
        <Icon className={icon} />
      </div>
      <div className="">
        <h6 className="capitalize text-3xl font-semibold py-1">{count}</h6>
        <p className="text-2xl font-[600] text-gray-400">{title}</p>
      </div>
    </div>
  );
};

export default Cards;
