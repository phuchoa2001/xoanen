import Link404 from '../compontens/common/link404';
export const routerLink404 = [
    {
        path: "",
        exact: true,
        mani: ({ match }) => <Link404 match={match} />,
      },
];
