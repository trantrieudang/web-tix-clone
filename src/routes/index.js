import HomePage from "./../containers/HomeTemplate/HomePage";
import AuthPage from "./../containers/AdminTemplate/AuthPage";

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
    component: AuthPage,
  },
];

export { routesHome, routesAdmin };
