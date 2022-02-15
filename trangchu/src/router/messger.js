import Redirection from "../compontens/Messger/Redirection";
import Messger from "../compontens/Messger";
export const routerMessger = [
  {
    path: "/Messger",
    exact: true,
    mani: () => <Redirection />,
  },
  {
    path: "/Messger/:id",
    exact: false,
    mani: ({ match }) => <Messger match={match} />,
  },
];
