/** @jsxImportSource theme-ui */

import { Close } from "@material-ui/icons";
import { Box, Button, Image } from "@theme-ui/components";
import React from "react";

function PromotionGraph() {
  return (
    <Box
      variant="boxes.chart"
      sx={{
        // width: "300px",
        width: ["100%", "350px", "300px"],
        gap: "0.5px",
        alignItems: "center",
      }}
    >
      <Close
        sx={{
          alignSelf: "flex-end",

          cursor: "pointer",
          opacity: "0.9",
          color: "#c5c8d4",
        }}
      />
      <Image
        src="https://image.shutterstock.com/image-vector/promotion-sign-realistic-paper-speech-260nw-1725681436.jpg"
        alt="promotion "
        sx={{ height: "60%", width: "60%", aspectRatio: "1" }}
      />
      <Button type="button" mt="1rem" sx={{ fontSize: "0.8rem" }}>
        Try PRO For Free
      </Button>
    </Box>
  );
}

export default PromotionGraph;
