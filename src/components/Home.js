import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import homeStyle from "../assets/jss/components/homeStyle";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import TabPanel from "./TabPanel.js";
import AppBar from "@material-ui/core/AppBar";

import GitHub from "@material-ui/icons/GitHub";

import schelasVans from "../assets/img/schelasVans.png";

const useStyles = makeStyles(homeStyle);

export default function Home() {
  const classes = useStyles();

  const [tab, setTab] = React.useState(0);
  const handleTabs = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div className={classes.container}>
      <AppBar position="static" color="inherit">
        <Tabs
          className={classes.tabs}
          classes={{
            indicator: classes.tabIndicator,
          }}
          value={tab}
          onChange={handleTabs}
          indicatorColor="inherit"
          textColor="inherit"
          centered
        >
          <Tab label="About" />
          <Tab label="Vans" />
          <Tab label="More..." />
        </Tabs>
      </AppBar>

      <TabPanel value={tab} index={0} className={classes.project}>
        <div>
          <div className={classes.title}>
            <p>Schelas</p>
          </div>
          <div className={classes.content}>
            <p>
              Schelas is a group of developers that was born on the University
              where our friendship was built.
            </p>
            <p>
              The name came from a misinterpretation of a teacher's writing
              during a C# class.
            </p>
            <p>
              On the attempt of writing "Janelas" our instinct was to read
              "Schelas", and all thanks to a confused typography.
            </p>
            <p>
              We didn't knew back then, but was on this moment that we were born
              as Schelas group.
            </p>
            <p>
              On this moment on, all development made by the group, was behind
              the group's name.
            </p>
            <p>
              And together, we developed over 10 projects in more than 2,5
              years.
            </p>
            <p>
              Sadly, the group came apart by the end of the University's course,
              yet,
            </p>
            <p>in the group's name, I continued to develop over the years.</p>
            <p>And these projects are displayed here.</p>
            <p>Schelas and the friendship will be forever deep in my heart.</p>
            <p>Schelas everywhere!</p>
          </div>
        </div>
      </TabPanel>

      <TabPanel value={tab} index={1} className={classes.project}>
        <div>
          <p className={classes.title}>
            SchelasVans{"  "}
            {/* <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/WiltencirDG/SchelasVansAPP"
            >
              <GitHub />
            </a> */}
          </p>
          <div className={classes.content}>
            <p>Simply the best project of them all.</p>
            <p>
              Born on the need for control of transportation vans, SchelasVans
              came as a helper for these owners.
            </p>
            <p>
              This project was our Final Project on the University. The last
              built together as a team.
            </p>
          </div>
          <div className={classes.content}>
            <p className={classes.title}>Project</p>
            <img
              className={classes.banner}
              alt="SchelasVans banner"
              src={schelasVans}
            />
            <p>You can control everything on your business:</p>
            <p className={classes.subTitle}>Passengers</p>
            <p>
              Everyone that you transport is in here. Do not worry about writing
              on paper.
            </p>
            <p className={classes.subTitle}>Drivers</p>
            <p>Keep control of who drives your vans.</p>
            <p className={classes.subTitle}>Pickup and Dropout places</p>
            <p>Always know where to go.</p>
            <p className={classes.subTitle}>Routes</p>
            <p>And with our route generator, you can know how to go.</p>
            <p className={classes.subTitle}>Reports</p>
            <p>Know how is it all going.</p>
          </div>
          <div className={classes.content}>
            <p className={classes.title}>Technologies</p>
            <div className={classes.dev}>
              <p className={classes.devName}>
                Android
                <br />
                Google Maps API
                <br />
                MySQL
              </p>
            </div>
          </div>
          <p className={classes.title}>Developers</p>
          <div className={classes.crewContent}>
            <div className={classes.dev}>
              <p className={classes.devName}>
                Wiltencir Garcia
                <br />
                Bruno Teixeira dos Santos
                <br />
                André Bortollotti
                <br />
                Paulo Sérgio Andriguetto
              </p>
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel value={tab} index={2} className={classes.project}>
        <div>
          <p className={classes.title}>More details soon...</p>
        </div>
        <div className={classes.content}>
          <p className={classes.subTitle}>SchelasSpotify</p>
          <p>A helper service that generate and manage your Spotify Playlists based on various types of criteria</p>
          <p className={classes.subTitle}>SchelasEditor</p>
          <p>A robot that cuts your Youtube videos automatically and prepare to render with AfterEffects®</p>
          <p className={classes.subTitle}>SchelasWABot</p>
          <p>A WhatsApp bot developed to respond automatically your messages of customer service</p>
          <p className={classes.subTitle}>SchelasTrader</p>
          <p>A robot that trades stocks on Stock Exchanges or FOREX with MetaTrader4 and MetaTrader5</p>
          <p className={classes.subTitle}>SchelasCEI_Importer</p>
          <p>A service that handles integration with B3 [Brasil, Bolsa, Balcão] and returns your current stocks and positions</p>

        </div>
      </TabPanel>
    </div>
  );
}
