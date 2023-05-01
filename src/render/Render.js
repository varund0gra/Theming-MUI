import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Comp1, Comp2, Comp3  ,ImgMediaCard,SwipeableTextMobileStepper,Form,FeedbackForm} from "../components";
import { ThemeProvider } from "@emotion/react";
import ThemeContext from "../context";
import Themes from "../Themes";
import { Paper } from "@mui/material";
function Render() {
  const [theme, setTheme] = useState("default");
  useEffect(() => {
    const value = new URLSearchParams(window.location.search);
    const getvalue = value.get("theme");
    setTheme(getvalue || "default");
  }, []);
  const currentTheme = Themes(theme);
  console.log(currentTheme);
  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Paper
          style = {{
            height: "130vh",
            overflow:"auto",
            backgroundColor: currentTheme.background,
            color: currentTheme.color,
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Comp1 />} />
              <Route path="/signup" element={<Comp2 />} />
              <Route path="/login" element={<Comp3/>} />
              <Route path="/home" element={<SwipeableTextMobileStepper />} />
              <Route path="/details" element={<Form/>} />
              <Route path="/buy" element={<ImgMediaCard/>}/>
              <Route path="/feedback" element={<FeedbackForm/>}/>
            </Routes>
          </BrowserRouter>
        </Paper>
      </ThemeContext.Provider>
    </ThemeProvider>
    
  );
}

export default Render;
