/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";
import { theme } from "./theme";
// import { Icon } from "@iconify/react";
import React, { useRef } from "react";
// import "./App.css";
import {
  Container,
  Flex,
  Box,
  Button,
  Image,
  Text,
  Grid,
} from "@theme-ui/components";
import BarChartWidget from "./components/BarChartWidget";
import CircularChart from "./components/CircularChart";
import Header from "./components/Header";
import LineChartWidget from "./components/LineChartWidget";
import PromotionGraph from "./components/PromotionGraph";
import Sidebar from "./components/Sidebar";
import Stats from "./components/Stats";
import {
  Bookmark,
  Close,
  GroupAdd,
  Menu,
  AccountBalanceWallet,
  Dashboard,
  Email,
  Equalizer,
  Home,
  People,
  Settings,
} from "@material-ui/icons";
import { MenuItem } from "@material-ui/core";

function App() {
  const sidebar = useRef();

  const sidebarOpenHandler = () => {
    sidebar.current.style.transform = "translateX(-100%)";
  };

  const sidebarCloseHandler = () => {
    sidebar.current.style.transform = "translateX(0)";
  };
  return (
    <ThemeProvider theme={theme}>
      <Flex sx={{ maxWidth: "100vw" }}>
        <Sidebar />
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: ["0", "0", "12vw", "14vw"],
            marginTop: ["1rem", "", "", "1rem"],

            width: "100%",
            padding: "15px",
          }}
        >
          {/* <Header /> */}

          <Flex
            mb="1rem"
            sx={{
              justifyContent: "space-between",
              // alignItems: "center",
              gap: "0.5rem",
              width: "100%",
            }}
          >
            <Flex sx={{ flexDirection: "column" }}>
              <Text
                variant="display"
                sx={{
                  color: "#2c3458",

                  fontWeight: "bold",
                }}
              >
                Sales
              </Text>
              <Text>Welcome to CRM dashboard</Text>
            </Flex>
            {/* <button type="button">
              <Add />
              <span>Add Widget</span>
            </button> */}
            <Box sx={{ display: ["block", "", "none"] }}>
              <Menu sx={{ color: "text" }} onClick={sidebarOpenHandler} />
            </Box>
          </Flex>
          <Grid
            gap="1.5rem"
            columns={[1, 1, 1, 1, 1, 2, "2fr 1fr"]}
            sx={{ width: "100%" }}
          >
            <Flex
              sx={{
                flexDirection: ["column"],
                gap: "1.5rem",

                // width: ["", "", "", "", "8"]
                width: ["100%", "", "", "", "", "60vw"],
              }}
            >
              <Flex
                sx={{
                  gap: "1.5rem",
                  flexWrap: ["wrap", "wrap", "wrap", "nowrap"],
                  flexDirection: ["column", "row"],
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CircularChart />
                <BarChartWidget />
              </Flex>
              <LineChartWidget />
            </Flex>
            <Flex
              sx={{
                flexDirection: [
                  "column",
                  "column",
                  "row",
                  "row",
                  "row",
                  "column",
                ],
                gap: "1.5rem",
                alignItems: ["center", "", "", "", "", "flex-start"],
                justifyContent: "center",
              }}
            >
              <Flex
                sx={{
                  flexDirection: "column",
                  gap: "1.5rem",
                  maxHeight: ["250px", "270px", "280px"],
                  width: ["100%", "", "50%", "50%"],
                  alignItems: [
                    "center",
                    "center",
                    "flex-start",
                    "flex-start",
                    null,
                  ],
                }}
              >
                <Stats
                  icon={<Bookmark />}
                  heading="$4,250"
                  subheading="Earned this month"
                />
                <Stats
                  icon={<GroupAdd />}
                  heading="298"
                  subheading="New Clients"
                />
              </Flex>
              <PromotionGraph />
            </Flex>
          </Grid>
        </Flex>
        {/* <Button className="chatIcon"><ChatBubbleOutline /></Button> */}
      </Flex>
      <Flex
        as="sidebar"
        ref={sidebar}
        sx={{
          flexDirection: "column",
          position: "fixed",
          top: "0",
          left: "100vw",
          width: "100vw",
          height: "100vh",
          padding: "2rem 3rem",
          bg: "white",
          transition: "transform 500ms",
          zIndex: "10",
          display: ["flex", "flex", "none", "none"],
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <Close
          onClick={sidebarCloseHandler}
          sx={{
            color: "text",
            marginLeft: "auto",
            alignSelf: "flex-end",
          }}
        />
        <Box>
          <Image
            src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
            alt="company logo transparent png"
            sx={{ width: "80px" }}
          />
        </Box>
        <Flex sx={{ flexDirection: "column", gap: "1.2rem" }}>
          <Flex
            sx={{
              gap: "0.8rem",
              "&:hover": {
                color: "primary",
              },
            }}
          >
            <Home />
            <Text>Home </Text>
          </Flex>
          <Flex
            sx={{
              gap: "0.8rem",
              "&:hover": {
                color: "primary",
              },
            }}
          >
            <Equalizer />
            <Text>Sales </Text>
          </Flex>
          <Flex
            sx={{
              gap: "0.8rem",
              "&:hover": {
                color: "primary",
              },
            }}
          >
            <People />
            <Text>People </Text>
          </Flex>
          <Flex
            sx={{
              gap: "0.8rem",
              "&:hover": {
                color: "primary",
              },
            }}
          >
            <Dashboard />
            <Text>Dashboard </Text>
          </Flex>
          <Flex
            sx={{
              gap: "0.8rem",
              "&:hover": {
                color: "primary",
              },
            }}
          >
            <Email />
            <Text>Email </Text>
          </Flex>
          <Flex
            sx={{
              gap: "0.8rem",
              "&:hover": {
                color: "primary",
              },
            }}
          >
            <AccountBalanceWallet />
            <Text>Balance </Text>
          </Flex>
          <Flex
            sx={{
              gap: "0.8rem",
              "&:hover": {
                color: "primary",
              },
            }}
          >
            <Settings />
            <Text>Setting </Text>
          </Flex>
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
