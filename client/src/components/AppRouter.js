import { useContext } from 'react';
import { authRoutes, publicRoutes } from "../routes";
import {Switch , Route } from 'react-router-dom'
import { Context } from '../index';


const AppRouter = () =>{
    const {user} = useContext(Context)

    console.log(user)
    return(
        <Switch>
            {user.isAuth  && authRoutes.map(({path , Component})=>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path , Component})=>
                <Route key={path} path={path} component={Component} exact/>
            )}
        </Switch>
    );
};

export default AppRouter; 