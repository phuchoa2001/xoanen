import Changethepassword from "./diglog/changethepassword";
import Updateavatar from './diglog/updateavatar';
import Updatebeerphoto from "./diglog/updatebeerphoto";
import Etiondescription from "./diglog/etiondescription" ;
import Post from './diglog/post'
const router = [
    {
      path : "/profile/changethepassword" ,
      exact: true, 
      mani: ({match}) => <Changethepassword  />
    },
    {
      path : "/profile/updateavatar" ,
      exact: true, 
      mani: ({match}) => <Updateavatar  />
    },
    {
      path : "/profile/updatebeerphoto" ,
      exact: true, 
      mani: ({match}) => <Updatebeerphoto  />
    },
    {
      path : "/profile/etiondescription" ,
      exact: true, 
      mani: ({match}) => <Etiondescription  />
    },
    {
      path : "/profile/post" ,
      exact: true, 
      mani: ({match}) => <Post  />
    },
]
export default router;