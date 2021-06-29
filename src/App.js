import React, { useState } from "react";
import { CssBaseline, AppBar, Tabs, Tab, Box, makeStyles } from "@material-ui/core";
import StateExample from "./components/StateExample";
import HandleEvents from "./components/HandleEvents";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    'id': `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} >
          <Tab label="Задание №1" {...a11yProps(0) } />
          <Tab label="Задание №2" {...a11yProps(1) } />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <StateExample />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HandleEvents />
      </TabPanel>
    </div>
  );
}

export default App;
