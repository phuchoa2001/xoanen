import Fixlogin from '../compontens/fixlogin/Introduce'
export const routerLogin = [
    {
        path: "/login",
        exact: false,
        mani: ({ match }) => <Fixlogin match={match} />,
      },
];
