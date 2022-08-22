import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Main } from "./Main";
import { Navigation } from "../components/Navigation";
import { UserContext } from "../UserContext";
import Cookies from "js-cookie";
import { Footer } from "../components/Footer";
import { WriteKeyContext } from "../store/WriteKeyContext";
const TAG = "Content.tsx ";

export const Content = () => {
  const [isAdmin, setisAdmin] = useState(false);
  const [writeKey, setWriteKey] = useState(null);
  console.log("writekey", writeKey);

  // const providerValue = useMemo(
  //   () => ({ isAdmin, setisAdmin }),
  //   [isAdmin, setisAdmin]
  // );
  const providerValue = {
    writeKey,
    setWriteKey,
  };
  const readCookie = () => {
    const user = Cookies.get("user");
    if (user) {
      setisAdmin(true);
    }
  };

  useEffect(() => {
    readCookie();
  }, []);

  return (
    <Router>
      <Box width="100%" height="100%">
        <WriteKeyContext.Provider value={providerValue}>
          <Flex
            direction="column"
            align="center"
            margin="0 auto"
            width="100%"
            height="100%"
            minHeight="100vh"
            justifyContent="flex-start"
          >
            <Box
              width="100%"
              bgColor="#235789"
              display="flex"
              justifyContent="center"
            >
              <Navigation />
            </Box>
            <Main />
            <Box
              width="100%"
              bgColor="#FE9000"
              display="flex"
              justifyContent="center"
            >
              <Footer />
            </Box>
          </Flex>
        </WriteKeyContext.Provider>
      </Box>
    </Router>
  );
};
