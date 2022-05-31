/** @jsxImportSource theme-ui */

import {
  Box,
  Flex,
  Text,
  Label,
  Select,
  Input,
  Paragraph,
} from "@theme-ui/components";
import React, { useEffect, useState } from "react";
import VerticalBar from "./BarChart";

function BarChartWidget() {
  const [value, setValue] = useState("Select");
  const [label, setLabel] = useState([]);
  const [data, setData] = useState(null);
  const [sentLabelData, setSentLabelData] = useState([]);
  const [receivedLabelData, setReceivedLabelData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [isError, setIsError] = useState(false);
  const [modalValue, setModalValue] = useState();
  const [url, setUrl] = useState("");
  const [isLinkSuccessful, setIsLinkSuccessful] = useState(false);

  const getData = async () => {
    await fetch(`${modalValue}`)
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        // console.log("dataset", myJson.barChartData.dataset);
        setData(myJson.barChartData.dataset);
      });
  };
  const getLabelData = async (currentOption) => {
    for (let index = 0; index < data.length; index++) {
      const { id, option, horizontalAxis, sendData, receivedData } =
        data[index];
      // console.log("option", option);
      if (option === currentOption) {
        if (
          horizontalAxis.length !== sendData.length ||
          sendData.length !== receivedData.length ||
          horizontalAxis.length !== receivedData.length
        ) {
          setIsError(true);
          setError("Please check the data again");
        }
        setLabel(horizontalAxis);
        setSentLabelData(sendData);
        setReceivedLabelData(receivedData);
      }
    }
  };
  const handleModal = (event) => {
    setModalValue(event.target.value);
  };
  const handleSubmission = (e) => {
    e.preventDefault();
    setUrl(modalValue);
    // console.log("url ", url);
    // console.log("modalValue", modalValue);
    getData();
    setModalValue("");
    setIsLinkSuccessful(true);
  };
  const handleChange = (e) => {
    getLabelData(e.target.value);
    setValue(e.target.value);
  };
  return (
    <Box variant="boxes.chart" sx={{ width: ["100%", "80%", "70%", "100%"] }}>
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0.8rem",
        }}
      >
        <Text variant="heading">Users Activity</Text>
        {data && (
          <form>
            <Label>
              <Select
                value={value}
                onChange={handleChange}
                sx={{ width: ["80px", "120px"], fontSize: "0.6rem" }}
              >
                <option value="Select">Select</option>
                <option value="By Week">By Week</option>
                <option value="By Month">By Month</option>
                <option value="By Year">By Year</option>
              </Select>
            </Label>
          </form>
        )}
      </Flex>
      {isError ? (
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "center",
            color: "text",
            marginTop: "2rem",
          }}
        >
          {error}
        </Flex>
      ) : value === "Select" ? (
        <form
          onSubmit={handleSubmission}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.8rem",
            height: "100%",
          }}
        >
          <Input
            type="text"
            name="text"
            value={modalValue}
            placeholder="enter link of json api"
            onChange={handleModal}
            sx={{
              width: ["90%", "85%", "80%", "70%"],
              fontSize: "1rem",

              border: "1px solid #c5c8d4",
            }}
          />

          {data ? (
            <Paragraph sx={{ color: "green" }}>
              Link is successfully uploaded. You can view data by selecting
              proper option
            </Paragraph>
          ) : (
            <Paragraph sx={{ color: "red" }}>Please Enter valid link</Paragraph>
          )}
        </form>
      ) : (
        <VerticalBar
          className="barchart"
          label={label}
          sendData={sentLabelData}
          receivedData={receivedLabelData}
        />
      )}
    </Box>
  );
}

export default BarChartWidget;
// bar chart component
