import React, { useContext, useState, useRef } from "react";
import { Box, Button, FormLabel } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { WriteKeyContext } from "../store/WriteKeyContext";

export const SecretLogin = () => {
  const { writeKey, setWriteKey } = useContext(WriteKeyContext);
  const passwordRef: any = useRef();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const password = passwordRef.current.value;
    setWriteKey(password);
  };

  return (
    <Layout title="Login">
      <Box>
        <form onSubmit={handleSubmit}>
          <FormLabel>
            Password:
            <input type="text" name="password" ref={passwordRef} />
          </FormLabel>
          <Button type="submit">Authenticate</Button>
        </form>
        <Box>
          {writeKey ? (
            <Box>You provided a key</Box>
          ) : (
            <Box>You haven't provided a key</Box>
          )}
        </Box>
      </Box>
    </Layout>
  );
};
