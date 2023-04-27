import { createTheme } from "@mui/material/styles";
function Themes(theme) {
  const current = {
    google: {
        palette: {
          primary: {
            main: "#4285F4",
          },
          secondary: {
            main: "#FFC107",
          }
        },
        
        typography:{
            fontFamily:"Roboto",
            fontSize:"12",
            h1:{
             letterSpacing:"2px"
            }
           },
      },
      facebook: {
        palette: {
          primary: {
            main: "#3b5998",
          },
          secondary: {
            main: "#1877f2",
          },
        },
        background: {
          default: "#F6F7F9"
        },
        typography:{
            fontFamily:"sans-serif",
            fontSize:"12",
            h1:{
             letterSpacing:"2px"
            }
           },
      },
      slack: {
        palette: {
          primary: {
            main: "#4a154b",
          },
          secondary: {
            main: "#36c5f0",
          },
        },
        background: {
          default: "#2D2F31"
        }
      },
      instagram: {
        transitions: {
            easing: {
              easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
              easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
              easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
              sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
            },
            duration: {
              shortest: 150,
              shorter: 200,
              short: 250,
              standard: 300,
              complex: 375,
              enteringScreen: 225,
              leavingScreen: 195,
            },
          },
          palette: {
            primary: {
              main: "#E1306C",
            },
            secondary: {
              main: "#8a3ab9",
            },
          },
          background: {
            default: "#fff",
          },
          breakpoints: {
            values: {
              xs: 0,
              sm: 600,
              md: 900,
              lg: 1200,
              xl: 1536,
            },
          },
        },
        whatsapp: {
          palette: {
            primary: {
              main: "#25D366",
            },
            secondary: {
              main: "#128C7E",
            },
          },
          background: {
            default: "#fff",
          },
          breakpoints: {
            values: {
              xs: 0,
              sm: 600,
              md: 900,
              lg: 1200,
              xl: 1536,
            },
          },
        },
      microsoft: {
        palette: {
          primary: {
            main: "#F25022",
          },
          secondary: {
            main: "#7FBA00",
          },
        },
        breakpoints: {
            values: {
              xs: 0,
              sm: 600,
              md: 900,
              lg: 1200,
              xl: 1536,
            },
          },
        background: {
          default: "#F8F8F8"
        }
      },
      light: {
        palette: {
          primary: {
            main: "#F25022",
          },
          secondary: {
            main: "#7FBA00",
          },
        },
        breakpoints: {
            values: {
              xs: 0,
              sm: 600,
              md: 900,
              lg: 1200,
              xl: 1536,
            },
          },
        background: "#fff",
        color:'#000'
      },
      dark: {
        palette: {
          primary: {
            main: "#F25022",
          },
          secondary: {
            main: "#7FBA00",
          },
        },
        breakpoints: {
            values: {
              xs: 0,
              sm: 600,
              md: 900,
              lg: 1200,
              xl: 1536,
            },
          },
        background: "#000",
        color:'#fff'
      },
      //Creating light theme

  };
  return createTheme(current[theme]);
}
export default Themes;