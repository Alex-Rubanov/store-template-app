import React from 'react';
import { useContext } from 'react';
import { Context } from '..';
import {Nav, Navbar, Button, Container} from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';


const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();
    
    const logout = () => {
        user.setUser({});
        user.setIsAuth(false);
    }

    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Device World</NavLink>
                    {user.isAuth 
                        ?
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button 
                                variant={'outline-light'}
                                onClick={() => history.push(ADMIN_ROUTE)}
                            >
                                Admin panel
                            </Button>  
                            <Button 
                                variant={'outline-light'} 
                                className={'ml-2'}
                                onClick={() => logout()}
                            >
                                Log out
                            </Button>         
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: 'white'}}> 
                            <Button 
                                variant={'outline-light'}
                                onClick={() => history.push(LOGIN_ROUTE)}
                            >
                                Authorization
                            </Button>         
                        </Nav>
                    }
                </Container>
            </Navbar>

    )
});

export default NavBar;
