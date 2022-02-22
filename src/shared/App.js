import React from 'react';
import {Route} from "react-router-dom"
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

import Detail from '../pages/Detail';
// import Signup from "../pages/Signup";
import Main from "../pages/Main";
import './App.css';
// import PostList from '../pages/PostList';
// import Login from '../pages/Login';
import {Grid} from "../elements";
// import Header from "../components/Header";
// import PostWrite from '../pages/PostWrite';
// import PostDetail from '../pages/PostDetail';
import Write from '../pages/Write';
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

function App() {

  const dispatch =useDispatch()
  const is_login = localStorage.getItem("is_login")? true : false;
  const user = useSelector((state) => state.user);
  console.log(user)

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