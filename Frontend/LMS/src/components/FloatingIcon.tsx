import { LucideIcon } from 'lucide-react'
import React from 'react'
type props = {
    Icon: LucideIcon
    handleModel: () => void;
}
const FloatingIcon: React.FC<props> = ({ Icon, handleModel }) => {
    return (
        <div className=' fixed top-[90%] left-[95%] bg-black w-[50px] cursor-pointer  h-[50px] p-3 rounded-[50%]' onClick={handleModel}>
            <Icon color='white' className='w-full text-2xl' />
        </div>
    )
}

export default FloatingIcon