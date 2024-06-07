import * as React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TabsBody from "./TabsBody";
import WeekDialog from "./Dialog";
import { useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function WeekTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const meals = useSelector((state) => {
    return state.meal;
  });

  //   console.log(meals)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ padding: "20px 0px", background: "transparent" }}>
      <Box
        sx={{
          width: "100%",
          margin: "0px auto",
        }}
      >
        <Typography sx={{maxWidth:'1100px',margin:'0px auto',padding:'20px',fontSize:'20px',fontWeight:'800'}}>
            Week Orders
        </Typography>
        <Box
          sx={{
            width: "100%",
            background: "white",
            position: "sticky",
            top: "0px",
            zIndex: 9999,
          }}
        >
          <AppBar
            position="sticky"
            sx={{
              backgroundColor: "white",
              color: "black",
              boxShadow: "none",
              padding: "20px 0px",
              maxWidth: "1100px",
              margin: "0px auto",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="All Meals" {...a11yProps(0)} />
              <Tab label="Week 1" {...a11yProps(1)} />
              <Tab label="Week 2" {...a11yProps(2)} />
              <Tab label="Week 3" {...a11yProps(3)} />
              <Tab label="Week 4" {...a11yProps(3)} />
              <WeekDialog />
            </Tabs>
          </AppBar>
        </Box>
        <Box sx={{ maxWidth: "1100px", margin: "0px auto" }}>
            <TabPanel value={value} index={0} dir={theme.direction}>
              <TabsBody data={meals.allMeals} tab="AllMeal" isWeek={false} />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <TabsBody data={meals?.week1} tab="week1" isWeek={true} />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <TabsBody data={meals?.week2} tab="week2" isWeek={true} />
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              <TabsBody data={meals?.week3} tab="week3" isWeek={true} />
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
              <TabsBody data={meals?.week4} tab="week4" isWeek={true} />
            </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
