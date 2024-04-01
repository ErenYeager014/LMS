import {
  Book,
  GraduationCapIcon,
  Home,
  PersonStandingIcon,
  User2Icon,
} from "lucide-react";

export const menu_items = [
  {
    id: 1,
    name: "Home",
    route: "/Home",
    icon: Home,
  },
  {
    id: 2,
    name: "user",
    route: "/user",
    icon: PersonStandingIcon,
  },
  {
    id: 3,
    name: "Course",
    route: "/course",
    icon: Book,
  },
  {
    id: 4,
    name: "Students",
    route: "/students",
    icon: GraduationCapIcon,
  },
];

export const routes = {
  user: [
    {
      id: 1,
      name: "Home",
      route: "/",
      icon: Home,
    },
    {
      id: 2,
      name: "Profile",
      route: "/profile",
      icon: User2Icon,
    },
    {
      id: 3,
      name: "Course",
      route: "/mycourse",
      icon: Book,
    },
  ],
  admin: [
    {
      id: 1,
      name: "Home",
      route: "/",
      icon: Home,
    },
    {
      id: 2,
      name: "Profile",
      route: "/profile",
      icon: User2Icon,
    },
    {
      id: 3,
      name: "Course",
      route: "/course",
      icon: Book,
    },
    {
      id: 4,
      name: "user",
      route: "/user",
      icon: GraduationCapIcon,
    },
  ],
};
