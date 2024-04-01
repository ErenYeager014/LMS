import type { StoryObj, Meta } from "@storybook/react";
import CourseCard from "./CourseCard";
import img from "../../assets/1710779545064_Web-Development-Course-Thumbnail.jpg";
const meta: Meta<typeof CourseCard> = {
  title: "Base/course",
  component: CourseCard,
  parameters: {
    layout: "centered",
  },
};
export default meta;

export const Template: StoryObj<typeof meta> = {
  name: "Card",
  args: {
    img,
    // img: "https://img.freepik.com/premium-photo/young-casual-it-manager-sitting-front-laptop-office-analyzing-coded-information_274679-9880.jpg?w=1380",
    title: "Web Development",
    count: 20,
    description:
      "Web development types have been classified into front-end development, back-end development, and full-stack development. For an excellently interactive website or web app for your business, you need to have expert developers who are specialists in their calling",
    author: "john Doe",
  },
};
