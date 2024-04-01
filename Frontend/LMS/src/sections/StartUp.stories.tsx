import type { StoryObj, Meta } from "@storybook/react";
import Startup from "./Startup";

const meta: Meta<typeof Startup> = {
    title: "Base/startup",
    id: "base-startup--template",
    component: Startup,
    parameters: {
        layout: "centered",
    },
}
export default meta;

export const Template: StoryObj<typeof meta> = {
    name: "dashboardCard",
    args: {

    }
}