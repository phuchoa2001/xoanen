import Alarm from '../compontens/Alarm'
export const routerAlarm = [
    {
        path: "/alarm",
        exact: false,
        mani: ({ match }) => <Alarm match={match} />,
      },
];
