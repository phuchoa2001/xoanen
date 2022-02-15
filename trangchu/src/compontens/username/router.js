import Registration  from './Registration/Registration' ;
import Login from './Login/login';
import Verifyemail from './Email/verifyemail';
import ComfirmEmail from './Email/confirmEmail'
const routerusername = [
{
  path : "/registration" ,
  exact: false , 
  mani: ({match , history}) =>  <Registration  match = {match} history={history} />
} ,
{
  path : "" ,
  exact: true , 
  mani: () =>  <Login />
} , 
{
  path : "/Verifyemail" ,
  exact: true , 
  mani: () =>  <Verifyemail />
} , 
{
  path : "/ConfirmEmail/:slot" ,
  exact: true , 
  mani: ({match}) =>  <ComfirmEmail match = {match} />
} ,
]
export default routerusername;