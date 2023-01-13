import './App.css';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import { CenteredText, TextWithImage } from './components';
import { NavBar } from './components/NavBar';
import React from 'react';


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

const theme = createTheme({
  palette: {
    primary: {
      main: '#3b3737',
    },
    secondary:{
      main: '#433a3a'
    },
    text:{
      main: '#FFFFFF'
    }
  },
});

function App(){
  return (
    <ThemeProvider theme={theme}>
        <NavBar />
        <CenteredText/>
        {
          myContent.map((item, index) => (<TextWithImage textToTheRight={index % 2 === 0} content={item}/>))
        }
    </ThemeProvider>
  )
}

export default App
