import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import OverViewPage from "../../components/overViewPage";
const Live = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", backgroundColor: "#1a1a1a" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0px 4px",
            backgroundColor: "white",
            borderRadius: "5px"
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Overview" value="1" />
            <Tab label="Event View" value="2" />
            <Tab label="Multi View" value="3" />
            <Tab label="Calendar" value="4" />
            <Tab label="Results" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1" className="!p-0">
          <OverViewPage />
        </TabPanel>
        <TabPanel value="2">Event View</TabPanel>
        <TabPanel value="3">Multi View</TabPanel>
        <TabPanel value="4">Calendar</TabPanel>
        <TabPanel value="5">Results</TabPanel>
      </TabContext>
    </Box>
  );
};

export default Live;
