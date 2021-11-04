import { Button, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import Toggle from "./components/Toggle";
import { keepTheme } from "./utils/utils";
import {GitHub} from '@material-ui/icons';

const useStyles = makeStyles({
  holder:{
    display:"grid",
    placeItems: "center",
    height:"54%"
  },

  button:{
    border: "3px solid var(--button-border)",
    padding: "1rem",
    borderRadius: "50px",
    background: "transparent",

    height: "90px",
    width: "340px",
    fontSize: "1.8rem",
    color: "inherit",
    fontWeight: 600
  },

  nav:{
    display:"flex",
    justifyContent: "space-between",
    alignItems: "center",
    width:"90%",
    margin:"auto",
  },

  logo:{
    color:"inherit",
    fontSize: "1.5rem",
    fontWeight: 600,
    padding: "20px"
  },

  navButtons:{
    display: "flex",
    alignItems: "center"
  },

  svgRing:{
    width: "44px",
    height: "44px",
    display:"grid",
    placeItems: "center",
    border: "2px solid",
    borderRadius: "50px",
    cursor: "pointer"
  }


})

function App() {

  const classes = useStyles()

  useEffect(() => {
    keepTheme()
  })

  return (
    <div className="app">
        <div className={classes.nav}>
          
          <p className={classes.logo}>Genera+3-Pa$$word</p>
          <div className={classes.navButtons}>
            <div
              className={classes.svgRing}
              onClick= {()=> window.open('https://github.com/arndom', '_blank').focus()}
            >
              <GitHub/>
            </div>
            <Toggle/>
          </div>
        
        </div>

        <div className={classes.holder}>
          <Button className ={classes.button}>
            Generate
          </Button>
        </div>
    </div>
  );
}

export default App;
