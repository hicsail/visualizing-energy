import React, { useEffect, useMemo, useState } from "react";
import { Box, Button, Flex, Link } from "@chakra-ui/react";
import { FooterItem } from "../types/types";
import { FOOTER_ITEMS } from "../data/footerList";
import { HashLink } from "react-router-hash-link";

export const Footer = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      //   display="row"
      justifyContent="left"
      width="80%"
    >
      {FOOTER_ITEMS.map((item: FooterItem) => (
        <Flex height="50px" alignItems="center" key={item.label}>
          <Button variant="disabled" bg="#FE9000">
            <Link to={item.href} as={HashLink}>
              {" "}
              {item.label}
            </Link>
          </Button>
        </Flex>
      ))}
    </Flex>
  );
};
