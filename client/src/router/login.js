import Auth from '../compontens/login/auth/index'
export const routerLogin = [
    {
        path: "/login",
        exact: false,
        mani: ({ match }) => <Auth  />,
      },
];
