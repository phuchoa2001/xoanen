import { ModuleBlog } from "./blog";
export const ModuleDashbroad = [
  {
    module: "Dashbroad",
    array: [],
    url: "/dashbroad/home",
    path: "home",
    activeOnlyWhenExact: true,
    list: false,
    icon: "fa-adjust",
  },
  {
    module: "Photo Library",
    array: [],
    url: "/dashbroad/photolibrary",
    path: "Photolibrary",
    activeOnlyWhenExact: true,
    list: false,
    icon: "fa-picture-o",
  },
  {
    module: "Blog",
    path: "blog",
    array: ModuleBlog,
    url: "/dashbroad/blog",
    activeOnlyWhenExact: true,
    list: true,
    icon: "fa-book",
  },
];
