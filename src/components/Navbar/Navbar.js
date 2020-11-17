import React from 'react'
import classes from './Navbar.module.css'
import Logo from '../../assets/Logo.svg'
import {NavLink} from 'react-router-dom'

class Navbar extends React.Component{

    render(){
        return(
            <div className={classes.Container}>

                <div className={classes.Logo}>
                    <img src={Logo} alt="Logo" />
                </div>
                
                <NavLink to="/" exact className={classes.Menu}>
                    <div className={classes.MenuItem}>
                        <span className={classes.MenuText}>Doctors</span>
                        <span className={classes.ActiveMenuItem}></span>
                    </div>
                </NavLink>

                <div className={classes.ButtonDiv}>

                </div>

            </div>
        )
    }
}

export default Navbar