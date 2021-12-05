import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<Facebook />} className={classes.root} href = {"https://www.facebook.com/profile.php?id=100004625596864"} />
      <BottomNavigationAction icon={<GitHubIcon/>} className={classes.root} href = {"https://github.com/gospeller986"} />
      <BottomNavigationAction icon={<Instagram />} className={classes.root} href = {"https://www.instagram.com/_satyajit_pal_/"} />
    </BottomNavigation>
  );
};
export default Footer;
