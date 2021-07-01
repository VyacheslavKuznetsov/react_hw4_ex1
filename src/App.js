import {
  AppBar,
  Box,
  CssBaseline,
  makeStyles,
  Paper,
  Tab,
  Tabs,
} from "@material-ui/core";
import React, { useState } from "react";
import HandleEvents from "./components/HandleEvents";
import StateExample from "./components/StateExample";
import StateExample3 from "./components/StateExample3";
import StateExample3Func from "./components/StateExample3Func";

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
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
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
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Задание №1" {...a11yProps(0)} />
          <Tab label="Задание №2" {...a11yProps(1)} />
          <Tab label="Задание №3" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <StateExample />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HandleEvents />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Paper elevation={5}>
          <StateExample3 />
        </Paper>
        <Paper elevation={5}>
          <StateExample3Func />
        </Paper>
      </TabPanel>
    </div>
  );
}

export default App;
