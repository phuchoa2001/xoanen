import Quayvideoonline from "../compontens/quayvideoonline";
export const routerQuayvideoOnline = [
  {
    path: "/quayvideoonline",
    exact: true,
    mani: ({ match }) => <Quayvideoonline match={match} />,
  },
];
