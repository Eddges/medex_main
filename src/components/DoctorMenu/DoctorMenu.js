import React from 'react'
import classes from './DoctorMenu.module.css'
import {NavLink} from 'react-router-dom'

const DoctorMenu = props => {
    return(
        <div className={classes.Container}>
            <NavLink to='/doctorlogin' className={classes.Item}>Login</NavLink>
            <span className={classes.Line}></span>
            <NavLink to='/doctorregister' className={classes.Item}>Register</NavLink>
        </div>
    )
}

export default DoctorMenu