import { PATH_BLOG } from "./contact";
import ADD from "../page/blog/add";
import Warehouse from "../page/blog/warehouse";
export const router_blog = [
  {
    path: `${PATH_BLOG}/add`,
    exact: true,
    mani: () => <ADD />,
  },
  {
    path: `${PATH_BLOG}/edit`,
    exact: true,
    mani: () => <ADD />,
  },
  {
    path: `${PATH_BLOG}/warehouse`,
    exact: true,
    mani: () => <Warehouse />,
  },
];
