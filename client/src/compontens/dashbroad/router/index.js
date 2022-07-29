import { router_blog } from "./blog.js";
import { router_home } from "./home.js";
import { router_photoLibrary } from './PhotoLibrary.js';
export const router = [
  ...router_blog,
  ...router_home,
  ...router_photoLibrary
]