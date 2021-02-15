import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";

import { routesHome, routesAdmin } from "./routes";
import Login from './containers/AdminTemplate/AuthPage/components/Login';
import Register from './containers/AdminTemplate/AuthPage/components/Register';
import HomeTemplate from "./containers/HomeTemplate";
import AdminTemplate from "./containers/AdminTemplate";


function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
         
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  const showLayoutAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <div>
        
        <Switch>
          

          {showLayoutHome(routesHome)}
          {showLayoutAdmin(routesAdmin)}

          <Route exact={false} path="/login" component={Login} />
          <Route exact={false} path="/register" component={Register} />
          {/* Trang K tim thay */}
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
