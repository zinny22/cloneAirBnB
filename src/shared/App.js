import React from 'react';
import {Route} from "react-router-dom"
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

import Detail from '../pages/Detail';
import Main from "../pages/Main";
import './App.css';
import {Grid} from "../elements";
import Write from '../pages/Write';
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

function App() {

  const dispatch =useDispatch()
  const is_login = localStorage.getItem("is_login")? true : false;
  const user = useSelector((state) => state.user);

  React.useEffect(()=>{
    if(is_login){
      dispatch(userActions.loginCheckDB());
    }
  },[])

  return (
    <React.Fragment>
      <Grid>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={Main}/>
          {/* <Route path="/login" exact component={Login}/> */}
          {/* <Route path="/signup" exact component={Signup}/> */}
          {/* <Route path="/write" exact component={PostWrite}/> */}
          <Route path="/detail/:home_id" exact component={Detail}/>
          <Route path="/write" exact component={Write}/> 
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;