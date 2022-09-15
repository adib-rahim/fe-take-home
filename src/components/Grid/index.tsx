import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  GridItem,
  Stack,
  HStack,
  Image,
  Text,
  Flex,
  Box,
  Container,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spinner,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { blacken } from "@chakra-ui/theme-tools";

export const HyperGrid = () => {
  const [projectData, setProjectData] = useState([]);
  const [filter, setfilter] = useState("volume_1day");
  const [title, setTitle] = useState("Today");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const callHyperspaceApi = async () => {
      setloading(true);
      try {
        const { data } = await axios.post(
          "https://cors-anywhere.herokuapp.com/" +
            "https://beta.api.solanalysis.com/rest/get-project-stats",
          {
            order_by: {
              field_name: filter,
              sort_order: "DESC",
            },
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET, PUT, POST, DELETE, PATCH, OPTIONS",
              "Access-Control-Allow-Headers":
                "Origin, Content-Type, Authorization",
              "Content-Type": "application/json",
              Authorization:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJGRSBJbnRlcnZpZXciLCJuYW1lIjoiSHlwZXJzcGFjZSIsImlhdCI6MTUxNjIzOTAyMn0.HDfB97Y1pgQqQ6GshXsh5nz7fA1_ban9MTZDAbgobJk",
            },
          }
        );
        console.log(data, "data");
        setProjectData(data?.project_stats);
        setloading(false);
      } catch (error) {
        console.log(error, "errpt");
        setloading(false);
      }
    };
    callHyperspaceApi();
  }, [filter]);

  const changefilter = (val: string, title: string) => {
    setfilter(val);
    setTitle(title);
  };

  return (
    <>
      <Flex
        gap={3}
        w={"90%"}
        mx="auto"
        py={2}
        alignItems="center"
        px={2}
        fontFamily={"Inter"}
        mt= {10}
       
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          color="#4980F8"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: "rgb(73, 128, 248)" }}
        >
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
        <Text fontWeight={"600"} color="black.200" fontSize={"28px"} _dark={{color:'#f5f5f5'}}>
          Top Collections
        </Text>
        <Menu>
          <MenuButton>
            <HStack cursor={"pointer"}>
              <Text fontWeight={"800"} bgGradient="linear-gradient(145deg,#DC1FFF,#03E1FF,#00FFA3 )" bgClip='text' fontSize={"28px"}>
                {title}
              </Text>
              <ChevronDownIcon w={7} h={7} color="#03E1FF"  mt={2} />
            </HStack>
          </MenuButton>
          <MenuList bg="#fff" _dark={{bg:'#000'}} >
            <MenuItem onClick={() => changefilter("volume_1day", "Today")}>
              Today
            </MenuItem>
            <MenuItem
              onClick={() => changefilter("volume_7day", "Last 7 days")}
            >
              Last 7 days
            </MenuItem>
            <MenuItem onClick={() => changefilter("volume_1hr", "Last hour")}>
              Last hour
            </MenuItem>
            <MenuItem
              onClick={() =>
                changefilter("percentage_of_token_listed", "Percentage Listed")
              }
            >
              Percentage Listed
            </MenuItem>
            <MenuItem
              onClick={() =>
                changefilter("num_of_token_holders", "Amount of Holders")
              }
            >
              Amount of Holders
            </MenuItem>
            <MenuItem onClick={() => changefilter("market_cap", "Market Cap")}>
              Market Cap
            </MenuItem>
            <MenuItem
              onClick={() => changefilter("floor_price", "Floor Price")}
            >
              Floor Price
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      {loading ? (
        <Flex
          alignItems={"center"}
          justifyContent="center"
          w={"90%"}
          mx="auto"
          mt={2}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.500"
            color="#7AA2fa"
            size="xl"
            mx="auto"
          />
        </Flex>
      ) : (
        <Grid
          w={"90%"}
          bg={"#F8F8FC"}
          //   minHeight={"500px"}
          borderRadius={5}
          templateColumns={"repeat(3,1fr)"}
          mt={2}
          gap={4}
          mx="auto"
          fontFamily={"Inter"}
          _dark={{bg:'#090A10'}}
          
        >
          {projectData.length > 0 &&
            projectData.slice(0, 32).map((project: any, ind) => {
              return (
                <GridItem
                  key={ind}
                  w="100%"
                  h="80px"
                  //   bg="blue.500"
                  borderBottomWidth={0.6}
                  borderBottomColor={"rgba(255,255,255,0.18)"}
                  py={2.5}
                  px={1}
                >
                  <Flex
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    h={"100%"}
                  >
                    <Box py={1} px={2.5} h={"100%"}>
                      <HStack alignSelf={"center"} h={"100%"}>
                        <Text
                          fontWeight={"700"}
                          fontSize={17}
                          opacity={0.8}
                          color="#000"
                          _dark={{color:'#fff'}}
                        >
                          {ind + 1}
                        </Text>
                        <Box>
                          <HStack>
                            <Image
                              ml={1}
                              w={"50px"}
                              h={"50px"}
                              borderRadius="full"
                              src={project?.project?.img_url}
                            />
                            <Box>
                              <Text
                                fontWeight={"600"}
                                color="#000"
                                _dark={{color:'#fff'}}
                                fontSize={17}
                                lineHeight={1.1}
                                mt={2}
                              >
                                {project?.project?.display_name}
                              </Text>
                              <HStack>
                                <Text
                                  fontWeight={"700"}
                                  color="#000"
                                  _dark={{color:'#fff'}}
                                  fontSize={14}
                                  opacity={0.6}
                                >
                                  Floor
                                </Text>
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 16 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip0_1084_6329)">
                                    <path
                                      d="M2.48681 9.65948C2.5792 9.56708 2.70625 9.51318 2.84099 9.51318H15.0604C15.2837 9.51318 15.3954 9.78267 15.2375 9.94052L12.8237 12.3544C12.7313 12.4468 12.6042 12.5007 12.4695 12.5007H0.25004C0.0267485 12.5007 -0.0848973 12.2312 0.0729468 12.0733L2.48681 9.65948Z"
                                      fill="url(#paint0_linear_1084_6329)"
                                    ></path>
                                    <path
                                      d="M2.48681 0.646295C2.58305 0.553898 2.7101 0.5 2.84099 0.5H15.0604C15.2837 0.5 15.3954 0.76949 15.2375 0.927334L12.8237 3.34119C12.7313 3.43359 12.6042 3.48749 12.4695 3.48749H0.25004C0.0267485 3.48749 -0.0848973 3.218 0.0729468 3.06015L2.48681 0.646295Z"
                                      fill="url(#paint1_linear_1084_6329)"
                                    ></path>
                                    <path
                                      d="M12.8237 5.12286C12.7313 5.03046 12.6042 4.97656 12.4695 4.97656H0.25004C0.0267485 4.97656 -0.0848973 5.24605 0.0729468 5.4039L2.48681 7.81776C2.5792 7.91015 2.70625 7.96405 2.84099 7.96405H15.0604C15.2837 7.96405 15.3954 7.69456 15.2375 7.53672L12.8237 5.12286Z"
                                      fill="url(#paint2_linear_1084_6329)"
                                    ></path>
                                  </g>
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_1084_6329"
                                      x1="13.8931"
                                      y1="-0.9413"
                                      x2="5.43631"
                                      y2="15.2569"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopColor="#00FFA3"></stop>
                                      <stop
                                        offset="1"
                                        stopColor="#DC1FFF"
                                      ></stop>
                                    </linearGradient>
                                    <linearGradient
                                      id="paint1_linear_1084_6329"
                                      x1="10.1953"
                                      y1="-2.87253"
                                      x2="1.73851"
                                      y2="13.3257"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopColor="#00FFA3"></stop>
                                      <stop
                                        offset="1"
                                        stopColor="#DC1FFF"
                                      ></stop>
                                    </linearGradient>
                                    <linearGradient
                                      id="paint2_linear_1084_6329"
                                      x1="12.0325"
                                      y1="-1.91421"
                                      x2="3.57564"
                                      y2="14.284"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopColor="#00FFA3"></stop>
                                      <stop
                                        offset="1"
                                        stopColor="#DC1FFF"
                                      ></stop>
                                    </linearGradient>
                                    <clipPath id="clip0_1084_6329">
                                      <rect
                                        width="15.3109"
                                        height="12"
                                        fill="white"
                                        transform="translate(0 0.5)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                                <Text
                                  fontWeight={"700"}
                                  color="#000"
                                  _dark={{color:'#fff'}}
                                  fontSize={16}
                                >
                                  {project?.floor_price}
                                </Text>
                              </HStack>
                            </Box>
                          </HStack>
                        </Box>
                      </HStack>
                    </Box>
                    <Box pr={4}>
                      <Text
                        fontWeight={"600"}
                        color="#000"
                        _dark={{color:'#fff'}}
                        fontSize={16}
                        opacity={0.7}
                        lineHeight={1.5}
                        mb={1}
                      >
                        ${project?.volume_7day}
                      </Text>
                      <Text
                        fontWeight={"400"}
                        color="#fff"
                        fontSize={13}
                        opacity={0.4}
                        textAlign="center"
                      >
                        7D Volume
                      </Text>
                    </Box>
                  </Flex>
                </GridItem>
              );
            })}
        </Grid>
      )}
    </>
  );
};
