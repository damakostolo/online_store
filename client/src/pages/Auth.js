import React, { useContext, useState } from "react";
import {Button, Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card"
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTER_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "..";


const Auth = observer(() =>{
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const clik = async () =>{
        try{
            let data;
            if (isLogin){
                data = await login(email, password)
            }else{
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        }catch(e){
            alert(e.response.data.message)
        }
    }

    return(
        
        <Container 
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}>
            <Card style={{width:'600px'}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регестрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className='mt-3'
                        placeholder="Введите ваш email...."
                        variant={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder="Введите ваш пароль...."
                        variant={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    
                    <div className="d-flex justify-content-between mt-2">
                        {isLogin ? 
                        <div>
                            Нет аккаута? <NavLink to={REGISTER_ROUTE}>Зарегестрироваться!</NavLink>
                        </div>
                        :
                        <div>
                            Есть аккаут? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                        </div>
                        }
                        {isLogin ?
                        <Button  
                        variant={"outline-success"} 
                        className="ms-5"
                        onClick={clik}

                        >

                            Войти
                            
                        </Button>
                        :
                        <Button  
                        variant={"outline-success"} 
                        className="ms-5"
                        onClick={clik}

                        >

                            Зарегестрироваться
                            
                        </Button>
                    }
                       
                    </div>
                </Form>
            </Card>
        </Container>

    );
});

export default Auth;