
import Dashbroad from "../compontens/dashbroad";
export const routerDashbroad = [
    {
        path: "/dashbroad/:id",
        exact: true,
        mani: ({ match }) => <Dashbroad match={match} />,
      },
      {
        path: "/dashbroad/:id/:path",
        exact: true,
        mani: ({ match }) => <Dashbroad match={match} />,
      },
];
