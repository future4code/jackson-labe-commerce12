import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";

const AvaliaçãoStyled = styled.div`
    background-color: white;
    padding: 2px;
    margin-left: 7px;
    height: 24px;
    border-radius: 5px;
    margin-top:3px;
`
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
      
    },
  },
}));




export default function HalfRating() {
  const classes = useStyles();

  return (
    <AvaliaçãoStyled className={classes.root}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </AvaliaçãoStyled>
  );
}
