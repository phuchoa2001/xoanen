import { PATH_HOME } from "./contact";
import Home from '../page/home';
export const router_home = [
  {
    path: `${PATH_HOME}`,
    exact: true,
    mani: () => <Home />,
  },
];
