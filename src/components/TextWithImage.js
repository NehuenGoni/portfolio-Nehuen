import { Grid, Typography } from "@mui/material"
import React from 'react';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.secondary.light,
        padding: '4vw 12vw'
    }
}))


const Description = (props) => {
    return(
    <Grid item xs>
        <Typography variant='body1'>
            {props.description}
        </Typography>
    </Grid>
    )
}

const TextToTheRight = (props) => {
    const classes = useStyles()

    return(    
        <Grid     
            className={classes.container}
            container direction="row" 
            justifyContent="space-arround" 
            alignItems="center"
            >
            <Grid item xs={5}>
                <img src={props.content.img} alt="This is an test" width='100%'></img>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={6}>
                <Grid container direction='column' alignItems="center" spacing={3}>
                    <Grid>
                        <Typography variant='h4'align="center">
                            {props.content.title}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant='body1'>
                            {props.content.subtitle}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant='body1'>
                            {props.content.descriptions.map((description) => (
                                <Description description={description}/>
                            ))}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

const TextToTheLeft = (props) => {
    const classes = useStyles()

    return(    
        <Grid   
            className={classes.container} 
            container direction="row" 
            justifyContent="space-arround" 
            alignItems="center"
            >
            <Grid item xs={6}>
                <Grid container direction='column' alignItems="center" spacing={3}>
                    <Grid>
                        <Typography variant='h4'align="center">
                            {props.content.title}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant='body1'>
                            {props.content.subtitle}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant='body1'>
                            {props.content.descriptions.map((description) => (
                                <Description description={description}/>
                            ))}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
                <img src={props.content.img} alt="This is an test" width='100%'></img>
            </Grid>
        </Grid>
    )
}

export function TextWithImage(props){
    return props.textToTheRight ? <TextToTheRight content={props.content}/> :
     <TextToTheLeft content={props.content}/>

}