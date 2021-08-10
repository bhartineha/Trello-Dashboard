import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2),
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color:'#fff',
    fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',
    flexGrow: 1,
  },
  btn: {
    color: '#fff',
    background: 'hsla(0,0%,100%,.24)',
  },
}));

export default function TopBar({ setOpen }) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Dashboard</h1>
    </div>
  );
}
