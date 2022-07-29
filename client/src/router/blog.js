import Blog from "../compontens/blog";
import ViewPost from "../compontens/blog/view";
import Post from "../compontens/blog/post";
import Search from "../compontens/blog/search";
export const routerBlog = [
  {
    path: "/blog/page/:page",
    exact: false,
    mani: () => <Blog />,
  },
  {
    path: "/blog/post/viewpost",
    exact: true,
    mani: () => <ViewPost />,
  },
  {
    path: "/blog/search",
    exact: false,
    mani: () => <Search />,
  },
  {
    path: "/blog/post/:id",
    exact: false,
    mani: () => <Post />,
  },
];
