import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title:{
    flexGrow: 1
  }
}))

export function NavBar(){
  const classes = useStyles()

    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color='text' className={classes.title}>
                Nehuen Emiliano Goñi
              </Typography>
              <Button color="text">Acerca de mi</Button>
              <Button color="text">Estudios</Button>
              <Button color="text">Contacto</Button>
            </Toolbar>
          </AppBar>
        </div>
    )
}