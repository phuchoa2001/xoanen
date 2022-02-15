
import Auth from "../compontens/admin/auth";
export const routerAdmin = [
    {
        path: "/admin/auth",
        exact: true,
        mani: ({ match }) => <Auth />,
      },
];
