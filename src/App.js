import './App.css';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import { CenteredText, TextWithImage } from './components';
import { NavBar } from './components/NavBar';
import React, { useState } from 'react';


const myContent = [{
    title:'Desarrollador Fullstack',
    subtitle:'texto que puede ser contando lo que voy haciendo respecto al desarrollo, cursos, proyectos',
    descriptions:[
      'Parrafo 1',
      'Parrafo 2'
    ],
    finishingText: 'Formas de Contacto!',
    img:'https://www.clarin.com/img/2018/07/17/rJesaETQ7_1256x620__1.jpg'
  },
  {
    title:'SEGUNDO TITULO',
    subtitle:'1texto que puede ser contando lo que voy haciendo respecto al desarrollo, cursos, proyectos',
    descriptions:[
      'Parrafo 1.1',
      'Parrafo 2.1'
    ],
    finishingText: 'Formas de Contacto!',
    img:'https://www.infobae.com/new-resizer/fb1QJrGkyXqDdURm0GPGxr6SibE=/1200x900/filters:format(webp):quality(85)//arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/QBPJF3NAKVBRTJGZUR676GTAYA.jpg'
    }
]

function App(){
  const [isDark, setIsDark] = useState(true)

  const theme = createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
      //   ...(mode === 'light'
      //     ? {
      //         // palette values for light mode
      //         primary: '#b70b0b',
      //         // divider: amber[200],
      //         // text: {
      //         //   primary: grey[900],
      //         //   secondary: grey[800],
      //         // },
      //       }
      //     : {
      //         // palette values for dark mode
      //         primary: '#433a3a',
      //         // divider: deepOrange[700],
      //         // background: {
      //         //   default: deepOrange[900],
      //         //   paper: deepOrange[900],
      //         // },
      //         // text: {
      //         //   primary: '#fff',
      //         //   secondary: grey[500],
      //         // },
      //       }),
      // },
    //   primary: {
    //     main: '#b70b0b',
    //     light: '#ffffff',
    //     dark: '#433a3a'
    //   },
    //   secondary:{
    //     main: '#433a3a',
    //     light: '#5A4D4D'
    //   },
      text: {
        main: '#FFFFFF',
        light: '#000000',
        dark: '#FFFFFF'
      }
    },
    typography: {
      fontFamily: 'Barlow Condensed'
    }
  });
  
  return (
    <ThemeProvider theme={theme}>
        <NavBar isDark={isDark} setIsDark={setIsDark}/>
        <CenteredText/>
        {
          myContent.map((item, index) => (<TextWithImage textToTheRight={index % 2 === 0} content={item}/>))
        }
    </ThemeProvider>
  )
}

export default App
