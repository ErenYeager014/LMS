import { AccordionItem, AccordionTrigger, AccordionContent } from "../../../@/components/ui/accordion";
export interface accprops {
    title: string;
    description: string;
    file?: any;
}
const AccordItem: React.FC<accprops> = ({ title, description }) => {
    return (
        <AccordionItem value={title}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>
                <div className="p-4">
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}

export default AccordItem