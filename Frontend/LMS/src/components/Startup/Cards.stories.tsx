import type { StoryObj, Meta } from "@storybook/react";
import Cards from "./Cards";
import { MessageSquare } from "lucide-react";

const meta: Meta<typeof Cards> = {
    title: "Base/startup",
    id: "base-startup--template--card",
    component: Cards,
    parameters: {
        layout: "centered"
    },
}
export default meta;

export const Template: StoryObj<typeof meta> = {
    name: "startCards",

    args: {
        title: "Messages",
        count: 220,
        Icon: MessageSquare,
        color: "orange",
    }
}