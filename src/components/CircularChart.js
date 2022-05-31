/** @jsxImportSource theme-ui */

import { useEffect, useState } from "react";
import React from "react";
import ProgressBar from "./ProgressBar";
import {
  Box,
  Flex,
  Text,
  Label,
  Select,
  Paragraph,
  Input,
} from "@theme-ui/components";

function CircularChart() {
  const [progressSent, setProgressSent] = useState(0);
  const [progressReceived, setProgressReceived] = useState(0);
  const [value, setValue] = useState("Select");
  const [error, setError] = useState();
  const [isError, setIsError] = useState(false);
  const [modalValue, setModalValue] = useState();
  const [url, setUrl] = useState("");
  const [isLinkSuccessful, setIsLinkSuccessful] = useState(false);
  const [data, setData] = useState(null);
  const [maximumValue, setmaximumValue] = useState(0);
  const getData = async () => {
    await fetch(`${modalValue}`)
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        // console.log("dataset", myJson.emailsData.dataset);
        setData(myJson.emailsData.dataset);
      });
  };
  const getLabelData = async (currentOption) => {
    for (let index = 0; index < data.length; index++) {
      const { id, option, sendMails, receivedMails, maximumValue } =
        data[index];
      // console.log("option", option);
      if (option === currentOption) {
        setProgressSent(sendMails);
        setProgressReceived(receivedMails);
        setmaximumValue(maximumValue);
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
        <Text variant="heading">Emails Sent</Text>
        {data && (
          <form>
            <Label>
              <Select
                value={value}
                onChange={handleChange}
                defaultValue="By Week"
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
        <Flex
          sx={{
            alignItems: "center",
            height: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Box sx={{ background: "transparent" }}>
              <ProgressBar
                class="progress__sent"
                progress={progressSent}
                size={120}
                strokeWidth={8}
                circleOneStroke="#e5e6ef"
                circleTwoStroke="#563bff"
                maximumValue={maximumValue}
              />
            </Box>
            <Box
              sx={{
                width: "fit-content",
                position: "absolute",
                top: "-0.9rem",
                left: "0.9rem",
              }}
            >
              <ProgressBar
                class="progress__received"
                progress={progressReceived}
                size={90}
                strokeWidth={8}
                circleOneStroke="#e5e6ef"
                circleTwoStroke="#00c4fa"
                maximumValue={maximumValue}
              />
            </Box>
          </Box>
          <Flex sx={{ flexDirection: "column" }}>
            <Flex sx={{ alignItems: "center", mb: "5px" }}>
              <Box
                sx={{
                  height: "10px",
                  width: "10px",
                  marginRight: "0.4rem",
                  borderRadius: "50%",
                  alignSelf: "flex-start",
                  marginTop: "0.4rem",
                  background: "blue",
                }}
              ></Box>
              <Flex sx={{ flexDirection: "column", margin: "0 0" }}>
                <Text sx={{ opacity: "0.8" }}>Sent</Text>
                <Text>{progressSent}</Text>
              </Flex>
            </Flex>
            <Flex sx={{ alignItems: "center", mb: "5px" }}>
              <Box
                sx={{
                  height: "10px",
                  width: "10px",
                  marginRight: "0.4rem",
                  borderRadius: "50%",
                  alignSelf: "flex-start",
                  marginTop: "0.4rem",
                  background: "blue",
                }}
              ></Box>
              <Flex sx={{ flexDirection: "column", margin: "0.1rem 0" }}>
                <Text sx={{ opacity: "0.8" }}>Received</Text>
                <Text>{progressReceived}</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Box>
  );
}

export default CircularChart;
