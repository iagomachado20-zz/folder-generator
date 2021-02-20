import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import { FolderCreatorPage } from '../screens';

const MAP_ROUTES = [
    {
      key: '/criar-folder',
      component: <FolderCreatorPage/>
    },
    {
        key: '/',
        component: <FolderCreatorPage/>
    },
];

function Routes() {

    return (
        <Router>
            <Switch>
                { MAP_ROUTES.map((route, index) => 
                    <Route path={route.key} key={index}>
                        {route.component}
                    </Route>    
                )}     
            </Switch>
        </Router>
    )

}

export default Routes;