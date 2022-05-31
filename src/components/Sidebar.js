/** @jsxImportSource theme-ui */

import {
  AccountBalanceWallet,
  ArrowBackIos,
  ArrowForwardIos,
  Dashboard,
  Email,
  Equalizer,
  Home,
  People,
  Settings,
} from "@material-ui/icons";
import {
  Container,
  Flex,
  Box,
  NavLink,
  Button,
  Image,
  Text,
} from "@theme-ui/components";
import React, { useRef, useState } from "react";

function Sidebar() {
  const [sidebarFullMode, setsidebarFullMode] = useState(false);
  const sidebarReference = useRef(null);
  const handleOpen = () => {
    setsidebarFullMode(!sidebarFullMode);
  };
  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        width: sidebarFullMode ? ["", "", "30vw", "12vw", "13vw"] : "6vw",
        position: "fixed",
        zIndex: "10",
        background: "white",
        padding: "1.25rem 0",
        display: ["none", "none", "flex"],
      }}
    >
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
          {sidebarFullMode && <Text>Home </Text>}
        </Flex>
        <Flex
          sx={{
            gap: "0.8rem",
            "&:hover": {
              color: "primary",
            },
          }}
        >
          <Equalizer /> {sidebarFullMode && <Text>Sales </Text>}
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
          {sidebarFullMode && <Text>People </Text>}
        </Flex>
        <Flex
          sx={{
            gap: "0.8rem",
            "&:hover": {
              color: "primary",
            },
          }}
        >
          <Dashboard /> {sidebarFullMode && <Text>Dashboard </Text>}
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
          {sidebarFullMode && <Text>Email </Text>}
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
          {sidebarFullMode && <Text>Balance </Text>}
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
          {sidebarFullMode && <Text>Setting </Text>}
        </Flex>
      </Flex>
      <Button
        sx={{
          color: "#c5c8d4",
          cursor: "pointer",
          "&:hover": {
            color: "primary",
          },
          background: "transparent",
        }}
        onClick={handleOpen}
      >
        {sidebarFullMode ? <ArrowBackIos /> : <ArrowForwardIos />}
      </Button>
    </Flex>
  );
}

export default Sidebar;
