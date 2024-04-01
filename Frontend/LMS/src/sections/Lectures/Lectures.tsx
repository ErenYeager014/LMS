import React from 'react'
import { Accordion } from "../../../@/components/ui/accordion"
import AccordItem, { accprops } from '../../components/Lecture-Item/AccordItem';
interface props {
    data: accprops[]
}
const Lectures: React.FC<props> = ({ data }) => {
    return (
        <Accordion type='multiple' className="w-full md:max-w-[60%] shadow-sm shadow-gray-400 p-4 rounded-sm border-2 border-gray-100">
            {
                data.map((item, index) => (
                    <AccordItem key={index} title={item.title} description={item.description} />
                ))
            }
        </Accordion>
    )
}

export default Lectures