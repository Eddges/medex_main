import React from 'react'
import './App.css';
import Layout from './components/Layout/Layout';
import {Route, Switch} from 'react-router-dom'
import DoctorRegister from './components/DoctorRegister/DoctorRegister';

function App() {
  return (
    <div className="container">
      <Layout>
      <Switch>
        <Route path='/doctor/register' exact component={DoctorRegister} />
      </Switch>  
      </Layout>
    </div>
  );
}

export default App;
