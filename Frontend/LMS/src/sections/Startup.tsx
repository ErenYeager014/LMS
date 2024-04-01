import Cards from '../components/Startup/Cards'
import { BookIcon, GraduationCapIcon, LucideGroup, User2Icon } from 'lucide-react'

const Startup = () => {
    return (
        <div className="flex flex-wrap gap-4 w-auto ">
            <Cards title="user" count={20} Icon={GraduationCapIcon} color='orange' />
            <Cards title="lectures" count={10} Icon={LucideGroup} color='purple' />
            <Cards title="Courses" count={10} Icon={BookIcon} color='red' />
            {/* <Cards title="user" count={30} Icon={User2Icon} color='green' /> */}
        </div>
    )
}

export default Startup