import React from 'react'
import classes from './DoctorRegister.module.css'
import DocImage from '../../assets/RightDoctorRegister.png'
import { NavLink } from 'react-router-dom'

const DoctorRegister = props => {
    return(
        <div className={classes.Container}>
            <div className={classes.Left}>
                <span className={classes.Heading}>REGISTER TO MEDEX DOCTOR NETWORK</span>
                <span className={classes.Main}>Get started in three easy steps</span>
                <div className={classes.ProceedSection}>
                    <input placeholder="Enter you phone number" />
                    <NavLink to='/doctorregisterform' className={classes.ProceedButton}>Proceed</NavLink>
                </div>
            </div>
            <div className={classes.Right}>
                <img src={DocImage} alt="Doctor" />
            </div>
        </div>
    )
}

export default DoctorRegister