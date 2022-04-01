import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (
        <BrowserRouter>

            <NavBar/>

            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="about" element={<AboutScreen/>}/>
                <Route path="login" element={<LoginScreen/>}/>
                <Route path="*" element={<HomeScreen/>}/>
            </Routes>
        </BrowserRouter>
  )
}
