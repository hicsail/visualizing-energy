import React from "react";
import {
  Text,
  Flex,
  OrderedList,
  ListItem,
  UnorderedList,
  Link,
  Button,
  Box,
} from "@chakra-ui/react";
import { Layout } from "../components/Layout";
const titleStyle = {
  //   justifyContent: "center",
  paddingTop: "2rem",
};
export const Contact = () => {
  return (
    <Layout title="Contact" style={titleStyle}>
      <Flex gap="20px" direction="column">
        <Text fontSize="2xl" fontWeight="900">
          Stay in touch
        </Text>
        <Box>
          <Button bg="blue.500" color="white">
            Get Email Updates
          </Button>
        </Box>
        <Text fontSize="2xl" fontWeight="900">
          To visit and for general inquiries
        </Text>
        <Text>Boston University Institute for Global Sustainability</Text>
        <Text>BU Fenway Campus</Text>
        <Text>180E Riverway, 2nd Floor</Text>
        <Text>Boston, MA 02215</Text>
        <Text>(617) 353-9169</Text>
        <Text>
          <Link color="blue.500">hcliffo@bu.edu</Link>
        </Text>
        <Text fontSize="2xl" fontWeight="900">
          Mailing address
        </Text>
        <Text>Institute for Global Sustainability – 180E</Text>
        <Text>150 Riverway – 180E</Text>
        <Text>Boston, MA 02215</Text>
      </Flex>
    </Layout>
  );
};
