import React, { useContext } from "react";
import { Context } from "../index";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import Button from 'react-bootstrap/Button';
import { observer } from "mobx-react-lite";
import Container from 'react-bootstrap/Container';
import { useHistory } from "react-router-dom";


const NavBar = observer (() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () =>{
        user.setUser({})
        user.setIsAuth(false)
    }

    return(
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>

                <NavLink to={SHOP_ROUTE} style={{color:'white' }} class="text-decoration-none">JShop</NavLink>
                {user.isAuth ?
                <Nav className="ms-auto" style={{color:'white' }} >
                    
                    <Button 
                    variant={"outline-light"}  
                    onClick={() => history.push(ADMIN_ROUTE)}>
                        Адмін
                    </Button>

                    <Button
                    variant={"outline-light"} 
                    className="ms-2" 
                    onClick={() => logOut()}> 
                        Вийти
                    </Button>
                    
                </Nav>
                :
                <Nav className="ms-auto" style={{color:'white'}}>
                    <Button variant={"outline-light"} onClick={() =>history.push(LOGIN_ROUTE)} href="login">Авторизоваться</Button>
                </Nav>
            }
            </Container>
                
        </Navbar>
  );
});

export default NavBar;