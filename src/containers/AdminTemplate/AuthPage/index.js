import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import bgLogin from '../../../assets/images/backapp.jpg'


const useStyles = makeStyles(() => ({
  background_Auth:{
    backgroundImage: `url(${bgLogin})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
  },
}));

export default function AuthPage() {
  const classes = useStyles();
  return (
    <div className={classes.background_Auth}>
      
    </div>
  );
}
