import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Particles from "./Particles";
import cover1 from '../images/cover.png';
import cover2 from '../images/home page .png'
import cover3 from '../images/covid tracker.png'
import cover4 from '../images/todo.jpg'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#000000",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "My Canopy",
    description: `The Glassy Vault Dapp ideate upon the increasing use of fraudulent certificates
     due to conventional means of storing and verification of degreesThe smart contract build on the Ethereum network can surely be a effective way to 
    tackle the above problem and can easily be extended to store more such documents.`,
    image: cover1,
    link : "https://glassyvault.netlify.app/",
  },
  {
    name: "MEDIC O DISHA",
    description: `The MEDIC O DISHA brings together the patients , hospitals and ngos . 
    It provides the patients the live count of beds in the near by hospitals and also the 
    availability of oxygen . The ngos also can easily communicate with the patients and can 
    provide them with life saving drugs and oxygen cylinders ..`,
    image: cover2,
    link : "https://github.com/Medic-O-disha",
  },
  {
    name: "COVID TRACKER(REACT)",
    description: `COVID Tracker is a free and easy-to-use react app that uses 
    APIs to bring covid data and display in the front end , I used to project to 
    learn the basics of react and impelentation of APIs in react ,I also learnt routing and 
    material ui with react .Coronavirus disease (COVID-19) is an infectious disease caused by the virus.. 
    `,
    image: cover3,
    link : "https://glassyvault.netlify.app/",
  },
  {
    name: "TO-DO LIST",
    description: `ToDo List App is a kind of app that generally used to
     maintain our day-to-day tasks or list everything that we have to do, 
     with the most important tasks at the top of the list,
      and the least important tasks at the bottom.
     It is helpful in planning our daily schedules.`,
     link : "https://github.com/gospeller986/todo-app-",
    image: cover4,
  },

];

const Portfolio = () => {
  const classes = useStyles();
  return (

    <React.Fragment>
    <Particles />
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                
                <Button size="small" color="primary" href = {project.link} >
                  Live/GitHub link
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </React.Fragment>
  );
};

export default Portfolio;
