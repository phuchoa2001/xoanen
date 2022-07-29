// import Username from './compontens/username/index'
import { routerMessger } from "./messger";
import { routerBlog } from "./blog";
import { routerDashbroad } from "./dashbroad";
import { routerHome } from "./home";
import { routerAlarm } from "./alarm";
import { routerLogin } from "./login";
import { routerProfile } from "./profile";
import { routerLink404 } from "./404";
import { routerXoaNen } from "./xoanen";
import { routerKiemtraip } from "./kiemtraip";
import { routerQuayvideoOnline } from "./quayvideoonline";
import { routerAdmin } from "./admin";
import { routerCuticon } from './cuticon';
const router = [
  ...routerAdmin,
  ...routerCuticon,
  ...routerHome,
  ...routerXoaNen,
  ...routerKiemtraip,
  ...routerMessger,
  ...routerBlog,
  ...routerDashbroad,
  ...routerLogin,
  ...routerAlarm,
  ...routerProfile,
  ...routerLink404,
  ...routerQuayvideoOnline,
];
export default router;
