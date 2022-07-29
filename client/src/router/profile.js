import Profile from '../compontens/Profile'
export const routerProfile = [
  {
    path: "/Profile",
    exact: true,
    mani: ({ match }) => <Profile match={match} />,
  },
];
