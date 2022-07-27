import React from "react";
import {
  Text,
  Flex,
  OrderedList,
  ListItem,
  UnorderedList,
  Link,
} from "@chakra-ui/react";
import { Layout } from "../components/Layout";

export const Faq = () => {
  return (
    <Layout title={null}>
      <Flex gap="20px" direction="column" pt="24px">
        <Text fontSize="xl" fontWeight="bold">
          Question 1
        </Text>
        <Text>Answer 1</Text>
        <Text fontSize="xl" fontWeight="bold">
          Question 2
        </Text>
        <Text>Answer 2</Text>
        <Text fontSize="xl" fontWeight="bold">
          Question 3
        </Text>
        <Text>Answer 3</Text>
        <Text fontSize="xl" fontWeight="bold">
          Question 4
        </Text>
        <Text>Answer 4</Text>
      </Flex>
    </Layout>
  );
};
