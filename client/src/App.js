import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { chek } from './http/userAPI';
import { Spinner } from 'react-bootstrap';

const App =observer(() => {
    const {user} = useContext(Context)
    const [lodiang , setLogiang] = useState(true)

    useEffect(() => {
        chek().then(data =>{
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLogiang(false))
    })

    if (lodiang){
        return <Spinner animation='grow'/>
    }
    return(
        <BrowserRouter>
        <NavBar />
        <AppRouter />
        </BrowserRouter>
        
    );
});

export default App;