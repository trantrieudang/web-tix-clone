import HomePage from "../containers/HomeTemplate/HomePage";
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
];

export { routesHome, routesAdmin };
