import React from 'react'
import classes from './Navbar.module.css'
import Logo from '../../assets/Logo.svg'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

class Navbar extends React.Component{

    render(){
        return(
            <div className={classes.Container}>

                <NavLink to='/' exact className={classes.Logo}>
                    <img src={Logo} alt="Logo" />
                </NavLink>
                
                <div className={classes.Menu} >

                    <NavLink to="/doctors" exact className={classes.MenuItem} activeClassName='ActiveMenuItem' >
                        <span className={classes.MenuText}>Doctors</span>
                        <span className={classes.ActiveMenuItem}></span>
                    </NavLink>

                    <NavLink to="/consult" exact className={classes.MenuItem} activeClassName='ActiveMenuItem' >
                        <span className={classes.MenuText}>Consult</span>
                        <span className={classes.ActiveMenuItem}></span>
                    </NavLink>

                    <NavLink to="/professional" exact className={classes.MenuItem} activeClassName='ActiveMenuItem' >
                        <span className={classes.MenuText}>For Doctors &nbsp; &#x25BC;</span>
                        <span className={classes.ActiveMenuItem}></span>
                    </NavLink>

                </div>

                <div className={classes.ButtonDiv}>
                    <NavLink to='/login' className={classes.LoginButton}>Login</NavLink>
                    <NavLink to='/signup' className={classes.SignUpButton}>Sign Up</NavLink>
                </div>

            </div>
        )
    }
}

export default Navbar