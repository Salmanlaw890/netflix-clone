import React, { useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import ProfileScreen from './components/ProfileScreen';
import { Route, Routes } from "react-router-dom";
import LoginPage from './components/LoginPage';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './features/userSlice';



function App() {

  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //LogIn
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        //LogOut
        dispatch(logout());
      }
    })
    return unsubscribe;


  }, [dispatch])


  return (
    <>
      <div className="app">
        <Routes>
          {!user ?
            <Route path="/" element={<LoginPage />} />
            :
            <Route path="/" element={<HomePage />} />
          }
          <Route path='/profile' element={<ProfileScreen />} />
        </Routes>

      </div>
    </>
  );
}
export default App;
