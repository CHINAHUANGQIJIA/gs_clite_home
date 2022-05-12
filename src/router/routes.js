import Home from "@/views/Home";
import Search from "@/views/Search";
import Login from "@/views/Login";
import Register from "@/views/Register";
export default [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
    meta: {
      isHideFooter: true,
    },
  },
  {
    path: "/register",
    component: Register,
  },
  {
    name: "search",
    path: "/search/:keyword",
    component: Search,
    // props: true, // 只映射params参数
  },
  {
    path: "/",
    redirect: "/home",
  },
];
