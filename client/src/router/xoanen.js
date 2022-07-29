import Xoanen from "../compontens/xoanen";
export const routerXoaNen = [
  {
    path: "/xoanen",
    exact: true,
    mani: ({ match }) => <Xoanen match={match} />,
  },
];
