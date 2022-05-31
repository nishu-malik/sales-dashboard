import { MoreHoriz } from "@material-ui/icons";
import { Box, Flex, Text } from "@theme-ui/components";
import React from "react";

function Stats({ icon, heading, subheading }) {
  return (
    <Box
      variant="boxes.chart"
      sx={{
        flexDirection: "row",
        // width: "300px",
        width: ["100%", "350px", "300px"],
        height: ["115px", "", "118px"],
        alignItems: "center",
      }}
    >
      <Flex
        sx={{
          background: "rgba(0,196,250,0.1)",
          color: "#00c4fa",
          height: "45px",
          aspectRatio: "1",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          mr: "0.7rem",
        }}
      >
        {icon}
      </Flex>
      <Flex sx={{ flex: "1", flexDirection: "column", gap: "0.3rem" }}>
        <Text>{heading}</Text>
        <Text>{subheading}</Text>
      </Flex>
      <Box
        sx={{ alignSelf: "flex-start", color: "#c5c8d4", cursor: "pointer" }}
      >
        <MoreHoriz />
      </Box>
    </Box>
  );
}

export default Stats;
