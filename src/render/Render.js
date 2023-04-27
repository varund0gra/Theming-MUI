import  { useEffect, useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import {Comp1,Comp2,Comp3} from '../components';
import { ThemeProvider } from '@emotion/react';
import ThemeContext from '../context';
import Themes from '../Themes';
import { Paper } from '@mui/material';

function Render() {
    const [theme,setTheme]= useState("default")
useEffect(()=>{
   const value =new URLSearchParams(window.location.search);
   const getvalue = value.get("theme")
   setTheme(getvalue || "default");
},[])
const currentTheme = Themes(theme)
console.log(currentTheme);
  return(
    <ThemeProvider theme = {currentTheme}>
      <ThemeContext.Provider value={{theme , setTheme}}>
      <Paper style={{height:'100vh' , backgroundColor:currentTheme.background , color:currentTheme.color}}>   
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Comp1 />}/>
        <Route path='/comp2'  element={<Comp2 />}/>
        <Route path='/comp3'  element={<Comp3 />}/>
    </Routes>
    </BrowserRouter>
    </Paper>
    </ThemeContext.Provider> 
    </ThemeProvider>
  
  
  )
}

export default Render