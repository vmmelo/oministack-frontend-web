import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/*passa o parametro exact para evitar que caia sempre nessa rota ja que todos vao comecar com /. Assim garantimos que so cai nela se for exatamente apenas a / */}
                <Route path={'/'} exact component={Logon}/>
                <Route path={'/register'} component={Register}/>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/incidents/new'} component={NewIncident}/>
            </Switch>
        </BrowserRouter>
    )
}