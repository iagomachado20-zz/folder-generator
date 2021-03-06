import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import useAuth, { ProvideAuth } from "../hooks/auth";

// Pages
import { DetailProductPage, FolderCreatorPage, ListProductsPage, LoginPage } from '../screens';


export const MAP_ROUTES = [
    {
      key: '/criar-folder',
      component: <FolderCreatorPage/>,
      label: 'Criar Folder',
      visibleMenu: true,
      isPrivate: true
    },
    {
        key: '/login',
        component: <LoginPage/>,
        label: 'Login',
        isPrivate: false,
        visibleMenu: false,
      },
    {
        key: '/produtos',
        component: <ListProductsPage/>,
        label: 'Produtos',
        isPrivate: true,
        visibleMenu: true,
    },
    {
        key: '/edit/:id',
        component: <DetailProductPage/>,
        label: 'Detalhe Produto',
        isPrivate: true,
        visibleMenu: false
    },
    {
        key: '/new',
        component: <DetailProductPage/>,
        label: 'Detalhe Produto',
        isPrivate: true,
        visibleMenu: false
    }
];

function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}

function Routes() {

    return (
        <ProvideAuth>
            <Router>
                <Switch>
                    { MAP_ROUTES.map((route, index) =>  {

                        if (route.isPrivate) {
                            return (
                                <PrivateRoute exact path={route.key} key={index}>
                                    {route.component}
                                </PrivateRoute>  
                            )
                        }

                        return (
                            <Route exact path={route.key} key={index}>
                                {route.component}
                            </Route> 
                        )   
                           
                    })}      
                    <Redirect from="/" to="/login" />
                </Switch>
            </Router>
        </ProvideAuth>
    )

}

export default Routes;