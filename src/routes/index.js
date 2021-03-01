import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Menu } from "../components";

// Pages
import { DetailProductPage, FolderCreatorPage, ListProductsPage } from '../screens';


export const MAP_ROUTES = [
    {
      key: '/criar-folder',
      component: <FolderCreatorPage/>,
      label: 'Criar Folder',
      visibleMenu: true,
    },
    {
        key: '/produtos',
        component: <ListProductsPage/>,
        label: 'Produtos',
        visibleMenu: true,
    },
    {
        key: '/edit/:id',
        component: <DetailProductPage/>,
        label: 'Detalhe Produto',
        visibleMenu: false
    },
    {
        key: '/new',
        component: <DetailProductPage/>,
        label: 'Detalhe Produto',
        visibleMenu: false
    }
];

function Routes() {

    return (
        <Router>
            <Menu/>
            <Switch>
                { MAP_ROUTES.map((route, index) => 
                    <Route path={route.key} key={index}>
                        {route.component}
                    </Route>    
                )}
                <Redirect exact from="/" to="criar-folder" />
                <Redirect from="/autoencarte/encarte" to="/criar-folder" />      
            </Switch>
        </Router>
    )

}

export default Routes;