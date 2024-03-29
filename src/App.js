import { Autorenew, ContentCopy, GitHub } from "@mui/icons-material";
import { TextField, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Toggle from "./components/Toggle";
import { keepTheme, Password } from "./utils/utils";

const useStyles = makeStyles({
  holder:{
    display: "flex",
    flexDirection:"column-reverse",
    justifyContent: "center",
    alignItems: "center",
    height:"54%"
  },

  holderResp:{
    display: "flex",
    flexDirection:"column-reverse",
    justifyContent: "center",
    alignItems: "center",
    height:"49%"
  },

  button:{
    border: "3px solid var(--button-border) !important",
    padding: "1rem !important",
    borderRadius: "50px !important",
    background: "transparent !important",

    height: "50px !important",
    width: "160px !important",
    fontSize: ".9rem !important",
    color: "inherit !important",
    fontWeight: "600 !important"
  },

  nav:{
    display:"flex",
    justifyContent: "space-between",
    alignItems: "center",
    width:"90%",
    margin:"auto",
  },

  navResp:{
    display:"flex",
    flexDirection: "column",
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
    cursor: "pointer",

    "&:hover":{
      background: "var(--hover-button)"
    }
  },

  svgRingGenerate:{
    width: "44px",
    height: "44px",
    display:"grid",
    placeItems: "center",
    border: "2px solid",
    borderRadius: "50px",
    cursor: "pointer",

    "&:hover":{
      background: "var(--generate-button)"
    }
  },

  textField:{
    margin: "20px !important",

    "& .MuiOutlinedInput-input":{
      color: "var(--dark-text) !important",
      border: "2px solid var(--button-border) !important",
      borderRadius: "10px !important",
      textAlign: "center",
      fontWeight: "600 !important",
      background: "var(--text-field)"
    },

    "& .MuiOutlinedInput-notchedOutline":{
      border: "none"
    },  

    "& .Mui-disabled":{
      "-webkitTextFillColor": "var(--dark-text) !important"
    },
  },

  footerText:{
    bottom: 18,
    cursor: "pointer",
    fontSize: ".7rem",
    position: "absolute",
    textAlign: "center",
    width: "100%",
    textDecoration: "none",
    color: "inherit"
  },

})

function App() {

  const classes = useStyles()
  const resp = useMediaQuery('(min-width:600px)');

  const[password, setPassword] = useState(()=>Password.generate(16));

  useEffect(() => {
    keepTheme()
  })

  const generatePassword = () => setPassword(Password.generate(16))
  const openLink = () => window.open('https://github.com/arndom', '_blank').focus()
  const copyText =() => {
    navigator.clipboard.writeText(password)
    toast.success("Copied!")
  }

  return (
    <div className="app">
      
      <Toaster position="top-center" reverseOrder={true}/>

        <div className={resp ? classes.nav : classes.navResp}>
          <p className={classes.logo}>Genera+8-Pa$$word</p>
          <div className={classes.navButtons}>
            <div className={classes.svgRing} onClick= {openLink}>
              <GitHub/>
            </div>
            <Toggle/>
          </div>
        </div>

        <div className={resp ? classes.holder : classes.holderResp}>
          <div className ={classes.svgRingGenerate} onClick = {generatePassword}>
            <Autorenew/>
          </div>
          <div className={classes.navButtons}>
            <TextField disabled id="outlined-basic" variant="outlined" value= {password} className={classes.textField}/>  
            <div className = {classes.svgRing} onClick = {copyText}>
              <ContentCopy/>
            </div>
          </div>
        </div>

        <a 
        className={classes.footerText}
        href="https://it.uottawa.ca/security/identity-authentication-theft"
        rel="noreferrer"
        target="_blank"
        >Why have a unique password?</a>

    </div>
  );
}

export default App;
