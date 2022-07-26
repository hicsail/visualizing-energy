import {
  Text,
  Flex,
  OrderedList,
  ListItem,
  UnorderedList,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";

export const About = () => {
  return (
    <Layout title={null}>
      <Flex gap="20px" direction="column" pt="24px">
        <Text fontSize="xl" fontWeight="bold">
          Visualizing Energy: Data analysis and visualization to equitably
          transform our energy system
        </Text>
        <Text>
          A project of the Institute for Sustainable Energy at Boston University
          in collaboration with Software &amp; Application Innovation Lab (SAIL)
          at the Hariri Institute for Computing
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          What are we Trying to Achieve?
        </Text>

        <Text>
          We propose to build a data-driven, online resource that will be the
          world’s go-to resource for trusted information about how our energy
          system can simultaneously improve human well- being and the health of
          the Earth’s natural systems.
        </Text>
        <Text>
          Visualizing Energy will steer the conversation to energy decisions
          that are feasible, desirable, and equitable.
        </Text>
        <Text>
          Visualizing Energy is a public good; its motivations and methods are
          transparent, and its data products are freely available to all.
        </Text>
        <Text>
          The writing and data products in Visualizing Energy will appear in
          student papers and teacher slide decks; reports from government
          agencies, the World Bank, and the International Monetary Fund;
          Wikipedia entries; posts on Instagram, Twitter and Medium; and in
          media outlets such as the Wall Street Journal, Vox, Bloomberg, the
          Economist, BBC News, Forbes, Reuters, and the Financial Times.
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          Why Do we Need This?
        </Text>
        <Text>
          We are in the early stages of a seismic energy transition. Such
          transitions coincide with major shifts in human well-being and the
          health of the Earth’s natural systems. The discovery of fire and the
          agricultural revolution dramatically improved food security,
          lengthening life expectancy and enabling population to expand. The
          Industrial Revolution was powered by the steam engine and accelerated
          by the internal combustion engine and other devices that use fossil
          fuels. Average individual well-being improved dramatically while the
          overall population grew eightfold since 1800.
        </Text>
        <Text>
          The main storyline of improvements in the human condition has two
          concurrent threads. The first is the massive increase in the
          extraction and processing of energy and materials, and the inescapable
          release of wastes, that has dramatically deteriorated the natural
          systems that support all life on the planet. Climate change is the
          penultimate example. The second thread is the persistent inequity in
          life opportunities within and among nations, including the
          disproportionate sharing of costs and benefits from economic growth,
          pollution, and climate change.
        </Text>
        <Text>
          Individuals, governments, and companies from the local to global scale
          are calling for a carbon neutral energy system. But there is deep
          disagreement, uncertainty, bias, and ignorance about our choices and
          their consequences. This is true not only for technical issues, but
          also for important questions related to equity, such as who bears the
          cost and benefits and who participates in the decision-making process.
        </Text>
        <Text>
          Visualizing Energy is rooted in the principle that reliable data,
          rigorous analysis, and communication to a wide swath of society is
          essential to sound decision making and good citizenship. We are awash
          in data but deficient in shared understanding of the interconnections
          among energy, society, and the environment. When coupled with rigorous
          analysis, visualization is essential to communication with a broad
          audience. It reveals connections that are cumbersome in words. A good
          visualization makes it easier for the viewer to quickly understand the
          information presented, and to apply it to other situations.
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          What is the Product?
        </Text>
        <Text>
          Each entry in Visualizing Energy will have two components: a data set
          represented in a compelling visualization, accompanied by a succinct,
          accessible written discussion. The entries will be organized in major
          themes: Energy and Climate Change, Markets for Energy, Household
          Energy Use, Energy Justice, Energy and the Economy, Sources of Energy,
          Energy and the Environment, etc.
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          Who is the Audience?
        </Text>
        <Text>
          Visualizing Energy aims to reach a very broad, international audience.
          Our content will be used by teachers and students from primary and
          secondary schools through institutions of higher education;
          journalists; researchers, and decision makers who seek trusted and
          accessible data and analysis. We want to support the efforts of any
          individual who seeks more information about the role of energy in
          society and environmental change.
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          What Issues Will be Addressed?
        </Text>
        <Text>
          Visualizing Energy will be on the leading edge of the pressing
          energy-related issues of the day. It will include entries on obvious
          topics such as oil prices and reserves, greenhouse gas emissions, and
          trends in the cost of renewable energy. But we will dig much deeper
          and add insight to key questions. Should we invest in a new generation
          of nuclear reactors? Do carbon offsets reduce greenhouse gases
          emissions? What’s the difference between blue and green hydrogen, and
          can they/should replace natural gas? What are the health and economic
          benefits of energy efficient buildings? How do energy poverty and
          energy insecurity manifest themselves in India compared to the United
          States? How will the rising demand for energy- related minerals shape
          global geopolitics?
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          Where Will the Data Come From?
        </Text>
        <OrderedList>
          <ListItem>
            <Text>
              Peer-reviewed journals such Nature Energy, Energy Economics,
              Global Environmental Change, Renewable and Sustainable Energy
              Reviews, Energy Research &amp; Social Science, Climactic Change,
              and Environmental Science and Technology.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Specialized organizations, such as the International Trade Center,
              the Global Carbon Project, the Joint Organizations Data
              Initiative, the World Nuclear Association, the Organization of
              Petroleum Exporting Countries, and the International Renewable
              Energy Agency.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Statistical agencies and international institutions such as the
              World Bank, the International Energy Agency, the U.S. Energy
              Information Administration, Eurostat, and the United Nations.
            </Text>
          </ListItem>
        </OrderedList>

        <Text fontSize="xl" fontWeight="bold">
          Who Provides the Analysis?
        </Text>
        <Text>
          Core content will be generated by the faculty, post-docs, research
          staff, and graduate students affiliated with the ISE, including the
          School of Public Health, the Hariri Institute for Computing, the
          Pardee School of Global Studies, the College of Arts and Sciences, the
          Center for Antiracist Research, the College of Communication, the
          Questrom School of Business, the College of Engineering, and the
          Global Development Policy Center.
        </Text>
        <Text>
          We will also solicit guest posts from outside individuals and
          organizations.
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          Who Has Access to the Content?
        </Text>
        <UnorderedList>
          <ListItem>
            <Text>All content is free.</Text>
          </ListItem>
          <ListItem>
            <Text>
              Most content—data, text, and visualizations—can be downloaded and
              reused under a{" "}
              <Text as="span" color="blue.500">
                <Link href="">CCBY</Link>
              </Text>{" "}
              license. Intellectual property rights may prevent some data from
              reuse.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              All code written in support of analysis and visualization is open
              source under the{" "}
              <Text as="span" color="blue.500">
                <Link href="">MIT license</Link>
              </Text>
              and hosted at
              <Text as="span" color="blue.500">
                <Link href=""> Github</Link>
              </Text>
              <Text>
                All data and visualizations will be available for download in
                standard formats (XLSX, CSV, PNG, SVG, Word, PDF, PowerPoint,
                etc.)
              </Text>
            </Text>
          </ListItem>
        </UnorderedList>
        <Text fontSize="xl" fontWeight="bold">
          How is Success Measured?
        </Text>
        <Text>
          The success of Visualizing Energy will be measured by the extent to
          which its content is cited and used in the classroom, all forms of
          media, blogs, research, reports, and other avenues that influence the
          public discussion of the connection between energy and sustainability.
          We will develop metrics and collect data to quantify such benchmarks.
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          How Will People Discover Visualizing Energy?
        </Text>
        <Text>
          Visualizing Energy will be accompanied by a robust marketing and
          communications program. We will clearly articulate our mission,
          identify our target audience, create effective messaging and
          positioning, and execute in the right marketing channels.
        </Text>
      </Flex>
    </Layout>
  );
};
