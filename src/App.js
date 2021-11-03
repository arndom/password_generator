import { Button, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import Toggle from "./components/Toggle";
import { keepTheme } from "./utils/utils";

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
  }
})

function App() {

  const classes = useStyles()

  useEffect(() => {
    keepTheme()
  })

  return (
    <div className="app">
        <Toggle/>
        <div className={classes.holder}>
          <Button className ={classes.button}>
            Generate
          </Button>
        </div>
    </div>
  );
}

export default App;
