import React from 'react'
import classes from './DoctorMenu.module.css'
import {NavLink} from 'react-router-dom'

const DoctorMenu = props => {
    return(
        <div className={classes.Container}>
            <NavLink to='/doctor/login' className={classes.Item} onClick={props.hideDoctorMenu}>Login</NavLink>
            <span className={classes.Line}></span>
            <NavLink to='/doctor/register' className={classes.Item} onClick={props.hideDoctorMenu}>Register</NavLink>
        </div>
    )
}

export default DoctorMenu