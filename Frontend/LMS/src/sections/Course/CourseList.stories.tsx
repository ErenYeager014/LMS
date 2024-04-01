import type { StoryObj, Meta } from "@storybook/react";
import CourseList from "./CourseList";

const meta: Meta<typeof CourseList> = {
    title: "Base/course",
    component: CourseList,
    parameters: {
        controls: { expanded: true },
    },
}

export default meta;

export const story: StoryObj<typeof meta> = {
    name: "CourseList",
    args: {

    }
}