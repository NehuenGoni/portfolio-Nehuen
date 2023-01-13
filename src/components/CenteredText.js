import { Grid, Typography } from "@mui/material"
import React from 'react';

export function CenteredText(){
    return(
        <Grid   
            padding='4vw 12vw' 
//          backgroundColor='#C0C0C0' 
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