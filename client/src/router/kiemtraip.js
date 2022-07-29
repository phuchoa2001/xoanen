import KiemTraip from "../compontens/kiemtraip/index";
export const routerKiemtraip = [
  {
    path: "/kiemtraip",
    exact: false,
    mani: ({ match }) => <KiemTraip match={match} />,
  },
];
