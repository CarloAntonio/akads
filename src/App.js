
// libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

// custom components
import AppBar from './containers/AppBar';
import Landing from './containers/Landing';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Profile from './containers/Profile';
import HomeRoom from './containers/HomeRoom';
import GradeRoom from './containers/GradeRoom';
import SubjectRoom from './containers/SubjectRoom';
import Lesson from './containers/Lesson';

// utils
import { envEndpoint } from './utils/firebase-service';
import { setUser } from './store/actions/index';

export default function App() {
  
  // react state
  // const [user, setUser] = React.useState(null);

  // redux state and dispatch
  const auth = useSelector(state => state.firebase.auth);
  const user = useSelector(state => state.user.self);
  const dispatch = useDispatch();

  // effect only activates if [auth.uid] changes
  useEffect(() => {
      async function fetchData(){
        try{
            const response = await fetch(`${envEndpoint}user/getUser`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    uid: auth.uid,
                }),
            });

            // handle when request completed successfully
            if(response.ok && response.status === 200) { 
                // pull user data
                const result = await response.json();
                dispatch(setUser(result));
            }
        } catch(err){
            console.log(err);
        }
      }
      fetchData();
  }, [auth.uid]);

  // return componentless 
  // TODO: turn into a loading page
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
            <Route path='/profile' exact component={ Profile }/>
            <Route path='/homeroom' exact component={ HomeRoom }/>
            <Route path='/homeroom/:grade' exact component={ GradeRoom }/>
            <Route path='/homeroom/:grade/:subject' exact component={ SubjectRoom }/>
            <Route path='/homeroom/:grade/:subject/:lessonId' exact component={ Lesson }/>
            <Redirect to="/profile"/>
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
