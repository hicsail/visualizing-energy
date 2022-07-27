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
  Img,
} from "@chakra-ui/react";
import { Layout } from "../components/Layout";
const titleStyle = {
  //   justifyContent: "center",
  paddingTop: "2rem",
};
export const Team = () => {
  return (
    <Layout title={null} style={titleStyle}>
      <Flex gap="20px" direction="column">
        <Flex direction="column">
          <Text>Heather Clifford</Text>
          <Flex>
            <Box width="250px">
              <Img src="/img/clifford.png" />
            </Box>
            <Flex direction="column">
              <Text>Data Scientist, IGS</Text>
              <Text>Education</Text>
              <Text>PhD, Climate Science, University of Maine</Text>
              <Text>MS, Paleoclimatology, University of Maine</Text>
              <Text>BS, Environmental Engineering, Clemson University</Text>
              <Text>Email</Text>
              <Text>hcliffo@bu.edu</Text>
              <Text>Phone</Text>
              <Text>617-358-2985</Text>
            </Flex>
          </Flex>
          <Text>
            Heather Clifford, Data Scientist with the Boston University
            Institute for Global Sustainability (IGS), has over six years of
            experience researching climate change and anthropogenic impacts on
            the environment. Her research has taken her on large-scale
            multidisciplinary expeditions to Greenland, the Peruvian Andes, and
            Mt. Everest. She has published over 16 peer-reviewed journal
            articles on paleoclimate, glacial archives, climate change,
            environmental chemistry, and pollution, with a focus on high
            mountain regions. Her work has been featured in news articles from
            The Washington Post, TIME, CNN, National Geographic, Science
            Magazine, and GQ. Clifford was previously a Graduate Research
            Assistant, based at the University of Maine, where she received her
            MS and PhD, and a Laboratory Technician at Clemson University (South
            Carolina). Her current research interests include using data science
            and multidisciplinary applications to create informational data
            visualizations to communicate modern issues regarding climate
            science, sustainability, health, and equity.
          </Text>
        </Flex>
        <Flex direction="column">
          <Text>Cutler Cleveland</Text>
          <Flex>
            <Box width="250px">
              <Img src="/img/cutler.png" />
            </Box>
            <Flex direction="column">
              <Text>
                Associate Director, IGS Professor, Department of Earth &
                Environment
              </Text>
              <Text>Education</Text>
              <Text>BS, Biology, Cornell University</Text>
              <Text>MS, Marine Science, Louisiana State University</Text>
              <Text>
                PhD, Geography, University of Illinois at Urbana-Champaign
              </Text>
              <Text>Email</Text>
              <Text>cutler@bu.edu</Text>
              <Text>Phone</Text>
              <Text>617-353-7552</Text>
            </Flex>
          </Flex>
          <Text>
            Cutler J. Cleveland, Associate Director with the Boston University
            Institute for Global Sustainability (IGS) and a Professor of
            Department of Earth and Environment, conducts research and teaching
            focused on the connection among energy, climate change, and
            sustainability. He recently served as the principal investigator for
            Carbon Free Boston, a technical assessment of strategies to assist
            the City of Boston in reaching carbon neutrality by 2050. He
            currently serves on the Advisory Board for Project Drawdown and is
            an Affiliated Researcher of the Center for Antiracist Research. Dr.
            Cleveland is author and editor of reference works on energy that
            include the Encyclopedia of Energy, winner of an American Library
            Association award; the Dictionary of Energy; and the Handbook of
            Energy. Dr. Cleveland is the recipient of the Adelman-Frankel Award
            from the United States Association of Energy Economics for “unique
            and innovative contributions to the field of energy economics.” He
            is co-author of Environmental Science, the Web’s first electronic
            textbook on the subject. Dr. Cleveland’s research on the valuation
            of ecosystem services, funded by the National Science Foundation, is
            highlighted in NSF’s Top Discoveries series. He has been a
            consultant to numerous private and public organizations, including
            the Asian Development Bank, the United Nations Commission on
            Sustainable Development, the Energy Information Administration, and
            the U.S. Environmental Protection Agency. Cleveland holds a BS in
            Biology from Cornell University, a MS in Marine Science from
            Louisiana State University, and a PhD in Geography from the
            University of Illinois at Urbana-Champaign.
          </Text>
        </Flex>
      </Flex>
    </Layout>
  );
};
