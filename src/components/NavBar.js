import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Switch } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title:{
    flexGrow: 1
  }
}))

export function NavBar({isDark, setIsDark}){

  const classes = useStyles()

    return (
        <div className={classes.root}>
          <AppBar position="static" >
            <Toolbar>
              <Typography variant="h6" color='text.primary' className={classes.title}>
                Nehuen Emiliano Goñi
              </Typography>
              <Button color='text'>Acerca de mi</Button>
              <Button color='text'>Estudios</Button>
              <Button color='text'>Contacto</Button>
                <LightModeIcon fontSize='small'/> 
                <Switch checked={isDark} onChange={e => setIsDark(!isDark)} color='primary'/> 
                <DarkModeIcon fontSize='small'/>
            </Toolbar>
          </AppBar>
        </div>
    )
}