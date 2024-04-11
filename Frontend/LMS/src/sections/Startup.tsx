import Cards from "../components/Startup/Cards";
import {
  BookIcon,
  GraduationCapIcon,
  LucideGroup,
  User2Icon,
} from "lucide-react";

const Startup = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-wrap gap-4 w-auto ">
      <Cards
        title="user"
        count={data.users}
        Icon={GraduationCapIcon}
        color="orange"
      />
      <Cards
        title="lectures"
        count={data.course}
        Icon={LucideGroup}
        color="purple"
      />
      <Cards
        title="Courses"
        count={data.mycourse}
        Icon={BookIcon}
        color="red"
      />
      {/* <Cards title="user" count={30} Icon={User2Icon} color='green' /> */}
    </div>
  );
};

export default Startup;
