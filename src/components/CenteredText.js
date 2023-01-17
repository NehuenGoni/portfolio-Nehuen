import { Grid, Typography } from "@mui/material"
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor: theme.palette.secondary.main,
        padding: ' 4vw 12vw '
    }
  }))

export function CenteredText(){
    const classes = useStyles()

    return(
        <Grid   
            className={classes.container}
            container direction="column"
            justifyContent="space-arround" 
            alignItems="center"
            >
            <Grid item xs={3}>
                <Typography variant='body1' align='center' gutterBottom='true'>
                    Aca es donde tengo que poner un texto de presentacion 
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant='body1' align='center' gutterBottom='true'>
                    <b>Algo distinto. quizas puedo poner lo mas importante</b>
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant='body1' align='center' gutterBottom='true'>
                    Aca es donde tengo que poner un texto de presentacion 
                </Typography>
            </Grid>
        </Grid>
    )
}