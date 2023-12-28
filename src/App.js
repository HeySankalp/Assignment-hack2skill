import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Landing from './pages/home/landing';
import Login from './pages/login/login';
import PageNotFound from './pages/404/pagenotfound';
import { useEffect, useLayoutEffect, useState } from 'react';
import Cookies from 'js-cookie';
import authReducer from './redux/reducers/auth.reducer';
import userReducer from './redux/reducers/user.reducer';
import Data from './Data/User';
import { useDispatch } from 'react-redux';

function App() {

  const setUser = userReducer.actions.setUser;
  const login = authReducer.actions.login;
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    if (Cookies.get("tokenId")) {
      setLoading(true);
      const tk = Cookies.get('tokenId').split("_")[1];
      dispatch(setUser(Data.users.filter((user) => user.id == tk)[0]));
      dispatch(login());
      setLoading(false);
    }
  }, [])

  
  if (loading)
    return <div>
      Loading..
    </div>

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/landing' element={<Landing />} />
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
  );
}

export default App;
