import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './DoctorRegisterForm.module.css'

class DoctorRegisterForm extends React.Component{
    state = {
        languages : [],
        inputLanguage : '',
        education : [],
        inputUniversity : '',
        inputDegree : '',
        inputStartDate : '',
        inputEndDate : ''
    }

    handleLanguageChange = e => {
        this.setState({
            ...this.state,
            inputLanguage : e.target.value
        })
    }

    addLanguage = () => {
        let tempA = this.state.languages
        tempA.push(this.state.inputLanguage)
        this.setState({
            ...this.state,
            languages : tempA,
            inputLanguage : ''
        }, () => {
            console.log(this.state.languages)
        })
    }

    changeUniversity = e => {
        this.setState({
            ...this.state,
            inputUniversity : e.target.value
        })
    }

    changeDegree = e => {
        this.setState({
            ...this.state,
            inputDegree : e.target.value
        })
    }

    changeStart = e => {
        this.setState({
            ...this.state,
            inputStartDate : e.target.value
        })
    }

    changeEnd = e => {
        this.setState({
            ...this.state,
            inputEndDate : e.target.value
        })
    }

    addEducation = () => {
        const temp = this.state.education
        temp.push({
            university : this.state.inputUniversity,
            degree : this.state.inputDegree,
            startDate : this.state.inputStartDate,
            endDate : this.state.inputEndDate
        })

        this.setState({
            ...this.state,
            inputUniversity : '',
            inputDegree : '',
            inputStartDate : '',
            inputEndDate : '',
            education : temp
        })
    }

    render() {
        return(
            <div className={classes.Container}>
                <div className={classes.Left}>
                    <div className={classes.Header}>
                        <NavLink to="/doctor/register"><i className="fas fa-chevron-left"></i></NavLink>
                        <span className={classes.Heading}>Profile Details</span>
                    </div>
                    <div className={classes.Input}>
                        <span className={classes.Label}>Full Name</span>
                        <input placeholder='Eg. John Doe' />
                    </div>
                    <div className={classes.Input}>
                        <span className={classes.Label}>Phone</span>
                        <input placeholder='Eg. +48 877 542 9898' />
                    </div>
                    <div className={`${classes.Input} ${classes.InputRow}`}>
                        <div className={classes.InputSmall}>
                            <span className={classes.Label}>Speciality</span>
                            <input placeholder='Eg. Dentistry' />
                        </div>
                        <div className={classes.InputSmall}>
                            <span className={classes.Label}>Registration Number</span>
                            <input placeholder='Eg. 45678' />
                        </div>
                    </div>
                    <div className={`${classes.Input} ${classes.InputRow}`}>
                        <div className={classes.InputSmall}>
                            <span className={classes.Label}>Experience</span>
                            <input type="number" placeholder='In years' />
                        </div>
                        <div className={classes.InputSmall}>
                            <span className={classes.Label}>Gender</span>
                            <select>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other   </option>
                            </select>
                        </div>
                    </div>
                </div>

                <span className={classes.VLine}></span>

                <div className={classes.Right}>
                    <div className={`${classes.Input} ${classes.Languages}`}>
                        <span className={classes.Label}>Languages</span>
                        <div className={classes.LanguageInput}>
                            <input placeholder='Eg. English' onChange={this.handleLanguageChange} value={this.state.inputLanguage} />
                            <i className="fas fa-plus" onClick={this.addLanguage} ></i>
                        </div>
                        <div className={classes.LanguageList}>
                            {
                                this.state.languages.length > 0 ? 
                                this.state.languages.map((iterator, index) => {
                                    return <span className={classes.Language} key={index} >{iterator}</span>
                                })
                                : null
                            }
                        </div>
                    </div>
                    <div className={classes.Input}>
                        <span className={classes.Label}>Current Job</span>
                        <input placeholder='Eg. Dentist' />
                    </div>
                    <div className={classes.Education}>
                        <span className={classes.Label}>Education</span>
                        <div className={classes.HRLine}></div>
                        <div className={classes.EducationList}>
                            {
                                this.state.education.length > 0 ? 
                                this.state.education.map((iterator, index) => {
                                    return(
                                        <div className={classes.DivEducation}>
                                            <span className={classes.University}>{iterator.university}</span>
                                            <span className={classes.Degree}>{iterator.degree}</span>
                                            <span className={classes.Dates}>{iterator.startDate} - {iterator.endDate}</span>
                                        </div>
                                    )
                                }) : null
                            }
                        </div>
                        <div className={classes.InputEducation}>
                            <input placeholder="Enter University/College" onChange={this.changeUniversity} value={this.state.inputUniversity} />
                            <input className={classes.InputEducationDegree} placeholder="Highest Degree" onChange={this.changeDegree} value={this.state.inputDegree} />
                            <div className={classes.EducationYear}>
                                <input className={classes.InputEducationSmall} placeholder="Start year" onChange={this.changeStart} value={this.state.inputStartDate} />
                                <input className={classes.InputEducationSmall} placeholder="End year" onChange={this.changeEnd} value={this.state.inputEndDate} />
                                <i className="fas fa-plus" onClick={this.addEducation} ></i>
                            </div>
                            
                        </div>
                    </div>

                    <NavLink to='/doctor/registrationdone' exact className={classes.SubmitButton} > 
                        Submit for verification
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default DoctorRegisterForm