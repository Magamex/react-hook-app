import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

export const AppRouter = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="about" element={<AboutScreen/>}/>
                <Route path="login" element={<LoginScreen/>}/>
            </Routes>
        </BrowserRouter>
  )
}
