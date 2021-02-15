import HomePage from "./../containers/HomeTemplate/HomePage";
import Login from "./../containers/AdminTemplate/AuthPage/components/Login";

import DashboardPage from "../containers/AdminTemplate/DashboardPage";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    exact: false,
    path: "/auth",
    component: Login,
  },
];

export { routesHome, routesAdmin };
