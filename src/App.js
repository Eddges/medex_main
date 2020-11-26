import React from 'react'
import './App.css';
import Layout from './components/Layout/Layout';
import {Route, Switch} from 'react-router-dom'
import DoctorRegister from './components/DoctorRegister/DoctorRegister';
// import DoctorRegisterDetails from './components/DoctorRegisterDetails/DoctorRegisterDetails';
import DoctorRegisterForm from './components/DoctorRegisterForm/DoctorRegisterForm';

function App() {
  return (
    <div className="container">
      <Layout>
      <Switch>
        <Route path='/doctor/register' exact component={DoctorRegister} />
        <Route path='/doctor/registerform' exact component={DoctorRegisterForm} />
      </Switch>  
      </Layout>
    </div>
  );
}

export default App;
