
// libraries
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

// custom components
import AppBar from './containers/AppBar';
import Landing from './containers/Landing';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import HomeRoom from './containers/HomeRoom';
import GradeRoom from './containers/GradeRoom';
import SubjectRoom from './containers/SubjectRoom';
import Lesson from './containers/Lesson';

export default function App() {
  
  const auth = useSelector(state => state.firebase.auth);
  if(!auth.isLoaded) return null;

  let routes = (
    <Switch>
        <Route path='/' exact component={ Landing }/>   
        <Route path='/login' exact component={ Login }/>
        <Route path='/signup' exact component={ SignUp }/>
        <Redirect to="/"/>
      </Switch>
  )

  if (auth.isLoaded && auth.uid) {
    routes = (
      <React.Fragment>
        <AppBar/>
        <Switch>
          <Route path='/homeroom' exact component={ HomeRoom }/>
          <Route path='/homeroom/:grade' exact component={ GradeRoom }/>
          <Route path='/homeroom/:grade/:subject' exact component={ SubjectRoom }/>
          <Route path='/homeroom/:grade/:subject/:lessonId' exact component={ Lesson }/>
          <Redirect to="/homeroom"/>
        </Switch>
      </React.Fragment>
    )
  }
    
  return (
    <div className="App">
      {routes}
    </div>
  );
}
